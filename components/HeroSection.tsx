import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mic, BookOpen, Zap, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="wrapper mb-16 md:mb-20">
      {/* Header Badge */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-[#f3e4c7] bg-white/50 backdrop-blur-sm shadow-soft-sm hover:shadow-soft transition-all duration-300">
          <span className="text-xs sm:text-sm font-medium text-[#663820] flex items-center gap-2">
            <Zap className="w-4 h-4" />
            New: Voice interactions now 50% faster
          </span>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="mb-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#212a3b] leading-tight mb-4 tracking-tight">
            Talk to Your Documents
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#663820] via-[#212a3b] to-[#3d485e]">
              Like Never Before
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#3d485e] max-w-2xl mx-auto leading-relaxed font-light">
            Transform PDFs and books into interactive conversations. Ask
            questions, get answers, and learn smarter with AI-powered voice
            interactions.
          </p>
        </div>

        {/* Feature Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {[
            { icon: Mic, label: "Voice Q&A" },
            { icon: BookOpen, label: "Any Document" },
            { icon: Zap, label: "Instant Answers" },
          ].map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.label}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#f3e4c7] shadow-soft-sm hover:shadow-soft hover:border-[#663820] transition-all duration-300"
              >
                <Icon className="w-4 h-4 text-[#663820]" />
                <span className="text-sm font-medium text-[#212a3b]">
                  {feature.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mb-16">
        <Link
          href="/books/new"
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#212a3b] to-[#3d485e] text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-soft-lg hover:scale-105 active:scale-95"
        >
          <span className="text-2xl font-light">+</span>
          <span>Upload Your First Document</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* Main Hero Card */}
      <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#f3e4c7] via-[#fff6e5] to-[#f8f4e9] p-8 sm:p-12 lg:p-16 border border-white/50 shadow-soft-lg relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-world-illustration/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200/5 rounded-full blur-3xl -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="lg:col-span-1 flex flex-col justify-center">
            <div className="mb-6">
              <div className="inline-block px-4 py-2 bg-white rounded-lg border border-[#f3e4c7] mb-4">
                <span className="text-sm font-semibold text-[#663820]">
                  How It Works
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#212a3b] leading-tight mb-4">
                Three Simple Steps to Smart Learning
              </h2>
              <p className="text-base text-[#3d485e] font-light leading-relaxed">
                Get started in minutes. Upload, process, and interact with your
                documents using natural voice conversations.
              </p>
            </div>
          </div>

          {/* Center Illustration */}
          <div className="lg:col-span-1 flex items-center justify-center">
            <div className="relative w-full aspect-square flex items-center justify-center">
              <Image
                src="/assets/hero-illustration.png"
                alt="Document AI Workflow"
                width={320}
                height={320}
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>
          </div>

          {/* Right Steps */}
          <div className="lg:col-span-1 space-y-5">
            {[
              {
                number: "01",
                title: "Upload Documents",
                description: "Add PDFs, books, or research papers instantly",
                icon: "📁",
              },
              {
                number: "02",
                title: "AI Processing",
                description: "We analyze and index all key information",
                icon: "⚡",
              },
              {
                number: "03",
                title: "Voice Interaction",
                description: "Ask questions and get instant answers",
                icon: "🎤",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="group p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-white/50 hover:border-[#663820] hover:shadow-soft transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#f3e4c7] to-[#fff6e5] group-hover:from-[#663820] group-hover:to-[#8B7355] transition-all duration-300">
                      <span className="text-lg">{step.icon}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-block px-2 py-1 bg-[#f3e4c7] text-xs font-bold text-[#663820] rounded">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="font-semibold text-[#212a3b] mb-1 group-hover:text-[#663820] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#3d485e] font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          {
            title: "⚡ Lightning Fast",
            description: "Process documents and get answers in seconds",
          },
          {
            title: "🧠 Smart Learning",
            description: "Understand content deeper with AI assistance",
          },
          {
            title: "🎯 Accurate Results",
            description: "Context-aware answers from your documents",
          },
        ].map((benefit, index) => (
          <div
            key={index}
            className="group p-6 bg-white rounded-xl border border-[#f3e4c7] shadow-soft-sm hover:shadow-soft-lg hover:border-[#663820] transition-all duration-300"
          >
            <h3 className="font-semibold text-[#212a3b] mb-2 text-lg group-hover:text-[#663820] transition-colors">
              {benefit.title}
            </h3>
            <p className="text-sm text-[#3d485e] font-light leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
