import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="wrapper mb-10 md:mb-16">
      <div className="mb-6 md:mb-8 rounded-2xl border border-border bg-card p-5 md:p-7 shadow-soft-sm">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="px-3 py-1 rounded-full bg-(--bg-secondary) text-sm font-medium text-(--text-primary)">
            AI Book Assistant
          </span>
          <span className="px-3 py-1 rounded-full bg-(--bg-secondary) text-sm font-medium text-(--text-primary)">
            PDF Book Chat
          </span>
          <span className="px-3 py-1 rounded-full bg-(--bg-secondary) text-sm font-medium text-(--text-primary)">
            Interactive Reading
          </span>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm md:text-base font-medium text-(--text-secondary)">
            AI-powered book learning platform
          </p>
          <h2 className="mt-2 text-3xl md:text-5xl font-serif font-bold text-(--text-primary) leading-tight">
            Chat with PDF books using voice AI and smart search
          </h2>
          <p className="mt-3 text-base md:text-lg text-(--text-secondary) max-w-3xl mx-auto">
            Upload PDF books, ask questions in natural language, and get
            instant, context-aware answers from your personal AI reading
            assistant.
          </p>
        </div>
      </div>

      <div className="library-hero-card">
        <div className="library-hero-content">
          {/* Left Part */}
          <div className="library-hero-text">
            <h1 className="library-hero-title text-4xl font-serif font-bold">
              Your AI PDF Book Library
            </h1>
            <p className="library-hero-description">
              Turn every PDF into an interactive AI conversation for faster
              comprehension, deeper learning, and better retention.{" "}
              <br className="hidden md:block" />
              Listen, search, and discuss your books anytime.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto mt-2">
              <Link
                href="/books/new"
                className="library-cta-primary flex items-center justify-center"
              >
                <span className="text-3xl font-light mb-1 mr-2">+</span>
                <span className="text-(--text-primary)">
                  Upload your first PDF
                </span>
              </Link>{" "}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white text-sm text-(--text-secondary) shadow-soft-sm">
                Instant PDF processing
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-sm text-(--text-secondary) shadow-soft-sm">
                Voice AI Q&A
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-sm text-(--text-secondary) shadow-soft-sm">
                Semantic book search
              </span>
            </div>
          </div>

          {/* Center Part - Desktop */}
          <div className="library-hero-illustration-desktop">
            <Image
              src="/assets/hero-illustration.png"
              alt="Vintage books and a globe"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>

          {/* Center Part - Mobile (Hidden on Desktop) */}
          <div className="library-hero-illustration">
            <Image
              src="/assets/hero-illustration.png"
              alt="Vintage books and a globe"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>

          {/* Right Part */}
          <div className="library-steps-card min-w-65 max-w-70 z-10 shadow-soft-md">
            <ul className="space-y-6">
              <li className="library-step-item">
                <div className="library-step-number">1</div>
                <div className="flex flex-col">
                  <h3 className="library-step-title text-lg font-bold">
                    Upload PDF Book
                  </h3>
                  <p className="library-step-description text-gray-500">
                    Add your ebook in seconds
                  </p>
                </div>
              </li>
              <li className="library-step-item">
                <div className="library-step-number">2</div>
                <div className="flex flex-col">
                  <h3 className="library-step-title text-lg font-bold">
                    AI Content Analysis
                  </h3>
                  <p className="library-step-description text-gray-500">
                    We index chapters and key ideas
                  </p>
                </div>
              </li>
              <li className="library-step-item">
                <div className="library-step-number">3</div>
                <div className="flex flex-col">
                  <h3 className="library-step-title text-lg font-bold">
                    Ask with Voice
                  </h3>
                  <p className="library-step-description text-gray-500">
                    Get accurate answers from your book
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
