import { Raleway, Inter } from "next/font/google"; // ← Importer les deux polices
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

// ── Configuration de Raleway (polices pour les titres) ────────────
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-raleway", // crée la variable CSS
  display: "swap", // évite le blocage du rendu
});

// ── Configuration d'Inter (police pour le corps de texte) ─────────
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

// --- Métadonnées du site ---
export const metadata = {
  title: "RentCar – Location de voitures premium",
  description: "Louez la voiture de vos rêves en quelques clics.",
};

// --- Layout principal ---
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${raleway.variable} ${inter.variable} font-inter`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
