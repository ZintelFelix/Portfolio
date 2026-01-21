import { Suspense, useState, useEffect, lazy } from "react";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { useMediaQuery } from "react-responsive";

const HeroScene = lazy(() => import("../components/HeroScene"));

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const [canInteract, setCanInteract] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [load3D, setLoad3D] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowHint(true), 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    let idleId;
    let t;

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(() => setLoad3D(true), { timeout: 2000 });
      return () => window.cancelIdleCallback(idleId);
    }

    t = setTimeout(() => setLoad3D(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const handleActivate = () => {
    setLoad3D(true);
    setCanInteract(true);
    setShowHint(false);
  };

  return (
    <section id="home" className="flex items-start justify-center md:items-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallaxBackground />

      <figure className="absolute inset-0 w-screen h-screen">
        {load3D ? (
          <Suspense fallback={<div className="w-full h-full" />}>
            <HeroScene canInteract={canInteract} isMobile={isMobile} />
          </Suspense>
        ) : (
          <div className="w-full h-full" />
        )}

        {showHint && !canInteract && (
          <div className="absolute z-50 left-1/2 -translate-x-1/2 bottom-5 md:bottom-8 rounded-2xl bg-neutral-950/85 backdrop-blur px-4 py-3 flex items-center gap-3 shadow-lg">
            <span className="text-[0.65rem] md:text-sm uppercase tracking-[0.12em] text-white/85">
              Astronaut bewegen
            </span>
            <button
              onClick={handleActivate}
              className="rounded-full bg-gradient-to-r from-royal to-lavender px-3 py-1 text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.12em] text-white"
            >
              Aktivieren
            </button>
            <button onClick={() => setShowHint(false)} className="text-xs text-white/60 hover:text-white">
              ×
            </button>
          </div>
        )}
      </figure>
    </section>
  );
};

export default Hero;
