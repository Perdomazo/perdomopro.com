import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WorkAreas from './components/WorkAreas';
import Projects from './components/Projects';
import Process from './components/Process';
import Stack from './components/Stack';
import Currently from './components/Currently';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#FAFAF8] text-[#111111] overflow-x-hidden font-sans selection:bg-[#111111] selection:text-[#FAFAF8]">
      {/* Smooth scroll engine */}
      <SmoothScroll />

      {/* Primary Top Header */}
      <Navbar />

      {/* Main Page Sections */}
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <About />
        <WorkAreas />
        <Projects />
        <Process />
        <Stack />
        <Currently />
        <Contact />
      </main>

      {/* Minimalist Tech Footer */}
      <Footer />
    </div>
  );
}
