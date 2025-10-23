import React, { useRef, useEffect } from "react";
import { Box } from "@mui/material";

const CHATBOT_ORIGIN = "https://9089e55dbab3.ngrok-free.app"; // Replace with your iframe origin

const ChatbotEmbed = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // Send 'init' message once iframe loads
    const handleLoad = () => {
      iframe.contentWindow?.postMessage({ type: "init" }, CHATBOT_ORIGIN);
    };

    iframe.addEventListener("load", handleLoad);

    // Optional: Listen to messages FROM iframe securely
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== CHATBOT_ORIGIN) return; // Only accept messages from the chatbot
      console.log("Message from iframe:", event.data);
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
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
          "&::-webkit-scrollbar": { display: "none" }, // Chrome, Safari, Opera
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