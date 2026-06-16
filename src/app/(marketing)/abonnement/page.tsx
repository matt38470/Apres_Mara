import { Suspense } from "react";
import AbonnementContent from "./AbonnementContent";

export default function AbonnementPage() {
  return (
    <Suspense>
      <AbonnementContent />
    </Suspense>
  );
}
