import { notFound } from "next/navigation";
import { getScene } from "@/src/content/gameContent";
import SceneReaderClient from "@/src/components/SceneReaderClient";

type PageProps = {
  params: {
    chapterNumber: string;
    unitNumber: string;
  };
};

export default function ReadPage({ params }: PageProps) {
  const chapterNumber = Number(params.chapterNumber);
  const unitNumber = params.unitNumber;

  if (Number.isNaN(chapterNumber)) {
    notFound();
  }

  const scene = getScene(chapterNumber, unitNumber);

  if (!scene) {
    notFound();
  }

  return <SceneReaderClient scene={scene} />;
}