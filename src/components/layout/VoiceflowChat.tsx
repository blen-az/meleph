"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    voiceflow?: {
      chat?: {
        load: (config: Record<string, unknown>) => void;
        open?: () => void;
        close?: () => void;
        hide?: () => void;
        show?: () => void;
      };
    };
  }
}

/**
 * Utility to open the Voiceflow chat assistant programmatically from any component.
 */
export function openVoiceflowChat() {
  if (typeof window !== "undefined") {
    if (window.voiceflow?.chat?.open) {
      window.voiceflow.chat.open();
    } else {
      window.dispatchEvent(new CustomEvent("meleph:open-chat"));
    }
  }
}

interface VoiceflowChatProps {
  projectId?: string;
  versionId?: string;
}

export function VoiceflowChat({
  projectId = process.env.NEXT_PUBLIC_VOICEFLOW_PROJECT_ID || "6ac10fd36e653eb51faed060",
  versionId = process.env.NEXT_PUBLIC_VOICEFLOW_VERSION_ID,
}: VoiceflowChatProps) {
  const initChat = () => {
    if (typeof window !== "undefined" && window.voiceflow?.chat?.load && projectId) {
      console.log("[Meleph] Initializing Voiceflow chat with projectID:", projectId);
      const origin = typeof window !== "undefined" ? window.location.origin : "";
      const config: Record<string, unknown> = {
        verify: { projectID: projectId },
        url: "https://general-runtime.voiceflow.com",
        voice: { url: "https://runtime-api.voiceflow.com" },
        assistant: {
          title: "Meleph AI Customer Agent",
          description: "AI Systems & Digital Products",
          color: "#0D1B2A", // Meleph Ink Navy brand color
          stylesheet: `${origin}/voiceflow.css`,
        },
      };

      if (versionId) {
        config.versionID = versionId;
      }

      window.voiceflow.chat.load(config);
    }
  };

  useEffect(() => {
    // If script is already cached and loaded
    if (window.voiceflow?.chat?.load) {
      initChat();
    }

    const handleOpenChat = () => {
      window.voiceflow?.chat?.open?.();
    };

    window.addEventListener("meleph:open-chat", handleOpenChat);
    return () => {
      window.removeEventListener("meleph:open-chat", handleOpenChat);
    };
  }, [projectId, versionId]);

  return (
    <Script
      id="voiceflow-widget-next"
      src="https://cdn.voiceflow.com/widget-next/bundle.mjs"
      strategy="afterInteractive"
      onLoad={initChat}
    />
  );
}
