"use client";

import { ValidationError, useForm } from "@formspree/react";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function normalizeFormspreeId(value: string) {
  const trimmed = value.trim();
  const match = trimmed.match(/formspree\.io\/f\/([a-zA-Z0-9]+)/);
  return match?.[1] ?? trimmed;
}

export default function ContactPage() {
  const formId = normalizeFormspreeId(
    process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? "",
  );
  const [state, handleSubmit, reset] = useForm(formId);

  return (
    <>
      <main className="wrapper container">
        {/* Hero Section */}
        <section className="rounded-2xl border border-border bg-card p-6 md:p-10 shadow-soft-sm">
          <p className="text-sm font-medium text-muted-foreground mb-3">
            Get in Touch
          </p>
          <h1 className="page-title-xl mb-4">Let's Start a Conversation</h1>
          <p className="subtitle max-w-3xl">
            Have questions about Readora-AI? Need help with your account? Or
            just want to share feedback? Drop us a message and we'll respond as
            soon as possible.
          </p>
        </section>

        {/* Contact Info Cards */}
        <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          <article className="rounded-2xl border border-border bg-card p-6 shadow-soft-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-(--accent-light) flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-(--color-brand)"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-black font-serif">
                Email
              </h2>
            </div>
            <p className="text-(--text-secondary) leading-7">
              rafkhan9323@gmail.com
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6 shadow-soft-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-(--accent-light) flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-(--color-brand)"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-black font-serif">
                Location
              </h2>
            </div>
            <p className="text-(--text-secondary) leading-7">
              KPITB Tower, 2nd Floor, Chamkani Peshawer, Pakistan
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6 shadow-soft-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-(--accent-light) flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-(--color-brand)"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-black font-serif">
                Response Time
              </h2>
            </div>
            <p className="text-(--text-secondary) leading-7">Within 24 hours</p>
          </article>
        </section>

        {/* Contact Form */}
        <section className="mt-10 max-w-3xl mx-auto">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-10 shadow-soft-sm">
            <h2 className="section-title mb-6">Send us a Message</h2>

            {!formId && (
              <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200">
                <p className="text-sm font-medium text-amber-800">
                  Set <code>NEXT_PUBLIC_FORMSPREE_FORM_ID</code> in
                  <code> .env.local</code> to activate this contact form. Use
                  only the form ID (for example, <code>xbdzrlke</code>) or the
                  full URL.
                </p>
              </div>
            )}

            {state.succeeded ? (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-green-50 border border-green-200">
                  <p className="text-sm font-medium text-green-800">
                    Thanks for contacting us. Your message has been sent.
                  </p>
                </div>
                <Button type="button" onClick={reset} className="form-btn">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="h-12"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="text-sm text-red-700"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="h-12"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-sm text-red-700"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    required
                    className="h-12"
                  />
                  <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                    className="text-sm text-red-700"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us more..."
                    required
                    className="w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-3 text-base shadow-xs transition-[color,box-shadow] outline-none resize-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] placeholder:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 md:text-sm"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-sm text-red-700"
                  />
                </div>

                <ValidationError
                  errors={state.errors}
                  className="text-sm text-red-700"
                />

                <Button
                  type="submit"
                  disabled={state.submitting || !formId}
                  className="form-btn"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
