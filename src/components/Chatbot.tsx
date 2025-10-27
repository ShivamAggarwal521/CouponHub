import React, { useRef, useEffect } from "react";
import { Box } from "@mui/material";

const CHATBOT_ORIGIN = "https://chatbot.aicte-india.org";

const ChatbotEmbed = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const parentHost = window.location.hostname;
    console.log("🌐 Parent hostname:", parentHost);

    const sendDocId = () => {
      if (!iframe.contentWindow) return;
      console.log("📤 Sending doc_id:", parentHost);
      iframe.contentWindow.postMessage(
        { type: "SET_DOC_ID", docId: parentHost },
        CHATBOT_ORIGIN
      );
    };

    const handleLoad = () => {
      console.log("✅ Iframe loaded");
      sendDocId();
      // Backup sends in case iframe loads slowly
      setTimeout(sendDocId, 500);
      setTimeout(sendDocId, 1000);
    };

    const handleMessage = (event: MessageEvent) => {
      if (!event.origin.includes("chatbot.aicte-india.org")) return;
      if (event.data?.type === "CHATBOT_READY") {
        console.log("🤖 Chatbot ready — sending doc_id again");
        sendDocId();
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
        "& iframe": {
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": { display: "none" },
        },
      }}
    >
      <iframe
        ref={iframeRef}
        src="https://chatbot.aicte-india.org/chatbot/"
        width="100%"
        height="100%"
        style={{ border: "none", display: "block", overflow: "hidden" }}
        title="Chatbot"
        scrolling="no"
      />
    </Box>
  );
};

export default ChatbotEmbed;