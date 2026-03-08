import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowLeft, BookOpen, Mic, Sparkles } from "lucide-react";
import { CLERK_AUTH_APPEARANCE_OVERRIDE } from "@/lib/constants";

export default function Page() {
  return (
    <main className="auth-wrapper px-3! sm:px-5!">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 items-stretch">
        <section className="hidden lg:flex rounded-3xl border border-white/60 bg-linear-to-br from-[#f3e4c7] via-[#fff6e5] to-[#f8f4e9] p-8 xl:p-10 shadow-soft-lg">
          <div className="flex flex-col h-full">
            <Link
              href="/"
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-[#3d485e] hover:text-[#212a3b] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>

            <div className="mt-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#f3e4c7] shadow-soft-sm">
                <Sparkles className="w-4 h-4 text-[#663820]" />
                <span className="text-xs font-semibold text-[#663820] tracking-wide uppercase">
                  Welcome back
                </span>
              </div>

              <h1 className="mt-5 text-4xl font-serif font-bold text-[#212a3b] leading-tight">
                Continue Your Voice Learning Journey
              </h1>

              <p className="mt-4 text-base text-[#3d485e] leading-relaxed max-w-md">
                Sign in to open your document library, resume saved sessions,
                and keep learning through natural conversations.
              </p>
            </div>

            <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              <div className="rounded-xl bg-white/80 border border-[#f3e4c7] p-4">
                <BookOpen className="w-5 h-5 text-[#663820]" />
                <p className="mt-2 text-sm font-semibold text-[#212a3b]">
                  Access your library
                </p>
                <p className="text-sm text-[#3d485e]">
                  Revisit PDFs and books from any device.
                </p>
              </div>

              <div className="rounded-xl bg-white/80 border border-[#f3e4c7] p-4">
                <Mic className="w-5 h-5 text-[#663820]" />
                <p className="mt-2 text-sm font-semibold text-[#212a3b]">
                  Keep conversations going
                </p>
                <p className="text-sm text-[#3d485e]">
                  Continue voice Q&A exactly where you left off.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="auth-shadow w-full max-w-xl mx-auto lg:max-w-none rounded-2xl sm:rounded-3xl border border-white/60 shadow-soft-lg px-3 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 bg-white/80 backdrop-blur-sm overflow-hidden">
          <div className="mb-5 lg:hidden">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#3d485e] hover:text-[#212a3b] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
          </div>

          <div className="w-full overflow-x-hidden">
            <SignIn
              routing="path"
              path="/sign-in"
              appearance={{
                elements: {
                  ...CLERK_AUTH_APPEARANCE_OVERRIDE,
                  rootBox: `${CLERK_AUTH_APPEARANCE_OVERRIDE.rootBox} w-full`,
                  card: `${CLERK_AUTH_APPEARANCE_OVERRIDE.card} !w-full`,
                },
              }}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
