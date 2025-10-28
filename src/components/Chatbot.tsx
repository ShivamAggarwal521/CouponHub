import React, { useState, useEffect } from "react";

const ChatWindow = () => {
  const [docId, setDocId] = useState<string>("chatbot.aicte-india.org");

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Accept only from trusted origins
      if (!event.origin.includes("chatbot.aicte-india.org")) return;

      if (event.data?.type === "SET_DOC_ID") {
        console.log("📨 [IFRAME] Received doc_id from parent:", event.data.docId);
        setDocId(event.data.docId);

        // ✅ Send ACK back to parent
        window.parent.postMessage(
          { type: "DOC_ID_ACK", docId: event.data.docId },
          "*"
        );
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const handleQuery = async (query: string) => {
    console.log("📤 Sending to backend with doc_id:", docId);

    const response = await fetch("/api/query", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, doc_id: docId }),
    });
    const data = await response.json();
    console.log("✅ Backend response received:", data);
  };

  return (
    <div>
      <button onClick={() => handleQuery("hi")}>Send</button>
    </div>
  );
};

export default ChatWindow;