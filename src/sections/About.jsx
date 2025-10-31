import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { FrameWorks } from "../components/FrameWorks";
import { Carousel } from "../components/Carousel";
import { photographySlides } from "../constants";

const About = () => {
    return (
        <section id="about" className="c-space section-spacing">
            <h2 className="text-heading">Über mich</h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
                {/* Grid 1 */}
                <div className="relative row-span-2 md:col-span-3 rounded-2xl overflow-hidden bg-gradient-to-b from-storm to-indigo p-0">
                    <div className="absolute top-4 left-4 z-40">
                        <p className="text-xs uppercase tracking-[0.25em] text-white/55">Hobby</p>
                        <p className="text-sm font-medium text-white">Leidenschaftlicher Fotograf</p>
                    </div>
                    <Carousel slides={photographySlides} />
                </div>


                {/* Grid 2 */}
                <div className="grid-default-color grid-2">
                    <div className="relative z-10 max-w-[65%] md:max-w-[55%] lg:max-w-[50%]">
                        <p className="headtext">Hi, ich bin Felix</p>
                        <p className="subtext">
                            Mit mehrjähriger Erfahrung im Fullstack entwickle ich dynamische und responsive
                            Webanwendungen, die klar, schnell und verlässlich sind.
                        </p>
                    </div>
                    <img
                        src="assets/coding-pov.png"
                        className="hidden md:block pointer-events-none absolute z-0 right-[-3.5rem] top-1/2 -translate-y-1/2 scale-[1.8] lg:scale-[1.6]"
                    />
                    <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 bg-gradient-to-t from-indigo" />
                </div>

                {/* Grid 3 */}
                <div className="grid-black-color grid-3">
                    <div className="z-10 w-[50%]">
                        <p className="headtext">Zeit Zone</p>
                        <p className="subtext">
                            Ich lebe in Offenbach am Main und bin offen für Jobs in Frankfurt am Main und
                            Offenbach am Main sowie remote.
                        </p>
                    </div>
                    <figure className="absolute left-[30%] top-[10%]">
                        <Globe />
                    </figure>
                </div>

                {/* Grid 4 */}
                <div className="grid-special-color grid-4">
                    <div className="flex flex-col items-center justify-center gap-4 size-full">
                        <p className="text-center headtext">Bereit für eine Zusammenarbeit?</p>
                        <CopyEmailButton />
                    </div>
                </div>

                {/* Grid 5 */}
                <div className="grid-default-color grid-5">
                    <div className="z-10 w-[50%]">
                        <p className="headtext">Tech-Stack</p>
                        <p className="subtext">
                            Ich arbeite mit einer Auswahl an Sprachen, Frameworks und Tools, mit denen ich robuste
                            und skalierbare Anwendungen baue.
                        </p>
                    </div>
                    <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                        <FrameWorks />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
