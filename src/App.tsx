import { useEffect, useState } from 'react';
import { Waves } from 'lucide-react';
import PokemonSection from './components/PokemonSection';
import MagicSection from './components/MagicSection';
import OnePieceSection from './components/OnePieceSection';
import LorcanaSection from './components/LorcanaSection';
import DragonBallSection from './components/DragonBallSection';
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
    if (scrollDepth < 12) {
      return `rgb(80, 151, 190)`;
    } else if (scrollDepth < 25) {
      const progress = (scrollDepth - 12) / 13;
      return `rgb(${80 - progress * 30}, ${151 - progress * 41}, ${190 - progress * 50})`;
    } else if (scrollDepth < 45) {
      const progress = (scrollDepth - 25) / 20;
      return `rgb(${50 - progress * 25}, ${110 - progress * 35}, ${140 - progress * 45})`;
    } else if (scrollDepth < 65) {
      const progress = (scrollDepth - 45) / 20;
      return `rgb(${25 - progress * 12}, ${75 - progress * 25}, ${95 - progress * 30})`;
    } else {
      const progress = Math.min((scrollDepth - 65) / 35, 1);
      return `rgb(${13 - progress * 3}, ${50 - progress * 15}, ${65 - progress * 15})`;
    }
  };

  return (
    <div
      className="min-h-screen transition-colors duration-1000 ease-in-out relative"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      {/* Bulles flottantes partout */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(64)].map((_, i) => {
          // Distribution: 40% en haut (0-40%), 30% au milieu (40-70%), 30% plus bas (70-100%)
          const seed = i;
          const rand = (Math.sin(seed * 12.9898) * 43758.5453) % 1;
          let topPosition;
          
          if (rand < 0.4) {
            topPosition = ((Math.sin(seed * 78.233) * 43758.5453) % 1) * 40; // 0-40%
          } else if (rand < 0.7) {
            topPosition = 40 + ((Math.sin(seed * 45.164) * 43758.5453) % 1) * 30; // 40-70%
          } else {
            topPosition = 70 + ((Math.sin(seed * 94.673) * 43758.5453) % 1) * 30; // 70-100%
          }
          
          const size = ((Math.sin(seed * 23.456) * 43758.5453) % 1) * 25 + 5; // 5-30px
          const duration = 40; // Durée fixe plus rapide
          const delay = ((Math.sin(seed * 34.012) * 43758.5453) % 1) * 5; // 0-5s
          const left = ((Math.sin(seed * 67.345) * 43758.5453) % 1) * 100; // 0-100%
          
          return (
            <div
              key={`bubble-${i}`}
              className="absolute rounded-full bg-white/20 animate-float pointer-events-none"
              style={{
                width: size + 'px',
                height: size + 'px',
                left: left + '%',
                top: topPosition + '%',
                animationDelay: delay + 's',
                animationDuration: duration + 's',
              }}
            />
          );
        })}
      </div>

      {/* Contenu du héro intégré */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-6">
          <img
            src="/image.png"
            alt="GRANDLINE"
            className="w-full max-w-3xl mx-auto mb-6 drop-shadow-2xl"
          />

          <h1 className="text-4xl md:text-6xl font-bold text-[#F5F9FC] mb-4 drop-shadow-lg">
            Plongez dans l'univers des cartes à collectionner
          </h1>

          <p className="text-xl md:text-2xl text-[#F5F9FC]/90 font-light max-w-3xl mx-auto">
            Pokémon, Magic, One Piece, Lorcana, Dragon Ball et plus encore
          </p>

          <div className="mt-12 animate-bounce">
            <Waves className="w-12 h-12 text-[#F5F9FC]/70 mx-auto" />
          </div>
        </div>
      </section>

      <PokemonSection />
      <MagicSection />
      <OnePieceSection />
      <LorcanaSection />
      <DragonBallSection />
      <LeagueSection />
      <ContactSection />
    </div>
  );
}

export default App;
