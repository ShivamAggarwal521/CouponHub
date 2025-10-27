import React, { useRef, useEffect } from "react";
import { Box } from "@mui/material";

const CHATBOT_ORIGIN = "https://chatbot.aicte-india.org";

const ChatbotEmbed = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const parentHost = window.location.hostname;
    console.log("🧭 [PARENT] Detected hostname:", parentHost);

    let readyReceived = false;

    const sendDocId = (label = "") => {
      if (!iframe.contentWindow) {
        console.warn("⚠️ [PARENT] iframe.contentWindow missing, skipping postMessage");
        return;
      }
      console.log(`📤 [PARENT -> IFRAME] Sending doc_id (${label}):`, parentHost);

      iframe.contentWindow.postMessage(
        { type: "SET_DOC_ID", docId: parentHost },
        CHATBOT_ORIGIN
      );
    };

    const handleLoad = () => {
      console.log("✅ [PARENT] Iframe loaded");
      sendDocId("onload");
      setTimeout(() => sendDocId("500ms-delay"), 500);
      setTimeout(() => sendDocId("1000ms-delay"), 1000);
    };

    const handleMessage = (event: MessageEvent) => {
      if (!event.origin.includes("chatbot.aicte-india.org")) {
        console.warn("🚫 [PARENT] Ignored message from origin:", event.origin);
        return;
      }

      console.log("📨 [PARENT <- IFRAME] Message received:", event.data);

      if (event.data?.type === "CHATBOT_READY" && !readyReceived) {
        readyReceived = true;
        console.log("🚀 [PARENT] Chatbot ready signal received — sending doc_id");
        sendDocId("CHATBOT_READY");
      }

      if (event.data?.type === "DOC_ID_ACK") {
        console.log("✅ [PARENT] Chatbot acknowledged doc_id:", event.data.docId);
      }
    };

    iframe.addEventListener("load", handleLoad);
    window.addEventListener("message", handleMessage);

    return () => {
      iframe.removeEventListener("load", handleLoad);
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 30,
        right: 20,
        width: 550,
        height: 700,
        borderRadius: "12px",
        overflow: "hidden",
        zIndex: 1000,
        backgroundColor: "transparent",
      }}
    >
      <iframe
        ref={iframeRef}
        src={`${CHATBOT_ORIGIN}/chatbot/`}
        width="100%"
        height="100%"
        style={{ border: "none", display: "block" }}
        title="Chatbot"
        scrolling="no"
      />
    </Box>
  );
};

export default ChatbotEmbed;