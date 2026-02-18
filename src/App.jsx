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
      <InteractionGuide forceOpen={showGuide} onClose={() => setShowGuide(false)} />
      <UI />
      <Loader />
      <Canvas
        shadows
        camera={{
          position: [-0.5, window.innerWidth > 768 ? 1 : 2.5, window.innerWidth > 768 ? 4 : 6.5],
          fov: window.innerWidth > 768 ? 45 : 55,
        }}
      >
        <group position-y={window.innerWidth > 768 ? 0 : 0.8}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </group>
      </Canvas>

      {/* Site Instructions button — top right on all screens */}
      <button
        onClick={() => {
          localStorage.removeItem("seenGuide");
          setShowGuide(true);
        }}
        className="
          fixed z-[99999]
          top-4 right-4
          bg-[#bcff11] text-black border-none rounded-full
          px-5 py-3 font-bold text-sm md:text-base
          cursor-pointer
        "
      >
        Site Instructions
      </button>
    </>
  );
}

export default App;