import React from "react";
import { Box } from "@mui/material";

const ChatbotEmbed = () => (
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
      // Add these properties to ensure no scrollbars
      "& iframe": {
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE/Edge
        "&::-webkit-scrollbar": {
          // Chrome, Safari, Opera
          display: "none",
        },
      },
    }}
  >
    <iframe
      src="https://chatbot.aicte-india.org/chatbot/"
      width="100%"
      height="100%"
      style={{
        border: "none",
        display: "block", // Removes any default margins
        overflow: "hidden", // Additional overflow hidden
      }}
      title="Chatbot"
      scrolling="no" 
    />
  </Box>
);

export default ChatbotEmbed;
