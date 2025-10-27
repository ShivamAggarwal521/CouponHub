import React, { useRef, useEffect } from "react";
import { Box } from "@mui/material";

const ChatbotEmbed = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleIframeLoad = () => {
      // ✅ Send parent page info to the chatbot iframe
      iframe.contentWindow?.postMessage(
        {
          type: "INIT_PARENT_INFO",
          parentUrl: window.location.href, // Full page URL
        },
        "https://chatbot.aicte-india.org" // ✅ chatbot origin
      );
    };

    iframe.addEventListener("load", handleIframeLoad);
    return () => iframe.removeEventListener("load", handleIframeLoad);
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
        style={{
          border: "none",
          display: "block",
          overflow: "hidden",
        }}
        title="Chatbot"
        scrolling="no"
      />
    </Box>
  );
};

export default ChatbotEmbed;
