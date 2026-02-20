import { atom, useAtom } from "jotai";
import { useEffect } from "react";

const pictures = [
  "DSC00680", "DSC00933", "DSC00966", "DSC00983",
  "DSC01011", "DSC01040", "DSC01064", "DSC01071",
  "DSC01103", "DSC01145", "DSC01420", "DSC01461",
  "DSC01489", "DSC02031", "DSC02064", "DSC02069",
];

export const pageAtom = atom(0);

export const pages = [{ front: "book-cover", back: pictures[0] }];

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
      <div
        className="
          fixed z-20 pointer-events-auto
          bottom-[72px] left-2 right-2 p-3 rounded-xl
          md:bottom-auto md:left-16 md:right-auto md:top-1/2 md:-translate-y-1/2
          md:w-[520px] md:p-8 md:rounded-xl
          bg-white/10 backdrop-blur-xl text-white shadow-2xl
        "
      >
        <h2 className="
          text-base font-bold tracking-tight uppercase leading-tight mb-1
          md:text-5xl md:font-medium md:leading-[1.02] md:mb-4
        ">
          Engineering Watchlist 2026
        </h2>

        {/* Full description — desktop only */}
        <p
          className="hidden md:block md:text-base md:leading-relaxed md:max-w-[460px]"
          style={{ color: "black" }}
        >
          The Engineering Watchlist highlights breakthrough innovators shaping
          the future of technology. From advanced materials to micromachines,
          these leaders are redefining what's possible in science, industry,
          and applied research.
        </p>

        {/* Short tagline — mobile only */}
        <p className="text-xs md:hidden" style={{ color: "black" }}>
          Breakthrough innovators shaping the future of technology.
        </p>
      </div>

      {/* PAGE NAVIGATION */}
      <main className="pointer-events-none select-none z-10 fixed inset-0 flex justify-between flex-col">
        <a className="pointer-events-auto mt-6 ml-6 md:mt-10 md:ml-10">
          <img className="w-14 md:w-20" src="/images/wawasensei-white.png" />
        </a>

        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center gap-2 md:gap-4 max-w-full px-4 py-3 md:p-10">
            {[...pages].map((_, index) => (
              <button
                key={index}
                className={`
                  border-transparent hover:border-white transition-all duration-300
                  px-3 py-1.5 md:px-4 md:py-3
                  rounded-full text-xs md:text-lg uppercase shrink-0 border
                  ${index === page ? "bg-[#f2c50a] text-black" : "bg-black/30 text-white"}
                `}
                onClick={() => setPage(index)}
              >
                {index === 0 ? "Cover" : `Page ${index}`}
              </button>
            ))}
            <button
              className={`
                border-transparent hover:border-white transition-all duration-300
                px-3 py-1.5 md:px-4 md:py-3
                rounded-full text-xs md:text-lg uppercase shrink-0 border
                ${page === pages.length ? "bg-[#f2c50a] text-black" : "bg-black/30 text-white"}
              `}
              onClick={() => setPage(pages.length)}
            >
              Back Cover
            </button>
          </div>
        </div>
      </main>

      {/* SCROLLING TYPOGRAPHY — desktop only */}
      <div className="hidden md:flex fixed inset-0 items-center -rotate-2 select-none pointer-events-none">
        <div className="relative">
          <div className="animate-horizontal-scroll flex items-center gap-12 w-max px-8">
            <h1 className="shrink-0 text-11xl font-black" style={{ color: "#f2c50a" }}>
              Mechanical Engineering Watch List 2026 Nominees
            </h1>
            <h1
              className="shrink-0 text-11xl font-black"
              style={{ WebkitTextStroke: "2px #f2c50a", color: "transparent" }}
            >
              Mechanical Engineering Watch List 2026 Nominees
            </h1>
          </div>
          <div className="absolute top-0 left-0 animate-horizontal-scroll-2 flex items-center gap-12 px-8 w-max">
            <h1 className="shrink-0 text-11xl font-black" style={{ color: "#f2c50a" }}>
              Mechanical Engineering Watch List 2026 Nominees
            </h1>
            <h1
              className="shrink-0 text-11xl font-black"
              style={{ WebkitTextStroke: "2px #f2c50a", color: "transparent" }}
            >
              Mechanical Engineering Watch List 2026 Nominees
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};