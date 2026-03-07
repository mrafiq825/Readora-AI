"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Upload,
  ImageIcon,
  CheckCircle,
  BookOpen,
  Mic,
  FileText,
} from "lucide-react";
import { UploadSchema } from "@/lib/zod";
import { BookUploadFormValues } from "@/types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ACCEPTED_PDF_TYPES, ACCEPTED_IMAGE_TYPES } from "@/lib/constants";
import FileUploader from "./FileUploader";
import VoiceSelector from "./VoiceSelector";
import LoadingOverlay from "./LoadingOverlay";
import { useAuth } from "@clerk/nextjs";
import { toast } from "sonner";
import {
  checkBookExists,
  createBook,
  saveBookSegments,
} from "@/lib/actions/book.actions";
import { useRouter } from "next/navigation";
import { parsePDFFile } from "@/lib/utils";
import { upload } from "@vercel/blob/client";
import { cn } from "@/lib/utils";

const UploadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [currentStep] = useState(1);
  const { userId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm<BookUploadFormValues>({
    resolver: zodResolver(UploadSchema),
    defaultValues: {
      title: "",
      author: "",
      persona: "",
      pdfFile: undefined,
      coverImage: undefined,
    },
    mode: "onChange",
  });

  const watchPdfFile = form.watch("pdfFile");
  const watchTitle = form.watch("title");
  const watchAuthor = form.watch("author");
  const watchPersona = form.watch("persona");

  // Determine step completion
  const isStep1Complete = !!watchPdfFile;
  const isStep2Complete = !!watchTitle && !!watchAuthor;
  const isStep3Complete = !!watchPersona;

  const onSubmit = async (data: BookUploadFormValues) => {
    if (!userId) {
      return toast.error("Please login to upload books");
    }

    setIsSubmitting(true);

    try {
      const existsCheck = await checkBookExists(data.title);

      if (existsCheck.exists && existsCheck.book) {
        toast.info("Book with same title already exists.");
        form.reset();
        router.push(`/books/${existsCheck.book.slug}`);
        return;
      }

      const fileTitle = data.title.replace(/\s+/g, "-").toLowerCase();
      const pdfFile = data.pdfFile;

      const parsedPDF = await parsePDFFile(pdfFile);

      if (parsedPDF.content.length === 0) {
        toast.error(
          "Failed to parse PDF. Please try again with a different file.",
        );
        return;
      }

      const uploadedPdfBlob = await upload(fileTitle, pdfFile, {
        access: "public",
        handleUploadUrl: "/api/upload",
        contentType: "application/pdf",
      });

      let coverUrl: string;

      if (data.coverImage) {
        const coverFile = data.coverImage;
        const uploadedCoverBlob = await upload(
          `${fileTitle}_cover.png`,
          coverFile,
          {
            access: "public",
            handleUploadUrl: "/api/upload",
            contentType: coverFile.type,
          },
        );
        coverUrl = uploadedCoverBlob.url;
      } else {
        const response = await fetch(parsedPDF.cover);
        const blob = await response.blob();

        const uploadedCoverBlob = await upload(`${fileTitle}_cover.png`, blob, {
          access: "public",
          handleUploadUrl: "/api/upload",
          contentType: "image/png",
        });
        coverUrl = uploadedCoverBlob.url;
      }

      const book = await createBook({
        clerkId: userId,
        title: data.title,
        author: data.author,
        persona: data.persona,
        fileURL: uploadedPdfBlob.url,
        fileBlobKey: uploadedPdfBlob.pathname,
        coverURL: coverUrl,
        fileSize: pdfFile.size,
      });

      if (!book.success) {
        toast.error((book.error as string) || "Failed to create book");
        if (book.isBillingError) {
          router.push("/subscriptions");
        }
        return;
      }

      if (book.alreadyExists) {
        toast.info("Book with same title already exists.");
        form.reset();
        router.push(`/books/${book.data.slug}`);
        return;
      }

      const segments = await saveBookSegments(
        book.data._id,
        userId,
        parsedPDF.content,
      );

      if (!segments.success) {
        toast.error("Failed to save book segments");
        throw new Error("Failed to save book segments");
      }

      toast.success("Book uploaded successfully!");
      form.reset();
      router.push("/");
    } catch (error) {
      console.error(error);
      toast.error("Failed to upload book. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isMounted) return null;

  return (
    <>
      {isSubmitting && <LoadingOverlay />}

      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Progress Step Indicator */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            {/* Step 1 */}
            <div className="flex items-center flex-1">
              <div
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full font-semibold transition-all duration-300",
                  isStep1Complete
                    ? "bg-[#7c9a82] text-white"
                    : currentStep === 1
                      ? "bg-[#212a3b] text-white"
                      : "bg-[#f3e4c7] text-[#3d485e]",
                )}
              >
                {isStep1Complete ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <FileText className="w-5 h-5" />
                )}
              </div>
              <div className="ml-3">
                <p className="font-semibold text-[#212a3b] text-sm">Upload</p>
                <p className="text-xs text-[#3d485e] font-light">PDF & Cover</p>
              </div>
            </div>

            {/* Connector */}
            <div className="hidden sm:block w-8 h-0.5 bg-[#f3e4c7] mt-2" />

            {/* Step 2 */}
            <div className="flex items-center flex-1">
              <div
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full font-semibold transition-all duration-300",
                  isStep2Complete
                    ? "bg-[#7c9a82] text-white"
                    : currentStep === 2
                      ? "bg-[#212a3b] text-white"
                      : "bg-[#f3e4c7] text-[#3d485e]",
                )}
              >
                {isStep2Complete ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <BookOpen className="w-5 h-5" />
                )}
              </div>
              <div className="ml-3">
                <p className="font-semibold text-[#212a3b] text-sm">Details</p>
                <p className="text-xs text-[#3d485e] font-light">Book Info</p>
              </div>
            </div>

            {/* Connector */}
            <div className="hidden sm:block w-8 h-0.5 bg-[#f3e4c7] mt-2" />

            {/* Step 3 */}
            <div className="flex items-center flex-1">
              <div
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full font-semibold transition-all duration-300",
                  isStep3Complete
                    ? "bg-[#7c9a82] text-white"
                    : currentStep === 3
                      ? "bg-[#212a3b] text-white"
                      : "bg-[#f3e4c7] text-[#3d485e]",
                )}
              >
                {isStep3Complete ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <Mic className="w-5 h-5" />
                )}
              </div>
              <div className="ml-3">
                <p className="font-semibold text-[#212a3b] text-sm">Voice</p>
                <p className="text-xs text-[#3d485e] font-light">Choose Tone</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-0">
            {/* Step 1: File Upload Section */}
            <div className="mb-10 bg-white rounded-2xl p-6 sm:p-8 shadow-soft border border-[#f3e4c7]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#fff6e5] flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#663820]" />
                </div>
                <h2 className="text-xl font-serif font-semibold text-[#212a3b]">
                  Upload Your Book
                </h2>
              </div>

              <div className="space-y-6">
                {/* PDF Upload */}
                <div>
                  <FileUploader
                    control={form.control}
                    name="pdfFile"
                    label="PDF File *"
                    acceptTypes={ACCEPTED_PDF_TYPES}
                    icon={Upload}
                    placeholder="Click to upload PDF"
                    hint="PDF file (max 50MB) • Required"
                    disabled={isSubmitting}
                  />
                  <p className="text-xs text-[#3d485e] mt-2 font-light">
                    Your PDF will be parsed and converted into an interactive
                    experience
                  </p>
                </div>

                {/* Cover Image Upload */}
                <div>
                  <FileUploader
                    control={form.control}
                    name="coverImage"
                    label="Cover Image"
                    acceptTypes={ACCEPTED_IMAGE_TYPES}
                    icon={ImageIcon}
                    placeholder="Click to upload cover image"
                    hint="PNG, JPG, or WebP (max 5MB) • Optional"
                    disabled={isSubmitting}
                  />
                  <p className="text-xs text-[#3d485e] mt-2 font-light">
                    If not provided, we will auto-generate a cover from your PDF
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: Details Section */}
            <div className="mb-10 bg-white rounded-2xl p-6 sm:p-8 shadow-soft border border-[#f3e4c7]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#fff6e5] flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-[#663820]" />
                </div>
                <h2 className="text-xl font-serif font-semibold text-[#212a3b]">
                  Book Details
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Title */}
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="form-label">
                        Title <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="form-input rounded-lg bg-[#f8f4e9] border-[#f3e4c7] focus:border-[#212a3b] focus:ring-[#212a3b]/10"
                          placeholder="Forty Rules of Love"
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Author */}
                <FormField
                  control={form.control}
                  name="author"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="form-label">
                        Author <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="form-input rounded-lg bg-[#f8f4e9] border-[#f3e4c7] focus:border-[#212a3b] focus:ring-[#212a3b]/10"
                          placeholder="Elif Shafak"
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <p className="text-xs text-[#3d485e] mt-4 font-light">
                These details will be displayed with your book and help in
                search indexing
              </p>
            </div>

            {/* Step 3: Voice Selection Section */}
            <div className="mb-10 bg-white rounded-2xl p-6 sm:p-8 shadow-soft border border-[#f3e4c7]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#fff6e5] flex items-center justify-center">
                  <Mic className="w-5 h-5 text-[#663820]" />
                </div>
                <h2 className="text-xl font-serif font-semibold text-[#212a3b]">
                  Assistant Voice
                </h2>
              </div>

              <FormField
                control={form.control}
                name="persona"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="form-label mb-4">
                      Choose a voice <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <VoiceSelector
                        value={field.value}
                        onChange={field.onChange}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <p className="text-xs text-[#3d485e] mt-4 font-light">
                The assistant voice will guide readers through the book and
                provide interactive features
              </p>
            </div>

            {/* Submit Section */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                disabled={isSubmitting || !isStep3Complete}
                className={cn(
                  "flex-1 form-btn rounded-lg py-3 font-semibold text-base transition-all duration-300",
                  !isStep3Complete
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:shadow-soft-lg hover:scale-105 active:scale-95",
                )}
              >
                {isSubmitting ? "Processing..." : "Begin Synthesis"}
              </Button>
            </div>

            {/* Info Box */}
            <div className="mt-8 bg-[#fff6e5] rounded-lg p-4 border border-[#f3e4c7]">
              <p className="text-sm text-[#3d485e] font-light">
                <span className="font-semibold text-[#212a3b]">
                  Ready to create?
                </span>{" "}
                All required fields marked with{" "}
                <span className="text-red-500">*</span> must be filled.
                Processing typically takes a few minutes depending on file size.
              </p>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default UploadForm;
