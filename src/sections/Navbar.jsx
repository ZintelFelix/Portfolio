import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
    { id: "home", label: "Start" },
    { id: "about", label: "Über mich" },
    { id: "projects", label: "Projekte" },
    { id: "experience", label: "Werdegang" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const onNavigate = (id) => (e) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsOpen(false);
    };

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled
                    ? "bg-primary/80 backdrop-blur border-lavender/40 py-3"
                    : "bg-primary/0 border-transparent py-5"
                }`}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between c-space">
                <a
                    href="#home"
                    onClick={onNavigate("home")}
                    className="text-xs md:text-sm font-semibold uppercase tracking-[0.35em] text-white"
                >
                    Felix.dev
                </a>

                <nav className="hidden items-center gap-8 lg:flex">
                    {NAV_LINKS.map((item) => (
                        <button
                            key={item.id}
                            onClick={onNavigate(item.id)}
                            className="text-[0.7rem] md:text-xs uppercase tracking-[0.15em] text-neutral-400 transition hover:text-white"
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className="hidden items-center gap-3 lg:flex">
                    <button
                        onClick={onNavigate("contact")}
                        className="rounded-full bg-gradient-to-r from-royal to-lavender px-5 py-2 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-white"
                    >
                        Kontakt
                    </button>
                </div>

                <button
                    onClick={() => setIsOpen((p) => !p)}
                    className="relative flex h-10 w-10 items-center justify-center lg:hidden"
                >
                    <span
                        className={`h-[1.5px] w-6 bg-white transition ${isOpen ? "translate-y-[6px] rotate-45" : "-translate-y-[5px]"
                            }`}
                    />
                    <span
                        className={`h-[1.5px] w-6 bg-white transition ${isOpen ? "opacity-0" : "opacity-100"
                            }`}
                    />
                    <span
                        className={`h-[1.5px] w-6 bg-white transition ${isOpen ? "-translate-y-[6px] -rotate-45" : "translate-y-[5px]"
                            }`}
                    />
                </button>
            </div>

            <AnimatePresence>
                {isOpen ? (
                    <motion.div
                        key="mobile"
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.2 }}
                        className="mt-3 border-t border-lavender/30 bg-primary/95 backdrop-blur lg:hidden"
                    >
                        <div className="mx-auto flex max-w-6xl flex-col gap-4 c-space py-6">
                            {NAV_LINKS.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={onNavigate(item.id)}
                                    className="text-left text-sm uppercase tracking-[0.25em] text-white/90"
                                >
                                    {item.label}
                                </button>
                            ))}
                            <button
                                onClick={onNavigate("contact")}
                                className="rounded-full bg-gradient-to-r from-royal to-lavender px-5 py-2 text-center text-xs font-medium uppercase tracking-[0.25em] text-white"
                            >
                                Termin
                            </button>
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </header>
    );
}
