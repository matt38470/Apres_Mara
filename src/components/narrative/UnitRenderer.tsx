"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '@/src/store/gameStore';
import Gauge from '@/src/components/Gauge';
import ArchivesModal from '@/src/components/ArchivesModal';
import { getUnitPathById } from '@/src/lib/narrative/units';
import type { NarrativeUnit, NarrativeChoice } from '@/src/types/narrative';

export default function UnitRenderer({ unit }: { unit: NarrativeUnit }) {
  const router = useRouter();
  const {
    gauges,
    archives,
    applyChoice,
    choiceHistory,
    unlockedCharacters,
    newArchives,
    newCharacters,
    markArchivesSeen,
    markCharactersSeen,
    resetGame,
    currentUnitId,
    quickNote,
  } = useGameStore();
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [unit.id]);

  const handleChoice = (choice: NarrativeChoice) => {
    if (choice.effects) {
      applyChoice(choice.effects, choice.unlockArchive);
    }
    const nextPath = getUnitPathById(choice.nextUnitId);
    router.push(nextPath);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-900 font-sans pb-20 selection:bg-orange-200">

      <header className="sticky top-0 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-gray-800 p-3 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-x-2 gap-y-3">
            <Gauge
              idKey="dette"
              label="Dette"
              value={gauges.dette}
              colorTheme="red"
              description="Le poids des obligations accumulées"
            />
            <Gauge
              idKey="ancrage"
              label="Ancrage"
              value={gauges.ancrage}
              colorTheme="green"
              description="La stabilité mentale de Thomas"
            />
            <Gauge
              idKey="humanite"
              label="Humanité"
              value={gauges.humanite}
              colorTheme="orange"
              description="La capacité d'empathie et de connexion"
            />
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto p-6 md:p-8 mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={unit.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-4">
              SCÈNE — {unit.title} • {unit.timeLabel}
            </h1>

            <div className="text-lg md:text-xl leading-relaxed text-gray-800 mb-12 space-y-6">
              {unit.textBlocks.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {unit.choices.map((choice, index) => (
                <button
                  key={choice.id}
                  onClick={() => handleChoice(choice)}
                  className="group p-4 text-left border border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-all duration-300 shadow-sm hover:shadow-md bg-white relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-orange-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 opacity-20" />

                  {unit.choices.length > 1 && (
                    <span className="block text-sm font-semibold text-gray-500 group-hover:text-orange-600 mb-1 relative z-10">
                      Choix {index + 1}
                    </span>
                  )}

                  <span
                    className={`block font-medium relative z-10 ${
                      unit.choices.length === 1
                        ? 'text-center text-orange-600 font-semibold'
                        : 'text-gray-900'
                    }`}
                  >
                    {choice.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      <button
        onClick={() => setIsArchiveOpen(true)}
        className="fixed bottom-6 right-6 bg-gray-900 border border-gray-700 text-orange-500 p-4 rounded-full shadow-2xl hover:bg-gray-800 hover:scale-105 transition-all z-40 flex items-center justify-center font-bold tracking-widest text-xs uppercase"
      >
        Dossiers ({archives?.length || 0})
      </button>

      <ArchivesModal
        isOpen={isArchiveOpen}
        onClose={() => setIsArchiveOpen(false)}
        unlockedArchives={archives}
        unlockedCharacters={unlockedCharacters}
        newArchives={newArchives}
        newCharacters={newCharacters}
        markArchivesSeen={markArchivesSeen}
        markCharactersSeen={markCharactersSeen}
        choiceHistory={choiceHistory}
        gauges={gauges}
        notes={quickNote ? [quickNote] : []}
        currentUnitId={currentUnitId}
        onRestart={resetGame}
      />
    </div>
  );
}
