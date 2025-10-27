import React, { useRef, useEffect } from "react";
import { Box } from "@mui/material";

const CHATBOT_ORIGIN = "https://chatbot.aicte-india.org"; // Remove trailing /chatbot/

const ChatbotEmbed = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const parentHost = window.location.hostname;
    console.log("🌐 Parent hostname:", parentHost); // Should show: coupon-hub-chi.vercel.app

    const handleLoad = () => {
      console.log("✅ Iframe loaded, sending doc_id to:", CHATBOT_ORIGIN);
      
      // Send message
      iframe.contentWindow?.postMessage(
        { type: "SET_DOC_ID", docId: parentHost },
        CHATBOT_ORIGIN
      );
      
      console.log("📤 Sent doc_id:", parentHost);
    };

    iframe.addEventListener("load", handleLoad);

    const handleMessage = (event: MessageEvent) => {
      if (!event.origin.includes("chatbot.aicte-india.org")) return;
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
        src="https://chatbot.aicte-india.org/chatbot/"
        width="100%"
        height="100%"
        style={{ border: "none", display: "block", overflow: "hidden" }}
        title="Chatbot"
        scrolling="no"
        allow="cross-origin-isolated"
      />
    </Box>
  );
};

export default ChatbotEmbed;
// ```

// ## What should happen:

// **On Parent Site (`coupon-hub-chi.vercel.app`):**
// ```
// 🌐 Parent hostname: coupon-hub-chi.vercel.app
// ✅ Iframe loaded, sending doc_id to: https://chatbot.aicte-india.org
// 📤 Sent doc_id: coupon-hub-chi.vercel.app
// ```

// **On Chatbot Iframe:**
// ```
// 👂 Message listener initialized, waiting for parent doc_id...
// 📩 ✅ Received doc_id from parent: coupon-hub-chi.vercel.app from origin: https://coupon-hub-chi.vercel.app
// ✅ doc_id already available: coupon-hub-chi.vercel.app
// 📤 Sending to backend with doc_id: coupon-hub-chi.vercel.app