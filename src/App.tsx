import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import PokemonSection from './components/PokemonSection';
import MagicOnePieceSection from './components/MagicOnePieceSection';
import LorcanaDragonBallSection from './components/LorcanaDragonBallSection';
import LeagueSection from './components/LeagueSection';
import ContactSection from './components/ContactSection';

function App() {
  const [scrollDepth, setScrollDepth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const depth = (scrollPosition / maxScroll) * 100;
      setScrollDepth(depth);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getBackgroundColor = () => {
    if (scrollDepth < 15) {
      return `rgb(126, 215, 246)`;
    } else if (scrollDepth < 30) {
      const progress = (scrollDepth - 15) / 15;
      return `rgb(${126 - progress * 96}, ${215 - progress * 134}, ${246 - progress * 70})`;
    } else if (scrollDepth < 50) {
      const progress = (scrollDepth - 30) / 20;
      return `rgb(${30 - progress * 19}, ${81 - progress * 21}, ${176 - progress * 83})`;
    } else if (scrollDepth < 80) {
      const progress = (scrollDepth - 50) / 30;
      return `rgb(${11 - progress * 6}, ${60 - progress * 35}, ${93 - progress * 68})`;
    } else {
      return `rgb(5, 25, 35)`;
    }
  };

  return (
    <div
      className="min-h-screen transition-colors duration-1000 ease-in-out"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <HeroSection scrollDepth={scrollDepth} />
      <PokemonSection />
      <MagicOnePieceSection />
      <LorcanaDragonBallSection />
      <LeagueSection />
      <ContactSection />
    </div>
  );
}

export default App;
