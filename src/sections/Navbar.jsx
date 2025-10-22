import { useState } from "react";
import { motion } from "motion/react";

const NAV_LINKS = [
    { id: "home", label: "Start" },
    { id: "about", label: "Über mich" },
    { id: "projects", label: "Projekte" },
    { id: "experience", label: "Werdegang" },
    { id: "contact", label: "Kontakt" },
];

function Navigation({ onNavigate }) {
    return (
        <ul className="nav-ul">
            {NAV_LINKS.map((l) => (
                <li key={l.id} className="nav-li">
                    <a
                        className="nav-link"
                        href={`#${l.id}`}
                        onClick={onNavigate(l.id)}
                    >
                        {l.label}
                    </a>
                </li>
            ))}
        </ul>
    );
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onNavigate = (id) => (e) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsOpen(false);
    };

    return (
        <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
            <div className="mx-auto c-space max-w-7xl">
                <div className="flex items-center justify-between py-2 sm:py-0">
                    <a
                        href="/"
                        className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
                    >
                        Felix
                    </a>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
                    >
                        <img
                            src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                            className="w-6 h-6"
                            alt="toggle"
                        />
                    </button>
                    <nav className="hidden sm:flex">
                        <Navigation onNavigate={onNavigate} />
                    </nav>
                </div>
            </div>

            {isOpen && (
                <motion.div
                    className="block overflow-hidden text-center sm:hidden"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ maxHeight: "100vh" }}
                    transition={{ duration: 1 }}
                >
                    <nav className="pb-5">
                        <Navigation onNavigate={onNavigate} />
                    </nav>
                </motion.div>
            )}
        </div>
    );
};

export default Navbar;
