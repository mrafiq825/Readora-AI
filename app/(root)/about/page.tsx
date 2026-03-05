import Footer from "@/components/Footer";

const highlights = [
  {
    title: "Intelligent Document Processing",
    description:
      "Upload PDFs, books, and research papers. Readora-AI parses, segments, and indexes content for instant retrieval.",
  },
  {
    title: "Voice-First Interaction",
    description:
      "Talk naturally with your documents using real-time AI voice conversations designed for deeper understanding.",
  },
  {
    title: "Smart Learning & Discovery",
    description:
      "Search, organize, and explore ideas from your personal document library in one seamless workspace.",
  },
];

export default function AboutPage() {
  return (
    <>
      <main className="wrapper container">
        <section className="rounded-2xl border border-border bg-card p-6 md:p-10 shadow-soft-sm">
          <p className="text-sm font-medium text-muted-foreground mb-3">
            About Readora-AI
          </p>
          <h1 className="page-title-xl mb-4">Talk. Learn. Understand.</h1>
          <p className="subtitle max-w-3xl">
            Readora-AI transforms static documents into interactive voice
            conversations so you can learn faster, understand better, and engage
            with ideas in a natural, intuitive way.
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
            We are building a revolutionary way to interact with documents for
            students, professionals, and curious minds by combining voice AI
            with intelligent content understanding. Readora-AI helps you move
            from passive reading to active, spoken dialogue with your content.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
