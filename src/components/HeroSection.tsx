import { Waves } from 'lucide-react';

interface HeroSectionProps {
  scrollDepth: number;
}

export default function HeroSection({ scrollDepth }: HeroSectionProps) {
  const opacity = Math.max(0, 1 - scrollDepth / 20);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{ opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#7ED7F6] via-[#1E81B0] to-[#0B3C5D]" />
        <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-[#1E81B0]/50 to-transparent animate-pulse" />
      </div>

      <div
        className="relative z-10 text-center px-6 transition-all duration-700"
        style={{
          transform: `translateY(${scrollDepth * 3}px)`,
          opacity,
        }}
      >
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

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20 animate-float"
            style={{
              width: Math.random() * 20 + 10 + 'px',
              height: Math.random() * 20 + 10 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 10 + 10 + 's',
            }}
          />
        ))}
      </div>
    </section>
  );
}
