import { Swords } from 'lucide-react';

export default function LeagueSection() {
  const cards = [
    { name: 'League of Legends', desc: 'Champions et Régions' },
    { name: 'Autres TCG', desc: 'Découvrez nos exclusivités' },
    { name: 'Précommandes', desc: 'Prochaines sorties' },
  ];

  return (
    <section className="relative py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <Swords className="w-12 h-12 text-[#F2C94C] mx-auto mb-3" />
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F9FC] mb-3">
            Les Abysses
          </h2>
          <p className="text-lg text-[#F5F9FC]/70">
            Puissance mystérieuse des profondeurs ultimes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group bg-[#051923]/60 backdrop-blur-sm rounded-xl p-6 border border-[#F5F9FC]/5 hover:border-[#F2C94C]/80 transition-all duration-500 hover:scale-105"
            >
              <div className="bg-[#0B3C5D]/30 rounded-lg h-48 mb-4 flex items-center justify-center">
                <Swords className="w-16 h-16 text-[#F2C94C]/40 group-hover:text-[#F2C94C] transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-[#F5F9FC] mb-2">
                {card.name}
              </h3>
              <p className="text-[#F5F9FC]/60">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
