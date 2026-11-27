import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Stats from "./components/Stats";

export default function App() {
  return (
    <>
      <a
        href="#about"
        className="sr-only z-[70] rounded-full bg-ink px-4 py-2 text-cream focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
