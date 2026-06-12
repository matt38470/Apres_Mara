import type { NarrativeUnit } from '@/src/types/narrative';

import { scene1 as chapter1Scene1 } from './chapters/chapter-1/scene-1';
import { scene2 as chapter1Scene2 } from './chapters/chapter-1/scene-2';
import { scene3 as chapter1Scene3 } from './chapters/chapter-1/scene-3';

import { scene1 as chapter2Scene1 } from './chapters/chapter-2/scene-1';
import { scene2 as chapter2Scene2 } from './chapters/chapter-2/scene-2';
import { scene3 as chapter2Scene3 } from './chapters/chapter-2/scene-3';

import { scene1 as chapter3Scene1 } from './chapters/chapter-3/scene-1';
import { scene2 as chapter3Scene2 } from './chapters/chapter-3/scene-2';
import { scene3 as chapter3Scene3 } from './chapters/chapter-3/scene-3';

const chapter1Units: NarrativeUnit[] = [
  ...chapter1Scene1,
  ...chapter1Scene2,
  ...chapter1Scene3,
];

const chapter2Units: NarrativeUnit[] = [
  ...chapter2Scene1,
  ...chapter2Scene2,
  ...chapter2Scene3,
];

const chapter3Units: NarrativeUnit[] = [
  ...chapter3Scene1,
  ...chapter3Scene2,
  ...chapter3Scene3,
];


export const gameContent: Record<number, NarrativeUnit[]> = {
  1: chapter1Units,
  2: chapter2Units,
  3: chapter3Units,
};

export const getScene = (
  chapterNumber: string | number,
  unitNumber: string
): NarrativeUnit | null => {
  const chapter = gameContent[Number(chapterNumber)];
  if (!chapter) return null;

  return chapter.find((unit) => unit.unitNumber === unitNumber) || null;
};