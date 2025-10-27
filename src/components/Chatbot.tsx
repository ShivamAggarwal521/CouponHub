import React, { useRef, useEffect } from "react";
import { Box } from "@mui/material";

const CHATBOT_ORIGIN = "https://chatbot.aicte-india.org/chatbot/"; // Chatbot iframe origin

const ChatbotEmbed = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const parentHost = window.location.hostname;

    const handleLoad = () => {
      // ✅ Send both init + parent hostname
      iframe.contentWindow?.postMessage(
        { type: "SET_DOC_ID", docId: parentHost },
        CHATBOT_ORIGIN
      );
    };

    iframe.addEventListener("load", handleLoad);

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== CHATBOT_ORIGIN) return;
      console.log("📩 Message from chatbot iframe:", event.data);
    };

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
        src={CHATBOT_ORIGIN}
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
