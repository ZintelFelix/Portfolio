"use client";
import { useState, useId, useEffect } from "react";

const ArrowButton = ({ direction = "right", onClick, title, variant = "default" }) => (
    <button
        onClick={onClick}
        title={title}
        className={
            variant === "lightbox"
                ? "w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition"
                : "w-9 h-9 flex items-center justify-center rounded-full bg-black/35 backdrop-blur text-white text-sm hover:scale-105 active:scale-95 transition border border-white/10"
        }
    >
        <svg
            viewBox="0 0 24 24"
            className={`w-5 h-5 ${direction === "left" ? "rotate-180" : ""}`}
        >
            <path
                d="M5 12h14m-6-6 6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </button>
);

const CloseButton = ({ onClick }) => (
    <button
        onClick={onClick}
        className="w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/75 transition"
    >
        <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path
                d="M6 6l12 12M18 6l-12 12"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
        </svg>
    </button>
);

const MetaPills = ({ meta }) => {
    if (!meta) return null;
    const items = [
        { label: "Kamera", value: meta.camera },
        { label: "Brennweite", value: meta.focalLength },
        { label: "Verschluss", value: meta.shutter },
        { label: "Blende", value: meta.aperture },
        { label: "ISO", value: meta.iso },
        { label: "Ort", value: meta.location }
    ].filter((x) => x.value);
    return (
        <div className="mt-4 flex flex-wrap gap-2">
            {items.map((item) => (
                <div
                    key={item.label}
                    className="px-3 py-1 rounded-full bg-white/5 text-xs text-white/85 border border-white/5"
                >
                    <span className="text-white/45 mr-1">{item.label}:</span>
                    <span>{item.value}</span>
                </div>
            ))}
        </div>
    );
};

const PortraitSlide = ({ slide, index, total, onImageClick }) => {
    const { src, title, meta } = slide;
    return (
        <li
            className="relative h-full flex items-center gap-6"
            style={{ width: `${100 / total}%` }}
        >
            <div className="absolute inset-0">
                <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover scale-110 blur-xl opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f1425]/90 via-[#0f1425]/20 to-transparent" />
            </div>

            <button
                type="button"
                onClick={onImageClick}
                className="relative z-10 h-[80%] aspect-[4/5] max-w-[42%] min-w-[230px] rounded-2xl overflow-hidden bg-black/10 border border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.25)] ml-4"
            >
                <img src={src} alt={title} className="w-full h-full object-cover" />
            </button>

            <div className="relative z-10 flex-1 h-[80%] flex flex-col justify-between pr-4">
                <div>
                    <p className="text-xs text-white/45 mb-2 tracking-wide">
                        {index + 1} / {total}
                    </p>
                    <h2 className="text-xl font-semibold text-white leading-tight">{title}</h2>
                    <MetaPills meta={meta} />
                </div>
            </div>
        </li>
    );
};

const WideSlide = ({ slide, index, total, onImageClick }) => {
    const { src, title, meta } = slide;
    return (
        <li
            className="relative h-full flex flex-col gap-3"
            style={{ width: `${100 / total}%` }}
        >
            <div className="absolute inset-0">
                <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover scale-110 blur-xl opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f1425]/85 via-[#0f1425]/10 to-transparent" />
            </div>

            <div className="relative z-10 px-4 pt-4">
                <p className="text-xs text-white/45 mb-2 tracking-wide">
                    {index + 1} / {total}
                </p>
                <h2 className="text-xl font-semibold text-white leading-tight">{title}</h2>
                <MetaPills meta={meta} />
            </div>

            <div className="relative z-10 px-4 pb-4">
                <button
                    type="button"
                    onClick={onImageClick}
                    className="w-full h-[52%] min-h-[180px] rounded-2xl overflow-hidden bg-black/15 border border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
                >
                    <img src={src} alt={title} className="w-full h-full object-cover" />
                </button>
            </div>
        </li>
    );
};

export function Carousel({ slides }) {
    const [current, setCurrent] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const id = useId();
    const total = slides.length;

    const previous = () => setCurrent((c) => (c - 1 < 0 ? total - 1 : c - 1));
    const next = () => setCurrent((c) => (c + 1 === total ? 0 : c + 1));
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    useEffect(() => {
        const handler = (e) => {
            if (!isOpen) return;
            if (e.key === "Escape") close();
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") previous();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [isOpen, next, previous]);

    return (
        <>
            <div className="relative w-full h-full pt-14" aria-labelledby={`carousel-${id}`}>
                <ul
                    className="absolute inset-x-0 bottom-0 top-16 flex transition-transform duration-500 ease-in-out"
                    style={{
                        width: `${total * 100}%`,
                        transform: `translateX(-${current * (100 / total)}%)`
                    }}
                >
                    {slides.map((slide, index) =>
                        slide.layout === "wide" ? (
                            <WideSlide
                                key={slide.id ?? index}
                                slide={slide}
                                index={index}
                                total={total}
                                onImageClick={open}
                            />
                        ) : (
                            <PortraitSlide
                                key={slide.id ?? index}
                                slide={slide}
                                index={index}
                                total={total}
                                onImageClick={open}
                            />
                        )
                    )}
                </ul>

                <div className="absolute bottom-4 right-4 flex gap-2 z-30">
                    <ArrowButton direction="left" onClick={previous} title="Vorheriges Bild" />
                    <ArrowButton direction="right" onClick={next} title="Nächstes Bild" />
                </div>
            </div>

            {isOpen ? (
                <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex flex-col">
                    <div className="flex items-center justify-between px-6 pt-4 pb-2 text-white">
                        <div>
                            <p className="text-xs text-white/50 mb-1">
                                {current + 1} / {total}
                            </p>
                            <h2 className="text-lg font-semibold leading-tight">
                                {slides[current].title}
                            </h2>
                        </div>
                        <div className="flex gap-2">
                            <ArrowButton
                                direction="left"
                                onClick={previous}
                                title="Vorheriges Bild"
                                variant="lightbox"
                            />
                            <ArrowButton
                                direction="right"
                                onClick={next}
                                title="Nächstes Bild"
                                variant="lightbox"
                            />
                            <CloseButton onClick={close} />
                        </div>
                    </div>

                    <div className="px-6">
                        <MetaPills meta={slides[current].meta} />
                    </div>

                    <div className="flex-1 flex items-center justify-center px-6 py-6">
                        <img
                            src={slides[current].src}
                            alt={slides[current].title}
                            className="max-w-[92vw] max-h-[78vh] rounded-2xl object-contain shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                        />
                    </div>
                </div>
            ) : null}
        </>
    );
}
