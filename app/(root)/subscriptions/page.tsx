import type { Metadata } from "next";
import { PricingTable } from "@clerk/nextjs";
import { CheckCircle2, Clock3, FileText, Sparkles, Waves } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing & Plans - Choose Your Subscription",
  description:
    "Upgrade to unlock more documents, longer voice sessions, and advanced AI features. Choose the perfect plan for your learning needs.",
  keywords: [
    "readora pricing",
    "subscription plans",
    "premium features",
    "AI voice plans",
    "document limits",
  ],
  openGraph: {
    title: "Readora Pricing - Unlock Premium Features",
    description:
      "Choose the perfect plan for your AI-powered learning journey. More documents, longer sessions, advanced features.",
    type: "website",
  },
};

export default function SubscriptionsPage() {
  const highlights = [
    {
      title: "More Documents",
      description:
        "Scale from occasional uploads to an always-on personal library.",
      icon: FileText,
    },
    {
      title: "Longer Voice Sessions",
      description:
        "Stay in flow with extended conversations and fewer interruptions.",
      icon: Waves,
    },
    {
      title: "Faster Study Loops",
      description:
        "Use AI summaries and Q&A to reduce revision time each week.",
      icon: Clock3,
    },
  ];

  const included = [
    "Secure document storage",
    "Context-aware answers",
    "Cross-device access",
    "Simple upgrade or cancel anytime",
  ];

  return (
    <main className="container wrapper relative overflow-hidden py-10">
      <div className="pointer-events-none absolute -top-30 -left-14 h-72 w-72 rounded-full bg-[#f3e4c7]/70 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-16 h-80 w-80 rounded-full bg-[#fff6e5] blur-3xl" />

      <section className="relative mb-12 rounded-3xl border border-(--border-medium) bg-linear-to-br from-[#fff8ec] via-[#f8f4e9] to-[#f3e4c7]/70 px-6 py-10 shadow-soft-lg sm:px-10">
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d8c3a5] bg-white/85 px-4 py-2 text-xs font-semibold tracking-[0.13em] text-[#663820] uppercase">
            <Sparkles className="h-4 w-4" />
            Pricing that grows with your learning
          </span>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-(--text-primary) sm:text-5xl">
            Choose Your Plan, Study Smarter
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-(--text-secondary) sm:text-lg">
            Start free and upgrade when you are ready for deeper document
            analysis, longer voice sessions, and a faster path from reading to
            understanding.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-[#ecd9bc] bg-white/85 p-5 shadow-soft-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft"
              >
                <Icon className="mb-3 h-5 w-5 text-[#663820]" />
                <h2 className="text-lg font-semibold text-(--text-primary)">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative rounded-3xl border border-(--border-medium) bg-white/80 p-4 shadow-soft-lg backdrop-blur-sm sm:p-8">
        <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-[#f0debf] bg-linear-to-r from-[#fff6e5] to-[#f8f4e9] p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#663820]">
              Included in every plan
            </p>
            <p className="mt-1 text-sm text-(--text-secondary)">
              Flexible billing, secure account management, and seamless access.
            </p>
          </div>
          <ul className="grid gap-2 text-sm text-(--text-primary) sm:text-right">
            {included.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 sm:justify-end"
              >
                <CheckCircle2 className="h-4 w-4 text-[#7c9a82]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-[#efdfc4] bg-[#fffdf9] p-3 sm:p-5">
          <PricingTable />
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          {
            title: "No Hidden Fees",
            description: "What you see in pricing is exactly what you pay.",
          },
          {
            title: "Built for Learners",
            description:
              "Designed for students, researchers, and professionals working with long-form documents.",
          },
          {
            title: "Cancel Any Time",
            description:
              "You stay in control. Upgrade, downgrade, or cancel without friction.",
          },
        ].map((note) => (
          <article
            key={note.title}
            className="rounded-2xl border border-(--border-subtle) bg-white/75 p-5 shadow-soft-sm"
          >
            <h3 className="text-base font-semibold text-(--text-primary)">
              {note.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">
              {note.description}
            </p>
          </article>
        ))}
      </section>

      <p className="mt-7 text-center text-xs text-(--text-secondary)">
        Need help deciding? Reach us via the contact page and we will suggest
        the right plan for your usage.
      </p>
    </main>
  );
}
