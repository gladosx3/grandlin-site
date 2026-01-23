import { Castle, Zap } from 'lucide-react';

export default function LorcanaDragonBallSection() {
  const lorcanaCards = [
    { name: 'Disney Lorcana', desc: 'Magie Disney enchantée' },
    { name: 'Illumineer\'s Quest', desc: 'Éditions spéciales' },
  ];

  const dragonBallCards = [
    { name: 'Fusion World', desc: 'Nouvelles fusions' },
    { name: 'Super Card Game', desc: 'Guerriers légendaires' },
  ];

  return (
    <section className="relative py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="text-center mb-8">
              <Castle className="w-10 h-10 text-[#F2C94C] mx-auto mb-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#F5F9FC] mb-2">
                Disney Lorcana
              </h2>
              <p className="text-[#F5F9FC]/70">Lumière magique dans les abysses</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {lorcanaCards.map((card, index) => (
                <div
                  key={index}
                  className="group bg-[#051923]/50 backdrop-blur-sm rounded-xl p-6 border border-[#F5F9FC]/10 hover:border-[#F2C94C] transition-all duration-500 hover:scale-105"
                >
                  <div className="bg-[#0B3C5D]/40 rounded-lg h-40 mb-4 flex items-center justify-center">
                    <Castle className="w-14 h-14 text-[#F2C94C]/50 group-hover:text-[#F2C94C] transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#F5F9FC] mb-2">
                    {card.name}
                  </h3>
                  <p className="text-[#F5F9FC]/70">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-center mb-8">
              <Zap className="w-10 h-10 text-[#F2C94C] mx-auto mb-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#F5F9FC] mb-2">
                Dragon Ball
              </h2>
              <p className="text-[#F5F9FC]/70">Énergie pure des profondeurs</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {dragonBallCards.map((card, index) => (
                <div
                  key={index}
                  className="group bg-[#051923]/50 backdrop-blur-sm rounded-xl p-6 border border-[#F5F9FC]/10 hover:border-[#F2C94C] transition-all duration-500 hover:scale-105"
                >
                  <div className="bg-[#0B3C5D]/40 rounded-lg h-40 mb-4 flex items-center justify-center">
                    <Zap className="w-14 h-14 text-[#F2C94C]/50 group-hover:text-[#F2C94C] transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#F5F9FC] mb-2">
                    {card.name}
                  </h3>
                  <p className="text-[#F5F9FC]/70">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
