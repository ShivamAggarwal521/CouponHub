(function () {
  console.log("[Bridge] Initialized ✅");

  const PKCE_REQUEST_EVENT = "CHATBOT_PKCE_REQUEST";
  const PKCE_RESPONSE_EVENT = "HOST_BOOTSTRAP_TOKEN";
  const PKCE_ERROR_EVENT = "HOST_BOOTSTRAP_ERROR";

  const HOST_BACKEND_BASE =
    (window.HOST_BRIDGE_BASE_URL && window.HOST_BRIDGE_BASE_URL.trim()) || "http://localhost:9000";

  const allowedIframeOrigins = (window.ALLOWED_CHATBOT_IFRAME_ORIGINS || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter((origin) => origin.length > 0);

  const inflightNonces = new Set();

  function originAllowed(origin) {
    const allowed = allowedIframeOrigins.length === 0 || allowedIframeOrigins.includes(origin);
    console.log(`[Bridge] Origin check: ${origin} → ${allowed ? "allowed" : "blocked"}`);
    return allowed;
  }

  async function relayChallenge(event) {
    console.log("[Bridge] Message received:", event.data, "from", event.origin);

    if (!originAllowed(event.origin)) return;

    const data = event.data;
    if (!data || typeof data !== "object" || data.type !== PKCE_REQUEST_EVENT) return;

    const { nonce, challenge, iframeOrigin, userId } = data;
    console.log(`[Bridge] PKCE Request received → nonce: ${nonce}, userId: ${userId}`);

    if (!nonce || inflightNonces.has(nonce)) return;
    if (!challenge) return;

    inflightNonces.add(nonce);

    try {
      console.log("[Bridge] Sending fetch to backend:", `${HOST_BACKEND_BASE}/api/chatbot/bootstrap`);
      const response = await fetch(`${HOST_BACKEND_BASE.replace(/\/$/, "")}/api/chatbot/bootstrap`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nonce,
          user_id: userId || "anonymous",
          code_challenge: challenge,
          embedder_origin: iframeOrigin,
        }),
      });

      console.log("[Bridge] Backend response status:", response.status);

      const payload = await response.json();
      console.log("[Bridge] Backend payload:", payload);

      if (event.source && typeof event.source.postMessage === "function") {
        event.source.postMessage(
          {
            type: PKCE_RESPONSE_EVENT,
            nonce,
            bootstrap_jwt: payload.bootstrap_jwt,
            expires_in: payload.expires_in,
          },
          iframeOrigin
        );
        console.log("[Bridge] Sent HOST_BOOTSTRAP_TOKEN back to iframe ✅");
      }
    } catch (error) {
      console.error("[Bridge] Failed to relay PKCE challenge ❌", error);
      if (event.source && typeof event.source.postMessage === "function") {
        event.source.postMessage(
          {
            type: PKCE_ERROR_EVENT,
            nonce,
            reason: error instanceof Error ? error.message : "Unknown host bridge error",
          },
          iframeOrigin || "*"
        );
      }
    } finally {
      inflightNonces.delete(nonce);
    }
  }

  window.addEventListener("message", relayChallenge);
  console.log("[Bridge] Ready to receive PKCE requests 🚀");
})();
  