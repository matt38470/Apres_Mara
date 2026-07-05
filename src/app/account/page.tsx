import { Suspense } from "react";
import AccountContent from "./AccountContent";

export const metadata = {
  title: "Mon compte · Le Cartel des Âmes",
};

export default function AccountPage() {
  return (
    <Suspense>
      <AccountContent />
    </Suspense>
  );
}
