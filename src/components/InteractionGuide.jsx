import { useState, useEffect } from "react";

const steps = [
  { icon: "🖱️", text: "Click and drag to rotate the magazine" },
  { icon: "🔍", text: "Scroll up/down to zoom in and out" },
  { icon: "📖", text: "Click the magazine to turn pages" },
  { icon: "⬇️", text: "Use the page buttons at the bottom to jump to any page" },
  { icon: "↩️", text: "Click 'Cover' to return to the front cover" },
];

export default function InteractionGuide({ forceOpen, onClose }) {
  const [visible, setVisible] = useState(false);

  // Show automatically first visit
  useEffect(() => {
    const seen = localStorage.getItem("seenGuide");
    if (!seen) setVisible(true);
  }, []);

  // Allow force open from button
  useEffect(() => {
    if (forceOpen) setVisible(true);
  }, [forceOpen]);

  const close = () => {
    localStorage.setItem("seenGuide", "true");
    setVisible(false);
    if (onClose) onClose();
  };

  if (!visible) return null;

  return (
    <div className="interaction-overlay">
      <div className="interaction-card">
        <div className="interaction-badge">ASME Watchlist 2026</div>
        <h2>How to Explore</h2>
        <p className="interaction-subtitle">
          Navigate the interactive magazine using the controls below
        </p>

        <ul>
          {steps.map((step, i) => (
            <li key={i}>
              <span className="step-icon">{step.icon}</span>
              {step.text}
            </li>
          ))}
        </ul>

        <button onClick={close}>Let's Explore →</button>
      </div>
    </div>
  );
}
