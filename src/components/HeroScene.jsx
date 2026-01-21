import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { easing } from "maath";
import Loader from "./Loader";
import { Astronaut } from "./Astronaut";

function Rig() {
    useFrame((state, delta) => {
        easing.damp3(
            state.camera.position,
            [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
            0.5,
            delta
        );
    });
    return null;
}

export default function HeroScene({ canInteract, isMobile }) {
    return (
        <div className={canInteract ? "w-full h-full" : "w-full h-full pointer-events-none"}>
            <Canvas camera={{ position: [0, 1, 3] }}>
                <Suspense fallback={<Loader />}>
                    <Float>
                        <Astronaut
                            scale={isMobile && 0.23}
                            position={isMobile && [0, -1.5, 0]}
                        />
                    </Float>
                    <Rig />
                </Suspense>
                <OrbitControls enabled={canInteract} enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    );
}
