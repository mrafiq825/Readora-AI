import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import UploadForm from "@/components/UploadForm";
import { connectToDatabase } from "@/database/mongoose";
import Book from "@/database/models/bookModel";
import { getUserPlan } from "@/lib/subscription.server";
import { PLAN_LIMITS } from "@/lib/subscription-constants";

export const metadata: Metadata = {
  title: "Upload New Document - Add to Your Library",
  description:
    "Upload your PDF, book, or research paper to create an interactive voice learning experience. Start conversing with your documents.",
  keywords: [
    "upload pdf",
    "add document",
    "upload book",
    "new document",
    "pdf upload",
  ],
  robots: {
    index: false,
    follow: true,
  },
};

const Page = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  await connectToDatabase();

  const plan = await getUserPlan();
  const maxBooks = PLAN_LIMITS[plan].maxBooks;
  const bookCount = await Book.countDocuments({ clerkId: userId });

  if (bookCount >= maxBooks) {
    redirect("/subscriptions");
  }

  return (
    <main className="new-book pt-[calc(var(--navbar-height)+4rem)]! sm:pt-[calc(var(--navbar-height)+5rem)]!">
      <section className="flex flex-col gap-5 text-center">
        <h1 className="page-title-xl">Add a New Book</h1>
        <p className="subtitle">
          Upload a PDF to generate your interactive reading experience
        </p>
      </section>
      <UploadForm />
    </main>
  );
};

export default Page;
