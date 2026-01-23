import { Sparkles } from 'lucide-react';

export default function PokemonSection() {
  const cards = [
    { name: 'Boosters Pokémon', desc: 'Évolution Écarlate & Violet' },
    { name: 'Coffrets Premium', desc: 'Collections exclusives' },
    { name: 'Cartes à l\'unité', desc: 'Rares et ultra-rares' },
    { name: 'Decks préconstruits', desc: 'Prêts à jouer' },
  ];

  return (
    <section className="relative py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <Sparkles className="w-12 h-12 text-[#F2C94C] mx-auto mb-3" />
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F9FC] mb-3">
            Univers Pokémon
          </h2>
          <p className="text-lg text-[#F5F9FC]/80">
            Explorez les premières profondeurs lumineuses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group bg-[#1E81B0]/30 backdrop-blur-sm rounded-2xl p-5 border border-[#F5F9FC]/20 hover:border-[#F2C94C] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#F2C94C]/20"
            >
              <div className="bg-[#0B3C5D]/50 rounded-xl h-48 mb-4 flex items-center justify-center">
                <Sparkles className="w-16 h-16 text-[#F2C94C]/70 group-hover:text-[#F2C94C] transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-[#F5F9FC] mb-2">
                {card.name}
              </h3>
              <p className="text-[#F5F9FC]/70">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
