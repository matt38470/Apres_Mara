import type { NarrativeUnit } from '@/src/types/narrative';

import { scene1 } from './chapters/chapter-1/scene-1';
import { scene2 } from './chapters/chapter-1/scene-2';
import { scene3 } from './chapters/chapter-1/scene-3';
import { scene4 } from './chapters/chapter-1/scene-4';

const chapter1Units: NarrativeUnit[] = [
  ...scene1,
  ...scene2,
  ...scene3,
  ...scene4,
];

export const gameContent: Record<number, NarrativeUnit[]> = {
  1: chapter1Units,
};

export const getScene = (
  chapterNumber: string | number,
  unitNumber: string
): NarrativeUnit | null => {
  const chapter = gameContent[Number(chapterNumber)];
  if (!chapter) return null;

  return chapter.find((scene) => scene.unitNumber === unitNumber) || null;
};
