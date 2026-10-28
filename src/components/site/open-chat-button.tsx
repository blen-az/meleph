"use client";

import { MessageCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openChat } from "@/components/site/meleph-chat";

export function OpenChatButton({ children = "Talk to Mel" }: { children?: React.ReactNode }) {
  return (
    <Button type="button" variant="ghost" size="cta" onClick={openChat} className="px-3">
      <MessageCircleIcon data-icon="inline-start" />
      {children}
    </Button>
  );
}
