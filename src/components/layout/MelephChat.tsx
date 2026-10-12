"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const STORAGE_KEY = "meleph-chat-v2";
const OPEN_EVENT = "meleph:open-chat";

type Lead = { name: string; email: string; Phone_number: string; Longtext: string };
const EMPTY_LEAD: Lead = { name: "", email: "", Phone_number: "", Longtext: "" };

const GREETING: Msg = {
  role: "assistant",
  content: "Hi there 👋\n\nYou're now speaking with Mel. How can I help?",
};

const SUGGESTIONS = [
  "What does the AI Customer Agent do?",
  "I need a custom AI system",
  "Request a demo",
];

/** Open the Meleph chat panel from any component. */
export function openChat() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(OPEN_EVENT));
  }
}

export function MelephChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [lead, setLead] = useState<Lead>(EMPTY_LEAD);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Restore conversation (never auto-opens).
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as { messages?: Msg[]; lead?: Lead };
        if (Array.isArray(parsed.messages) && parsed.messages.length) setMessages(parsed.messages);
        if (parsed.lead) setLead({ ...EMPTY_LEAD, ...parsed.lead });
      }
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ messages, lead }));
    } catch {}
  }, [messages, lead, hydrated]);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, handler);
    return () => window.removeEventListener(OPEN_EVENT, handler);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading, open]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const send = useCallback(
    async (text: string) => {
      const content = text.trim();
      if (!content || loading) return;
      const next: Msg[] = [...messages, { role: "user", content }];
      setMessages(next);
      setInput("");
      setLoading(true);
      try {
        // The API expects the conversation to start with a visitor message.
        const payload = next.slice(next.findIndex((m) => m.role === "user"));
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: payload, lead }),
        });
        const data = await res.json();
        if (data.lead) setLead({ ...EMPTY_LEAD, ...data.lead });
        setMessages([...next, { role: "assistant", content: data.reply ?? "Something went wrong." }]);
      } catch {
        setMessages([
          ...next,
          { role: "assistant", content: "I couldn't connect just now. Please try again in a moment." },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [messages, loading, lead],
  );

  const showSuggestions = messages.length === 1;

  return (
    <>
      {open && (
        <section
          id="meleph-chat-panel"
          role="dialog"
          aria-label="Mel, Meleph AI Customer Agent"
          className="fixed z-[60] flex flex-col overflow-hidden border border-[#0D1B2A]/10 bg-[#FAF8F3] shadow-[0_24px_60px_-20px_rgba(13,27,42,0.35)] inset-0 sm:inset-auto sm:bottom-24 sm:right-6 sm:h-[600px] sm:max-h-[calc(100vh-8rem)] sm:w-[400px] sm:rounded-2xl animate-[meleph-chat-in_220ms_ease-out]"
        >
          <header className="flex items-center justify-between bg-[#0D1B2A] px-5 py-4 text-[#FAF8F3]">
            <div>
              <p className="font-[family-name:var(--font-cormorant)] text-xl leading-none">Mel</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[#C9A968]">
                Meleph AI Customer Agent
              </p>
            </div>
            <button
              id="meleph-chat-close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-2 transition hover:bg-white/10"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </header>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-5">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                <div
                  className={
                    m.role === "user"
                      ? "max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-br-sm bg-[#0D1B2A] px-4 py-2.5 text-sm leading-relaxed text-[#FAF8F3]"
                      : "max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-bl-sm border border-[#0D1B2A]/10 bg-[#F4F0E8] px-4 py-2.5 text-sm leading-relaxed text-[#0D1B2A]"
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="flex gap-1 rounded-2xl rounded-bl-sm border border-[#0D1B2A]/10 bg-[#F4F0E8] px-4 py-3" aria-label="Agent is typing">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#0D1B2A]/50"
                      style={{ animationDelay: `${d * 150}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {showSuggestions && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="rounded-full border border-[#0D1B2A]/20 px-3.5 py-1.5 text-xs text-[#0D1B2A] transition hover:border-[#0D1B2A] hover:bg-[#0D1B2A] hover:text-[#FAF8F3]"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-end gap-2 border-t border-[#0D1B2A]/10 bg-[#FAF8F3] p-3"
          >
            <textarea
              ref={inputRef}
              id="meleph-chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send(input);
                }
              }}
              rows={1}
              maxLength={1000}
              placeholder="Message…"
              className="max-h-28 flex-1 resize-none rounded-xl border border-[#0D1B2A]/15 bg-white px-3.5 py-2.5 text-sm text-[#0D1B2A] outline-none placeholder:text-[#0D1B2A]/40 focus:border-[#0D1B2A]/50"
            />
            <button
              id="meleph-chat-send"
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="rounded-xl bg-[#0D1B2A] p-2.5 text-[#FAF8F3] transition hover:bg-[#13273d] disabled:opacity-40"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </form>
        </section>
      )}

      {/* Launcher: hidden on mobile while the sheet is open so it doesn't cover the UI */}
      <button
        id="meleph-chat-launcher"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat with Mel"}
        aria-expanded={open}
        style={{
          bottom: "max(1.5rem, env(safe-area-inset-bottom))",
          right: "max(1.5rem, env(safe-area-inset-right))",
        }}
        className={`group fixed z-[61] h-16 w-16 items-center justify-center rounded-full bg-[#0D1B2A] text-[#FAF8F3] shadow-[0_12px_30px_-8px_rgba(13,27,42,0.5)] ring-1 ring-inset ring-[#C9A968]/50 transition duration-200 hover:scale-105 hover:ring-[#C9A968] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A968] ${
          open ? "hidden sm:flex" : "flex"
        }`}
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3.5c-4.7 0-8.5 3.4-8.5 7.6 0 2.1.9 4 2.5 5.4L5.2 20.5l3.9-1.8c.9.3 1.9.4 2.9.4 4.7 0 8.5-3.4 8.5-7.6S16.700 3.500 12 3.500z" />
            <circle cx="8.5" cy="11.2" r="0.9" fill="currentColor" stroke="none" />
            <circle cx="12" cy="11.2" r="0.9" fill="currentColor" stroke="none" />
            <circle cx="15.5" cy="11.2" r="0.9" fill="currentColor" stroke="none" />
          </svg>
        )}
      </button>
    </>
  );
}
