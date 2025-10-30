"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div className="c-space section-spacing" ref={containerRef}>
            <h2 className="text-heading">Meine Arbeitserfahrung</h2>
            <div ref={ref} className="relative pb-20">
                {data.map((item, index) => (
                    <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
                        <div className="sticky z-40 flex flex-col items-start self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
                            <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-midnight">
                                <div className="w-4 h-4 p-2 border rounded-full bg-neutral-800 border-neutral-700" />
                            </div>
                            <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl text-neutral-300">
                                <h3>{item.date}</h3>
                                <h3 className="text-3xl text-neutral-400">{item.title}</h3>
                                <h3 className="text-2xl text-neutral-500">{item.job}</h3>
                            </div>
                        </div>

                        <div className="relative w-full pl-20 pr-4 md:pl-0 md:pr-0">
                            <div className="mb-4 text-2xl font-bold text-left text-neutral-300 md:hidden">
                                <h3>{item.date}</h3>
                                <h3>{item.job}</h3>
                            </div>

                            <div className="flex flex-col gap-3 md:gap-4 md:ml-10 lg:ml-16">
                                {item.contents.map((content, i) => (
                                    <div
                                        key={i}
                                        className="rounded-2xl bg-white/2 border border-white/5 px-4 py-3 md:px-5 md:py-4 shadow-[0_12px_30px_rgba(0,0,0,0.15)]"
                                    >
                                        <p className="text-neutral-200 text-sm md:text-base leading-relaxed">
                                            {content}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

                <div
                    style={{ height: height + "px" }}
                    className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        style={{ height: heightTransform, opacity: opacityTransform }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
