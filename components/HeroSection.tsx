import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  AudioLines,
  BookOpen,
  Brain,
  CheckCircle2,
  Clock3,
  Layers,
  Sparkles,
  Upload,
  WandSparkles,
} from "lucide-react";

const HeroSection = () => {
  const features = [
    { icon: AudioLines, label: "Natural Voice Chat" },
    { icon: BookOpen, label: "Books, PDFs, Notes" },
    { icon: Brain, label: "Context-Aware Answers" },
  ];

  const journey = [
    {
      number: "01",
      title: "Upload Your Material",
      description: "Drop books, PDFs, and study notes in one place.",
      icon: Upload,
    },
    {
      number: "02",
      title: "AI Maps The Knowledge",
      description: "We segment, index, and understand every chapter fast.",
      icon: Layers,
    },
    {
      number: "03",
      title: "Talk And Learn",
      description: "Ask with your voice and receive clear, cited answers.",
      icon: WandSparkles,
    },
  ];

  const benefits = [
    {
      icon: Clock3,
      title: "Faster Study Sessions",
      description: "Find the exact concept you need in seconds, not hours.",
    },
    {
      icon: Sparkles,
      title: "Natural Learning Flow",
      description: "Converse naturally instead of scrolling endless pages.",
    },
    {
      icon: CheckCircle2,
      title: "Reliable Explanations",
      description: "Answers stay grounded in your own uploaded material.",
    },
  ];

  return (
    <section className="wrapper relative mb-14 overflow-hidden pt-8 sm:pt-10 md:mb-20 md:pt-12">
      <div className="pointer-events-none absolute -left-24 top-10 h-48 w-48 rounded-full bg-[#ffd894]/25 blur-3xl sm:-left-20 sm:top-14 sm:h-56 sm:w-56" />
      <div className="pointer-events-none absolute -right-24 -top-4 h-56 w-56 rounded-full bg-[#8fb8ff]/20 blur-3xl sm:-right-20 sm:top-0 sm:h-64 sm:w-64" />

      <div className="relative z-10 mb-8 flex justify-center sm:mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#f3e4c7] bg-white/80 px-3 py-2 text-center backdrop-blur-sm shadow-soft-sm sm:px-4">
          <Sparkles className="h-4 w-4 shrink-0 text-[#663820]" />
          <span className="text-[11px] font-semibold tracking-widest text-[#663820] sm:text-sm">
            NEW EXPERIENCE FOR FOCUSED LEARNING
          </span>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <h1 className="text-3xl font-serif font-bold leading-[1.08] tracking-tight text-[#1d2738] sm:text-5xl sm:leading-[1.05] lg:text-6xl">
            Turn Every Document
            <span className="mt-2 block bg-linear-to-r from-[#663820] via-[#3d485e] to-[#264966] bg-clip-text text-transparent">
              Into A Living Conversation
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-[15px] font-light leading-relaxed text-[#425067] sm:mt-6 sm:text-lg">
            Readora gives your reading material a voice. Upload once, ask
            naturally, and get clear answers tied to your own content.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:mt-7 sm:gap-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.label}
                  className="flex items-center gap-2 rounded-full border border-[#ecdab7] bg-white px-3 py-2 shadow-soft-sm transition-all duration-300 hover:border-[#663820] hover:shadow-soft sm:px-4"
                >
                  <Icon className="h-4 w-4 text-[#663820]" />
                  <span className="text-xs font-medium text-[#1d2738] sm:text-sm">
                    {feature.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href="/books/new"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-[#1f2d44] to-[#34547a] px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:scale-[1.02] hover:shadow-soft-lg active:scale-[0.98] sm:w-auto sm:px-7 sm:py-4 sm:text-base"
            >
              <span>Start With Your First Upload</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <div className="w-full rounded-xl border border-[#f3e4c7] bg-white/80 px-4 py-3 backdrop-blur-sm sm:w-auto">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#7a533a]">
                Typical setup
              </p>
              <p className="mt-1 text-sm text-[#33425a]">
                Less than 3 minutes to first answer
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-white/70 bg-linear-to-br from-[#fff9ee] via-[#fff4de] to-[#f0f6ff] p-4 shadow-soft-lg sm:p-6">
            <div className="mb-4 rounded-2xl border border-[#f1e1c2] bg-white/80 p-4 sm:mb-5 sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#7a533a]">
                Learning impact
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-[#f0e0c3] bg-white p-3">
                  <p className="text-xl font-bold text-[#1f2d44] sm:text-2xl">
                    10x
                  </p>
                  <p className="text-xs text-[#4a5b73]">Faster lookup</p>
                </div>
                <div className="rounded-xl border border-[#f0e0c3] bg-white p-3">
                  <p className="text-xl font-bold text-[#1f2d44] sm:text-2xl">
                    24/7
                  </p>
                  <p className="text-xs text-[#4a5b73]">Voice companion</p>
                </div>
              </div>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              {journey.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.number}
                    className="group relative rounded-2xl border border-[#f1e1c2] bg-white/85 p-3.5 transition-all duration-300 hover:border-[#663820] hover:shadow-soft sm:p-4"
                  >
                    {index < journey.length - 1 && (
                      <span className="pointer-events-none absolute left-[1.52rem] top-[4.1rem] hidden h-8 w-px bg-[#e4cfa7] sm:block" />
                    )}

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-[#f6e5c8] to-[#fff8ed] text-[#663820] transition-colors duration-300 group-hover:from-[#663820] group-hover:to-[#8a6c58] group-hover:text-white sm:h-11 sm:w-11">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <div className="mb-1 flex items-center gap-2">
                          <span className="rounded-md bg-[#f5e7cc] px-2 py-1 text-[10px] font-bold tracking-widest text-[#663820]">
                            STEP {step.number}
                          </span>
                        </div>
                        <h3 className="text-sm font-semibold text-[#1f2d44] sm:text-base">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-[13px] font-light leading-relaxed text-[#4a5b73] sm:text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <div
              key={benefit.title}
              className="group rounded-2xl border border-[#f0e0c3] bg-white/90 p-4 shadow-soft-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#663820] hover:shadow-soft sm:p-5"
            >
              <div className="mb-3 inline-flex rounded-lg bg-[#f8edda] p-2 text-[#663820]">
                <Icon className="h-4 w-4" />
              </div>
              <h3 className="text-base font-semibold text-[#1f2d44] transition-colors duration-300 group-hover:text-[#663820]">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-[#4a5b73]">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HeroSection;
