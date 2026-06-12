import { Lora, Special_Elite } from "next/font/google";
import { ThemeProvider } from "@/src/components/theme-provider";
import HeaderAuth from "@/src/components/HeaderAuth";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const special_elite = Special_Elite({
  weight: ["400", "400", "400", "400"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata = {
  title: "Après Mara",
  description: "Fiction interactive",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${lora.variable} ${special_elite.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  
  );
}