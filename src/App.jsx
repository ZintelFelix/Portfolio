import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import LazyOnVisible from "./components/LazyOnVisible";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />

      <LazyOnVisible
        id="about"
        importer={() => import("./sections/About")}
        rootMargin="800px 0px"
        fallback={<div style={{ minHeight: 900 }} />}
      />

      <LazyOnVisible
        id="projects"
        importer={() => import("./sections/Projects")}
        rootMargin="800px 0px"
        fallback={<div style={{ minHeight: 1200 }} />}
      />

      <LazyOnVisible
        id="experience"
        importer={() => import("./sections/Experiences")}
        rootMargin="800px 0px"
        fallback={<div style={{ minHeight: 800 }} />}
      />

      <LazyOnVisible
        id="contact"
        importer={() => import("./sections/Contact")}
        rootMargin="800px 0px"
        fallback={<div style={{ minHeight: 900 }} />}
      />

      <Footer />
    </div>
  );
};

export default App;
