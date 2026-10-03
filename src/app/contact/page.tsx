"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { COMPANY } from "@/lib/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="py-24 md:py-32">
        <div className="container-site">
          <SectionHeading
            label="Contact"
            title="Let's talk about what you're building"
            description="Whether you have a specific project in mind or you're just exploring possibilities, we'd love to hear from you."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 max-w-5xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
                  <div className="text-4xl mb-4">✦</div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-2">
                    Thanks for reaching out
                  </h3>
                  <p className="text-stone-500 text-sm">
                    We&apos;ll review your message and get back to you within
                    one business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-stone-700 mb-1.5"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-stone-200 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400 transition-all"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-stone-700 mb-1.5"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-stone-200 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400 transition-all"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-stone-700 mb-1.5"
                    >
                      Work email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-stone-200 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400 transition-all"
                      placeholder="jane@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-stone-700 mb-1.5"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-stone-200 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400 transition-all"
                      placeholder="Acme Inc."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-sm font-medium text-stone-700 mb-1.5"
                    >
                      What are you interested in?
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400 transition-all"
                    >
                      <option value="">Select an option</option>
                      <option value="ai-strategy">
                        AI Strategy & Consulting
                      </option>
                      <option value="custom-ai">Custom AI Development</option>
                      <option value="digital-products">
                        Digital Product Design
                      </option>
                      <option value="data-engineering">
                        Data Engineering
                      </option>
                      <option value="ai-integration">
                        AI Integration & Automation
                      </option>
                      <option value="growth">Growth & Optimization</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-stone-700 mb-1.5"
                    >
                      Tell us about your project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-stone-200 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400 transition-all resize-none"
                      placeholder="What challenges are you facing? What does success look like?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-sm font-semibold rounded-full bg-stone-900 text-white hover:bg-stone-800 active:bg-stone-950 transition-colors shadow-sm hover:shadow-md cursor-pointer"
                  >
                    Send Message
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-sm font-semibold text-stone-900 mb-3">
                  Email
                </h3>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-sm text-stone-500 hover:text-amber-700 transition-colors"
                >
                  {COMPANY.email}
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-stone-900 mb-3">
                  Location
                </h3>
                <p className="text-sm text-stone-500">{COMPANY.address}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-stone-900 mb-3">
                  Response time
                </h3>
                <p className="text-sm text-stone-500">
                  We typically respond within one business day.
                </p>
              </div>

              {/* Info card */}
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-stone-900 mb-2">
                  Not sure where to start?
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  That&apos;s completely fine. Many of our best partnerships
                  started with an exploratory conversation. Tell us about your
                  business and challenges, and we&apos;ll help identify where
                  AI and digital products can make the biggest impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
