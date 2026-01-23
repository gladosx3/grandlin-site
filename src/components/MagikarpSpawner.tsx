import { useState, useEffect } from 'react';

interface Magikarp {
  id: string;
  top: number;
  direction: 'left' | 'right';
  duration: number;
  isShiny: boolean;
  scale: number;
}

export default function MagikarpSpawner() {
  const [magikarp, setMagikarp] = useState<Magikarp | null>(null);

  // Générer une nouvelle Magikarp aléatoire
  const generateNewMagikarp = () => {
    const scale = 1 + Math.random() * 0.9;
    const minTopRequired = (scale - 1) * 50;
    const maxTopRequired = 100 - (scale - 1) * 50;
    
    // Vérifier qu'on peut spawner sans clipping
    if (minTopRequired <= maxTopRequired) {
      const top = minTopRequired + Math.random() * (maxTopRequired - minTopRequired);
      const direction = Math.random() > 0.5 ? 'left' : 'right';
      const duration = 15 + Math.random() * 15; // 15-30 secondes aléatoire
      const isShiny = Math.random() < 0.05;

      const newMagikarp: Magikarp = {
        id: `m${Date.now()}${Math.random().toString(36).substring(2, 15)}`,
        top,
        direction,
        duration,
        isShiny,
        scale,
      };

      console.log(`
╔════════════════════════════════════════╗
║ ➕ NOUVEAU MAGIKARP SPAWNÉ             ║
╠════════════════════════════════════════╣
║ Position (Y): ${top.toFixed(2)}%
║ Zone: ${top < 33.33 ? '🟦 HAUT' : top < 66.66 ? '🟩 MILIEU' : '🟥 BAS'}
║ Direction: ${direction === 'left' ? '⬅️ GAUCHE' : '➡️ DROITE'}
║ Type: ${isShiny ? '✨ SHINY' : '🔴 NORMAL'}
║ Scale: ${scale.toFixed(2)}x
║ Vitesse: ${duration.toFixed(1)}s
╚════════════════════════════════════════╝
      `);

      setMagikarp(newMagikarp);
    }
  };

  // Générer la première Magikarp au mount
  useEffect(() => {
    generateNewMagikarp();
  }, []);

  const handleAnimationEnd = () => {
    console.log(`❌ Magikarp disparue - spawn nouvelle`);
    generateNewMagikarp();
  };

  return (
    <div 
      className="absolute pointer-events-none" 
      style={{ 
        overflow: 'visible', 
        overflowX: 'hidden', 
        top: '-400px',
        minHeight: 'calc(100% + 800px)',
        left: '-200px',
        right: '-200px',
        width: 'calc(100% + 400px)',
      }}
    >
      {magikarp && (
        <div
          key={magikarp.id}
          className={magikarp.direction === 'left' ? 'animate-move-left' : 'animate-move-right'}
          style={{
            position: 'absolute',
            top: magikarp.top + '%',
            transform: `translateY(-50%) scale(${magikarp.scale})`,
            transformOrigin: 'left center',
            animationDuration: magikarp.duration + 's',
          }}
          onAnimationEnd={handleAnimationEnd}
        >
          <img
            src={magikarp.isShiny ? '/pokemon-magikarp-shiny.png' : '/pokemon-magikarp.png'}
            alt="Magikarp"
            style={{
              height: '64px',
              width: 'auto',
              display: 'block',
              transform: magikarp.direction === 'right' ? 'scaleX(-1)' : 'scaleX(1)',
              filter: magikarp.isShiny ? 'brightness(1.3)' : 'brightness(1)',
            }}
          />
        </div>
      )}
    </div>
  );
}
