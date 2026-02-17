import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";
import InteractionGuide from "./components/InteractionGuide";

function App() {
  const [showGuide, setShowGuide] = useState(false);

  return (
    <>
      {/* Instructions Overlay */}
      <InteractionGuide
        forceOpen={showGuide}
        onClose={() => setShowGuide(false)}
      />

      {/* Green Button (NOW WORKS IN PRODUCTION) */}
      <button
        onClick={() => {
          localStorage.removeItem("seenGuide");
          setShowGuide(true);
        }}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 99999,
          background: "#bcff11",
          color: "black",
          border: "none",
          borderRadius: "999px",
          padding: "0.8rem 1.8rem",
          fontWeight: 700,
          fontSize: "1rem",
          cursor: "pointer",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
        }}
      >
        Site Instructions
      </button>

      <UI />
      <Loader />

      <Canvas
        shadows
        camera={{
          position: [-0.5, 1, window.innerWidth > 800 ? 4 : 9]
