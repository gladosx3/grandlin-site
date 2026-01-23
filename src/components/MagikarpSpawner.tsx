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
      // Vérifier si on a déjà trop de Magikarp à l'écran
      setMagikarpList((currentList) => {
        if (currentList.length >= 10) {
          // Attendre avant de réessayer
          const nextSpawnDelay = 1000 + Math.random() * 666;
          if (intervalRef.current) clearTimeout(intervalRef.current);
          intervalRef.current = setTimeout(spawnMagikarp, nextSpawnDelay) as any;
          return currentList;
        }

        // Vérifier si on doit spawner basé sur le spawn rate
        if (Math.random() > spawnRate) {
          // Relancer immédiatement un nouvel essai
          const nextSpawnDelay = 1000 + Math.random() * 666;
          if (intervalRef.current) clearTimeout(intervalRef.current);
          intervalRef.current = setTimeout(spawnMagikarp, nextSpawnDelay) as any;
          return currentList;
        }

        // Déterminer la scale d'abord
        const scale = 1 + Math.random();
        
        // Calculer le top minimum basé sur la scale pour éviter le clipping
        // Une scale de 2 signifie la moitié de la hauteur, donc top min = (scale - 1) * 50
        const minTopRequired = (scale - 1) * 50;
        // Maximum top basé sur la scale pour éviter le clipping au bas
        const maxTopRequired = 100 - (scale - 1) * 50;
        
        // Vérifier si on peut spawner sans clipping
        if (minTopRequired > maxTopRequired) {
          // Ne pas spawner si ça serait complètement coupé
          const nextSpawnDelay = 1000 + Math.random() * 666;
          if (intervalRef.current) clearTimeout(intervalRef.current);
          intervalRef.current = setTimeout(spawnMagikarp, nextSpawnDelay) as any;
          return currentList;
        }
        
        // Spawner entre le top minimum et le top maximum sans clipping
        const initialTop = minTopRequired + Math.random() * (maxTopRequired - minTopRequired);

        const newMagikarp: Magikarp = {
          id: Math.random().toString(36) + Date.now().toString(36),
          top: initialTop,
          direction: Math.random() > 0.5 ? 'left' : 'right',
          duration: 25, // Durée fixe longue pour traverser l'écran complètement
          isShiny: Math.random() < 0.05, // 5% de chance d'être shiny
          scale: scale,
        };

        // Spawner le prochain avec un délai aléatoire - divisé par 3 (1-1.67 secondes)
        const nextSpawnDelay = 1000 + Math.random() * 666;
        if (intervalRef.current) clearTimeout(intervalRef.current);
        intervalRef.current = setTimeout(spawnMagikarp, nextSpawnDelay) as any;

        return [...currentList, newMagikarp];
      });
    };

    // Commencer le premier spawn
    const initialDelay = 1000 + Math.random() * 666;
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
        minHeight: 'calc(100% + 800px)',
        left: '-200px',
        right: '-200px',
        width: 'calc(100% + 400px)',
      }}
    >
      {magikarpList.map((magikarp) => {
        const imageSrc = magikarp.isShiny 
          ? '/pokemon-magikarp-shiny.png' 
          : '/pokemon-magikarp.png';
        
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
            onAnimationEnd={() => {
              setMagikarpList((prev) => prev.filter((m) => m.id !== magikarp.id));
            }}
          >
            <img
              src={imageSrc}
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
        );
      })}
    </div>
  );
}
