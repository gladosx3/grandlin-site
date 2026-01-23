import { Wand2, Anchor } from 'lucide-react';

export default function MagicOnePieceSection() {
  const magicCards = [
    { name: 'Commander', desc: 'Decks légendaires' },
    { name: 'Boosters', desc: 'Dernières extensions' },
    { name: 'Cartes rares', desc: 'Anciennes et nouvelles' },
  ];

  const onePieceCards = [
    { name: 'Starter Decks', desc: 'Pirates et Marines' },
    { name: 'Boosters', desc: 'Éditions premium' },
    { name: 'Leader Cards', desc: 'Capitaines légendaires' },
  ];

  return (
    <section className="relative py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="text-center mb-8">
              <Wand2 className="w-10 h-10 text-[#F2C94C] mx-auto mb-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#F5F9FC] mb-2">
                Magic: The Gathering
              </h2>
              <p className="text-[#F5F9FC]/70">Magie mystique des profondeurs</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {magicCards.map((card, index) => (
                <div
                  key={index}
                  className="group bg-[#0B3C5D]/40 backdrop-blur-sm rounded-xl p-5 border border-[#F5F9FC]/15 hover:border-[#F2C94C] transition-all duration-500 hover:scale-105"
                >
                  <div className="bg-[#051923]/60 rounded-lg h-32 mb-3 flex items-center justify-center">
                    <Wand2 className="w-12 h-12 text-[#F2C94C]/60 group-hover:text-[#F2C94C] transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#F5F9FC] mb-1">
                    {card.name}
                  </h3>
                  <p className="text-sm text-[#F5F9FC]/70">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-center mb-8">
              <Anchor className="w-10 h-10 text-[#F2C94C] mx-auto mb-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#F5F9FC] mb-2">
                One Piece Card Game
              </h2>
              <p className="text-[#F5F9FC]/70">Trésors des mers profondes</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {onePieceCards.map((card, index) => (
                <div
                  key={index}
                  className="group bg-[#0B3C5D]/40 backdrop-blur-sm rounded-xl p-5 border border-[#F5F9FC]/15 hover:border-[#F2C94C] transition-all duration-500 hover:scale-105"
                >
                  <div className="bg-[#051923]/60 rounded-lg h-32 mb-3 flex items-center justify-center">
                    <Anchor className="w-12 h-12 text-[#F2C94C]/60 group-hover:text-[#F2C94C] transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#F5F9FC] mb-1">
                    {card.name}
                  </h3>
                  <p className="text-sm text-[#F5F9FC]/70">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
