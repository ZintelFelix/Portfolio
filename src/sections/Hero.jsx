import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import Loader from "../components/Loader";
import { useFrame } from "@react-three/fiber";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const [canInteract, setCanInteract] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowHint(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const handleActivate = () => {
    setCanInteract(true);
    setShowHint(false);
  };

  return (
    <section id="home" className="flex items-start justify-center md:items-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallaxBackground />
      <figure className="absolute inset-0 w-screen h-screen">
        <div className={canInteract ? "w-full h-full" : "w-full h-full pointer-events-none"}>
          <Canvas camera={{ position: [0, 1, 3] }}>
            <Suspense fallback={<Loader />}>
              <Float>
                <Astronaut scale={isMobile && 0.23} position={isMobile && [0, -1.5, 0]} />
              </Float>
              <Rig />
            </Suspense>
            <OrbitControls enabled={canInteract} enableZoom={false} enablePan={false} />
          </Canvas>
        </div>

        {showHint && !canInteract && (
          <div
            className="
              absolute z-50
              left-1/2 -translate-x-1/2 bottom-5 md:bottom-8
              rounded-2xl bg-neutral-950/85 backdrop-blur
              px-4 py-3 flex items-center gap-3 shadow-lg
            "
          >
            <span className="text-[0.65rem] md:text-sm uppercase tracking-[0.12em] text-white/85">
              Astronaut bewegen
            </span>
            <button
              onClick={handleActivate}
              className="rounded-full bg-gradient-to-r from-royal to-lavender px-3 py-1 text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.12em] text-white"
            >
              Aktivieren
            </button>
            <button
              onClick={() => setShowHint(false)}
              className="text-xs text-white/60 hover:text-white"
            >
              ×
            </button>
          </div>
        )}
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(state.camera.position, [state.mouse.x / 10, 1 + state.mouse.y / 10, 3], 0.5, delta);
  });
}

export default Hero;
