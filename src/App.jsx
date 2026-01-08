import { SystemProvider } from './context/SystemContext';
import IntroOverlay from './components/ui/IntroOverlay';
import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import HoloBlueprints from './components/sections/HoloBlueprints';
import TheVault from './components/sections/TheVault';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import PriceCalculator from './components/sections/PriceCalculator';
import Blog from './components/sections/Blog';
import Booking from './components/sections/Booking';
import Contact from './components/sections/Contact';
import Footer from './components/ui/Footer';
import NovaAssistant from './components/ui/NovaAssistant';
import DownloadCV from './components/ui/DownloadCV';

function App() {
  return (
    <SystemProvider>
      <div className="relative min-h-screen bg-stark-black text-stark-cyan overflow-x-hidden">
        {/* Intro overlay */}
        <IntroOverlay />

        {/* Main application */}
        <Navbar />

        <main>
          <Hero />
          <HoloBlueprints />
          <TheVault />
          <Services />
          <Testimonials />
          <PriceCalculator />
          <Blog />
          <Booking />
          <Contact />
        </main>

        <Footer />

        {/* N.O.V.A. Assistant */}
        <NovaAssistant />

        {/* Download CV Floating Button */}
        <DownloadCV variant="floating" />

        {/* Global effects */}
        <div className="pointer-events-none fixed inset-0 z-[60]">
          {/* Vignette effect */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-stark-black/50" />

          {/* Subtle noise texture */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>
    </SystemProvider>
  );
}

export default App;
