import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";
import InteractionGuide from "./components/InteractionGuide";

function App() {
  return (
    <>
      <InteractionGuide />
      <UI />
      <Loader />
      <Canvas
        shadows
        camera={{
          position: [-0.5, 1, window.innerWidth > 800 ? 4 : 9],
          fov: 45,
        }}
      >
        <group position-y={0}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </group>
      </Canvas>

      {/* DEV ONLY - remove before deploying */}
      {import.meta.env.DEV && (
        <button
          onClick={() => {
            localStorage.removeItem("seenGuide");
            window.location.reload();
          }}
          style={{
            position: "fixed",
            bottom: 16,
            right: 16,
            zIndex: 99999,
            background: "#bcff11",
            color: "black",
            border: "none",
            borderRadius: "999px",
            padding: "0.8rem 1.8rem",
            fontWeight: 700,
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Site Instructions
        </button>
      )}
    </>
  );
}

export default App;