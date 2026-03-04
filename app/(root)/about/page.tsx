import Footer from "@/components/Footer";

const highlights = [
  {
    title: "Intelligent Book Processing",
    description:
      "Upload PDF books and let Bookify parse, segment, and index content for fast retrieval.",
  },
  {
    title: "Voice-First Learning",
    description:
      "Talk naturally with your books using AI voice conversations designed for deeper understanding.",
  },
  {
    title: "Built for Modern Readers",
    description:
      "Search, manage, and revisit ideas from your personal library in one focused workspace.",
  },
];

export default function AboutPage() {
  return (
    <>
      <main className="wrapper container">
        <section className="rounded-2xl border border-border bg-card p-6 md:p-10 shadow-soft-sm">
          <p className="text-sm font-medium text-muted-foreground mb-3">
            About Bookify
          </p>
          <h1 className="page-title-xl mb-4">Read Less. Understand More.</h1>
          <p className="subtitle max-w-3xl">
            Bookify transforms static books into interactive AI conversations so
            you can learn faster, remember more, and engage with ideas in a
            natural way.
          </p>
        </section>

        <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft-sm"
            >
              <h2 className="section-title mb-3">{item.title}</h2>
              <p className="text-(--text-secondary) leading-7">
                {item.description}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-2xl border border-border bg-(--bg-secondary) p-6 md:p-10">
          <h2 className="section-title mb-3">Our Mission</h2>
          <p className="text-(--text-secondary) leading-7 max-w-3xl">
            We are building a better reading experience for students,
            professionals, and curious minds by combining books with
            conversational AI. Bookify helps you move from passive reading to
            active dialogue with your content.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
