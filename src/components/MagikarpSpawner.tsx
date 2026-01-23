import { useEffect, useState, useRef } from 'react';

interface Magikarp {
  id: string;
  top: number;
  direction: 'left' | 'right';
  duration: number;
  isShiny: boolean;
  scale: number;
}

export default function MagikarpSpawner() {
  const [magikarpList, setMagikarpList] = useState<Magikarp[]>([]);
  const [spawnRate, setSpawnRate] = useState(1); // 1 = 100%, 0.05 = 5%
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      // On ne fait plus rien sur le scroll, spawn constant
      return;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Spawn constant indépendant du scroll
  useEffect(() => {
    setSpawnRate(1); // Toujours à 100%
  }, []);

  useEffect(() => {
    const spawnMagikarp = () => {
      // Vérifier si on doit spawner basé sur le spawn rate
      if (Math.random() > spawnRate) {
        // Relancer immédiatement un nouvel essai
        const nextSpawnDelay = 1000 + Math.random() * 1000; // Pas de division par spawnRate
        if (intervalRef.current) clearTimeout(intervalRef.current);
        intervalRef.current = setTimeout(spawnMagikarp, nextSpawnDelay) as any;
        return;
      }

      const newMagikarp: Magikarp = {
        id: Date.now() + Math.random().toString(),
        top: (() => {
          let initialTop = Math.random() * 100 + (-20);
          const scale = 1 + Math.random();
          
          // Si la scale est grande et le top est très négatif, ajuster vers le bas
          // Chaque unité de scale augmente la hauteur, donc peut causer une coupure
          const minTopNeeded = -(scale - 1) * 50; // Ajustement basé sur la scale
          
          if (initialTop < minTopNeeded) {
            initialTop = Math.max(minTopNeeded, Math.random() * 60); // Spawner plus bas
          }
          
          return initialTop;
        })(),
        direction: Math.random() > 0.5 ? 'left' : 'right',
        duration: 15 + Math.random() * 10, // 15-25 secondes (augmenté pour traverser complètement)
        isShiny: Math.random() > 0.95,
        scale: 1 + Math.random(),
      };

      setMagikarpList((prev) => [...prev, newMagikarp]);

      setTimeout(() => {
        setMagikarpList((prev) => prev.filter((m) => m.id !== newMagikarp.id));
      }, newMagikarp.duration * 1000);

      // Spawner le prochain avec un délai aléatoire
      const nextSpawnDelay = 1000 + Math.random() * 1000;
      if (intervalRef.current) clearTimeout(intervalRef.current);
      intervalRef.current = setTimeout(spawnMagikarp, nextSpawnDelay) as any;
    };

    // Commencer le premier spawn
    const initialDelay = 1000 + Math.random() * 1000;
    if (intervalRef.current) clearTimeout(intervalRef.current);
    intervalRef.current = setTimeout(spawnMagikarp, initialDelay) as any;

    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
  }, [spawnRate]);

  return (
    <div 
      ref={containerRef}
      className="absolute pointer-events-none" 
      style={{ 
        overflow: 'visible', 
        overflowX: 'hidden', 
        top: '-400px',
        minHeight: 'calc(100% + 600px)',
        left: '-100px',
        right: '-100px',
        width: 'calc(100% + 200px)',
      }}
    >
      {magikarpList.map((magikarp) => {
        const imageSrc = magikarp.isShiny
          ? '/src/image/pokemon-magikarp-shiny.png'
          : '/src/image/pokemon-magikarp.png';
        
        const animationClass = magikarp.direction === 'left' ? 'animate-move-left' : 'animate-move-right';

        return (
          <div
            key={magikarp.id}
            className={animationClass}
            style={{
              position: 'absolute',
              top: magikarp.top + '%',
              transform: `translateY(-50%) scale(${magikarp.scale})`,
              transformOrigin: 'left center',
              animationDuration: magikarp.duration + 's',
            }}
          >
            <img
              src={imageSrc}
              alt="Magikarp"
              className="h-16 drop-shadow-lg"
              style={{
                transform: magikarp.direction === 'right' ? 'scaleX(-1)' : 'scaleX(1)',
                backgroundColor: 'transparent',
                imageRendering: 'pixelated',
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
