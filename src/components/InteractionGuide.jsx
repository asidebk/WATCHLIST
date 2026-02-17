import { useState } from "react";

export default function InteractionGuide() {
  // Initialize state based on localStorage BEFORE first render (prevents flash)
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !localStorage.getItem("seenGuide");
  });

  const handleClose = () => {
    localStorage.setItem("seenGuide", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0, 0, 0, 0.75)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "520px",
          width: "100%",
          background: "rgba(30, 30, 40, 0.9)",
          borderRadius: "20px",
          padding: "2.5rem",
          color: "white",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          animation: "fadeIn 0.3s ease",
        }}
      >
        <div
          style={{
            background: "#bcff11",
            color: "black",
            display: "inline-block",
            padding: "0.3rem 0.9rem",
            borderRadius: "999px",
            fontWeight: 700,
            fontSize: "0.75rem",
            marginBottom: "1rem",
          }}
        >
          ASME WATCHLIST 2026
        </div>

        <h2 style={{ marginTop: 0 }}>How to Explore</h2>

        <ul style={{ lineHeight: 1.8, paddingLeft: "1.2rem" }}>
          <li>Click and drag to rotate the magazine</li>
          <li>Scroll to zoom in and out</li>
          <li>Click the magazine to turn pages</li>
          <li>Use the bottom page buttons to jump</li>
          <li>Click “Cover” to return to the front</li>
        </ul>

        <button
          onClick={handleClose}
          style={{
            marginTop: "1.5rem",
            background: "#bcff11",
            color: "black",
            border: "none",
            borderRadius: "999px",
            padding: "0.8rem 1.8rem",
            fontWeight: 700,
            fontSize: "1rem",
            cursor: "pointer",
            width: "100%",
          }}
        >
          LET’S EXPLORE →
        </button>
      </div>
    </div>
  );
}
