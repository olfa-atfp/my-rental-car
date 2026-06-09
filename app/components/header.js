import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white p-4">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="font-bold text-xl">RentCar</h1>

        <div className="flex gap-4">
          <Link href="/">Accueil</Link>

          <Link href="/about">À propos</Link>

          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
