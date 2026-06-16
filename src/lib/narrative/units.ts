import { scene1 as ch1s1 } from "@/src/content/chapters/chapter-1/scene-1";
import { scene1 as ch3s1 } from "@/src/content/chapters/chapter-3/scene-1";
import { scene2 as ch3s2 } from "@/src/content/chapters/chapter-3/scene-2";
import { scene3 as ch3s3 } from "@/src/content/chapters/chapter-3/scene-3";
import type { NarrativeUnit } from "@/src/types/narrative";

const allUnits: NarrativeUnit[] = [
  ...ch1s1,
  ...ch3s1,
  ...ch3s2,
  ...ch3s3,
];

export function getUnitByRouteParams(chapterNumber: string, unitNumber: string) {
  return allUnits.find(
    (unit) =>
      unit.chapterNumber.toString() === chapterNumber &&
      unit.unitNumber === unitNumber
  );
}

export function getUnitPathById(id: string) {
  const unit = allUnits.find((u) => u.id === id);
  if (!unit) return "/";
  return `/read/${unit.chapterNumber}/${unit.unitNumber}`;
}
