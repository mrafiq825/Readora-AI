import type { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getBookBySlug } from "@/lib/actions/book.actions";
import VapiControls from "@/components/Vapicontrols";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const result = await getBookBySlug(slug);

  if (!result.success || !result.data) {
    return {
      title: "Book Not Found",
      description: "The requested book could not be found.",
    };
  }

  const book = result.data;

  return {
    title: `${book.title} by ${book.author}`,
    description: `Read and interact with "${book.title}" by ${book.author} using AI-powered voice conversations. Ask questions, explore concepts, and learn through natural dialogue.`,
    keywords: [
      book.title,
      book.author,
      "interactive reading",
      "voice AI book",
      "AI reading assistant",
    ],
    openGraph: {
      title: `${book.title} - Interactive Voice Reading`,
      description: `Experience "${book.title}" by ${book.author} with AI-powered voice conversations`,
      type: "article",
      images: book.coverURL ? [{ url: book.coverURL, alt: book.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${book.title} by ${book.author}`,
      description: `Read and interact with "${book.title}" using AI voice technology`,
      images: book.coverURL ? [book.coverURL] : [],
    },
  };
}

export default async function BookDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const { slug } = await params;
  const result = await getBookBySlug(slug);

  if (!result.success || !result.data) {
    redirect("/");
  }

  const book = result.data;

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#f8f4e9] via-[#fff6e5] to-[#f3e4c7]">
      <div className="pt-24 sm:pt-28 pb-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-white rounded-full border border-[#f3e4c7] mb-4">
              <span className="text-xs font-medium text-[#663820]">
                Interactive Reading Experience
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#212a3b] mb-2">
              {book.title}
            </h1>
            <p className="text-base sm:text-lg text-[#3d485e] font-light">
              by <span className="font-semibold">{book.author}</span>
            </p>
          </div>

          {/* Main Card Container */}
          <div className="bg-white rounded-2xl shadow-soft-lg border border-[#f3e4c7] overflow-hidden mb-8">
            {/* Content Area */}
            <div className="p-6 sm:p-8 lg:p-12">
              <VapiControls book={book} />
            </div>
          </div>

          {/* Info Footer */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-center sm:text-left">
            <div className="flex-1 bg-white p-4 rounded-lg border border-[#f3e4c7]">
              <p className="text-xs text-[#3d485e] font-light">
                <span className="block font-semibold text-[#212a3b] mb-1">
                  💡 Tip
                </span>
                Click the microphone to start your interactive reading
                experience
              </p>
            </div>
            <div className="flex-1 bg-[#fff6e5] p-4 rounded-lg border border-[#f3e4c7]">
              <p className="text-xs text-[#3d485e] font-light">
                <span className="block font-semibold text-[#212a3b] mb-1">
                  🎧 Feature
                </span>
                Talk to the AI assistant while reading
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
