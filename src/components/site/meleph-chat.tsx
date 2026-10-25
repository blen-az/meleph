"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ArrowUpIcon, ChevronDownIcon, MessageCircleIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import { Message, MessageContent } from "@/components/ui/message";
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller";

type Msg = { id: string; role: "user" | "assistant"; content: string };
type Lead = { name: string; email: string; Phone_number: string; Longtext: string };

const STORAGE_KEY = "meleph-chat-v3";
const OPEN_EVENT = "meleph:open-chat";
const EMPTY_LEAD: Lead = { name: "", email: "", Phone_number: "", Longtext: "" };
const GREETING: Msg = {
  id: "greeting",
  role: "assistant",
  content: "Hi there 👋\n\nYou're now speaking with Mel. How can I help?",
};

const newId = () => Math.random().toString(36).slice(2, 10);

function readSaved(): { messages?: Msg[]; lead?: Partial<Lead> } {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? "{}");
  } catch {
    return {};
  }
}

/** Open the Meleph chat panel from anywhere on the site. */
export function openChat() {
  window.dispatchEvent(new CustomEvent(OPEN_EVENT));
}

export function MelephChat() {
  const titleId = useId();
  const [open, setOpen] = useState(false);
  // Restored from the session so the conversation survives navigation.
  // The panel starts closed, so server and client markup still match.
  const [messages, setMessages] = useState<Msg[]>(() => {
    const saved = readSaved().messages;
    return Array.isArray(saved) && saved.length ? saved : [GREETING];
  });
  const [lead, setLead] = useState<Lead>(() => ({ ...EMPTY_LEAD, ...readSaved().lead }));
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ messages, lead }));
    } catch {}
  }, [messages, lead]);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 120);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function close() {
    setOpen(false);
    launcherRef.current?.focus();
  }

  const send = useCallback(
    async (text: string) => {
      const content = text.trim();
      if (!content || loading) return;
      const next: Msg[] = [...messages, { id: newId(), role: "user", content }];
      setMessages(next);
      setInput("");
      setLoading(true);
      try {
        // The API expects the conversation to start with a visitor message.
        const firstUser = next.findIndex((m) => m.role === "user");
        const payload = next.slice(firstUser).map(({ role, content }) => ({ role, content }));
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: payload, lead }),
        });
        const data = await res.json();
        if (data.lead) setLead({ ...EMPTY_LEAD, ...data.lead });
        setMessages([
          ...next,
          { id: newId(), role: "assistant", content: data.reply ?? "Something went wrong. Please try again." },
        ]);
      } catch {
        setMessages([
          ...next,
          {
            id: newId(),
            role: "assistant",
            content: "I couldn't connect just now. Please try again in a moment.",
          },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [messages, loading, lead],
  );

  return (
    <>
      {open && (
        <section
          role="dialog"
          aria-modal="false"
          aria-labelledby={titleId}
          className="fixed inset-0 z-[60] flex flex-col overflow-hidden bg-background animate-in fade-in-0 slide-in-from-bottom-4 duration-200 sm:inset-auto sm:right-6 sm:bottom-24 sm:h-[min(40rem,calc(100dvh-8rem))] sm:w-[25rem] sm:rounded-xl sm:border sm:shadow-[0_24px_60px_-24px_rgb(0_0_0/0.45)]"
        >
          <header className="surface-ink flex items-center justify-between px-5 py-4">
            <div>
              <h2 id={titleId} className="font-serif text-2xl leading-none">
                Mel
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">Meleph AI Customer Agent</p>
            </div>
            <Button variant="ghost" size="icon" onClick={close} className="rounded-full">
              <XIcon />
              <span className="sr-only">Close chat</span>
            </Button>
          </header>

          <MessageScrollerProvider autoScroll>
            <MessageScroller className="flex-1">
              <MessageScrollerViewport>
                <MessageScrollerContent className="gap-3 px-4 py-5" aria-live="polite">
                  {messages.map((message) => (
                    <MessageScrollerItem
                      key={message.id}
                      messageId={message.id}
                      scrollAnchor={message.role === "user"}
                    >
                      <Message align={message.role === "user" ? "end" : "start"}>
                        <MessageContent>
                          <Bubble
                            variant={message.role === "user" ? "default" : "secondary"}
                            align={message.role === "user" ? "end" : "start"}
                            className="max-w-[86%]"
                          >
                            <BubbleContent className="px-3.5 py-2.5 whitespace-pre-wrap">
                              {message.content}
                            </BubbleContent>
                          </Bubble>
                        </MessageContent>
                      </Message>
                    </MessageScrollerItem>
                  ))}
                  {loading && (
                    <MessageScrollerItem messageId="typing">
                      <Message align="start">
                        <MessageContent>
                          <Bubble variant="secondary">
                            <BubbleContent className="px-3.5 py-2.5">
                              <span className="shimmer text-muted-foreground">Mel is writing…</span>
                            </BubbleContent>
                          </Bubble>
                        </MessageContent>
                      </Message>
                    </MessageScrollerItem>
                  )}
                </MessageScrollerContent>
              </MessageScrollerViewport>
              <MessageScrollerButton />
            </MessageScroller>
          </MessageScrollerProvider>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              send(input);
            }}
            className="flex items-end gap-2 border-t bg-background p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
          >
            <label htmlFor="meleph-chat-input" className="sr-only">
              Message Mel
            </label>
            <Textarea
              ref={inputRef}
              id="meleph-chat-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  send(input);
                }
              }}
              rows={1}
              maxLength={1000}
              placeholder="Ask about Meleph…"
              className="max-h-28 min-h-10 resize-none bg-card"
            />
            <Button type="submit" size="icon-lg" disabled={loading || !input.trim()} className="rounded-full">
              <ArrowUpIcon />
              <span className="sr-only">Send message</span>
            </Button>
          </form>
        </section>
      )}

      <button
        ref={launcherRef}
        type="button"
        onClick={() => (open ? close() : setOpen(true))}
        aria-label={open ? "Close chat" : "Chat with Mel"}
        aria-expanded={open}
        style={{
          bottom: "max(1.25rem, env(safe-area-inset-bottom))",
          right: "max(1.25rem, env(safe-area-inset-right))",
        }}
        className={cn(
          "fixed z-[61] size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_14px_30px_-10px_rgb(0_0_0/0.55)] ring-1 ring-gold/50 ring-inset transition-transform duration-200 hover:scale-105 active:scale-95 sm:size-16",
          open ? "hidden sm:grid" : "grid",
        )}
      >
        {open ? <ChevronDownIcon className="size-6" /> : <MessageCircleIcon className="size-6 sm:size-7" />}
      </button>
    </>
  );
}
