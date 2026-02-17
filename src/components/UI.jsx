import { atom, useAtom } from "jotai";
import { useEffect } from "react";

const pictures = [
  "DSC00680",
  "DSC00933",
  "DSC00966",
  "DSC00983",
  "DSC01011",
  "DSC01040",
  "DSC01064",
  "DSC01071",
  "DSC01103",
  "DSC01145",
  "DSC01420",
  "DSC01461",
  "DSC01489",
  "DSC02031",
  "DSC02064",
  "DSC02069",
];

export const pageAtom = atom(0);

export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];

for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

  return (
    <>
      {/* WATCHLIST PANEL */}
      <div className="fixed left-16 top-1/2 -translate-y-1/2 z-20 w-[520px] p-8 rounded-xl bg-white/10 backdrop-blur-xl text-white shadow-2xl pointer-events-auto">
        
        <h2 className="text-5xl font-medium tracking-tight leading-[1.02] uppercase mb-4">
          Engineering Watchlist 2026
        </h2>

        <p className="text-base leading-relaxed text-[#bcff11] max-w-[460px]">
          The Engineering Watchlist highlights breakthrough innovators shaping
          the future of technology. From advanced materials to micromachines,
          these leaders are redefining what’s possible in science, industry,
          and applied research.
        </p>
      </div>

      {/* PAGE NAVIGATION */}
      <main className="pointer-events-none select-none z-10 fixed inset-0 flex justify-between flex-col">
        <a className="pointer-events-auto mt-10 ml-10">
          <img className="w-20" src="/images/wawasensei-white.png" />
        </a>

        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
            {[...pages].map((_, index) => (
              <button
                key={index}
                className={`border-transparent hover:border-white transition-all duration-300 px-4 py-3 rounded-full text-lg uppercase shrink-0 border ${
                  index === page
                    ? "bg-white/90 text-black"
                    : "bg-black/30 text-white"
                }`}
                onClick={() => setPage(index)}
              >
                {index === 0 ? "Cover" : `Page ${index}`}
              </button>
            ))}

            <button
              className={`border-transparent hover:border-white transition-all duration-300 px-4 py-3 rounded-full text-lg uppercase shrink-0 border ${
                page === pages.length
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(pages.length)}
            >
              Back Cover
            </button>
          </div>
        </div>
      </main>

      {/* NEON SCROLLING TYPOGRAPHY */}
      <div className="fixed inset-0 flex items-center -rotate-2 select-none pointer-events-none">
        <div className="relative">

          {/* First Scroll Row */}
          <div className="animate-horizontal-scroll flex items-center gap-12 w-max px-8">
            <h1 className="shrink-0 text-[#bcff11] text-11xl font-black neon-flicker">
              Mechanical Engineering Watch List 2026 Nominees
            </h1>

            <h1
              className="shrink-0 text-transparent text-11xl font-black neon-flicker"
              style={{
                WebkitTextStroke: "2px #bcff11",
              }}
            >
              Mechanical Engineering Watch List 2026 Nominees
            </h1>
          </div>

          {/* Second Scroll Row */}
          <div className="absolute top-0 left-0 animate-horizontal-scroll-2 flex items-center gap-12 px-8 w-max">
            <h1 className="shrink-0 text-[#bcff11] text-11xl font-black neon-flicker">
              Mechanical Engineering Watch List 2026 Nominees
            </h1>

            <h1
              className="shrink-0 text-transparent text-11xl font-black neon-flicker"
              style={{
                WebkitTextStroke: "2px #bcff11",
              }}
            >
              Mechanical Engineering Watch List 2026 Nominees
            </h1>
          </div>

        </div>
      </div>
    </>
  );
};
