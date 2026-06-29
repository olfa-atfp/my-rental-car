/*import cars from "../../data/cars";
import DetailsCarCard from "../../components/DetailsCarCard";

export async function generateMetadata({ params }) {
  const { id } = await params;

  // Utilise directement le tableau cars
  const car = cars.find((c) => c.id === Number(id));

  if (!car) {
    return {
      title: "Véhicule introuvable",
      description: "Véhicule introuvable",
    };
  }

  return {
    title: `${car.marque} - Location`,
    description: `Réservez ${car.marque}`,
  };
}

export default async function CarDetailsPage({ params }) {
  //  AWAIT params ICI !
  const { id } = await params;

  const car = cars.find((c) => c.id === Number(id));

  if (!car) {
    return (
      <main className="container mx-auto p-8">
        <h1 className="text-2xl font-bold text-red-600">
          Véhicule introuvable
        </h1>
        <p className="mt-4 text-gray-600">L'ID {id} n'existe pas</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto p-8">
      <DetailsCarCard car={car} />
    </main>
  );
}*/
//  Server component pour afficher les détails d'une voiture apartir d'un API app/cars/[id]/page.js
import Link from "next/link";
export async function generateMetadata({ params }) {
  const { id } = await params;

  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }/api/cars/${id}`,
    { cache: "no-store" },
  );

  const car = await res.json();

  return {
    title: `${car.modele} - Location`,
    description: `Réservez ${car.modele}`,
  };
}
export default async function CarDetailPage({ params }) {
  //  Await params (Next.js 15+)
  const { id } = await params;

  if (!id) {
    return <div className="p-8">ID manquant</div>;
  }

  console.log("Fetching car with ID:", id); // Debug

  // Fetch côté serveur
  const res = await fetch(`${"http://localhost:3000"}/api/cars/${id}`, {
    cache: "no-store",
  });

  console.log("Response status:", res.status); // Debug

  if (!res.ok) {
    return (
      <div className="p-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Erreur : Impossible de charger la voiture (Status: {res.status})
        </div>
      </div>
    );
  }

  const car = await res.json();
  console.log("Car data:", car); // Debug

  if (!car) {
    return <div className="p-8">Aucune voiture trouvée</div>;
  }

  return (
    <div className="p-8">
      <img
        src={car.image}
        alt={car.modele}
        className="w-full max-w-2xl mb-4 rounded-lg"
      />
      <h1 className="text-3xl font-bold">{car.modele}</h1>
      <p className="text-gray-600">{car.marque}</p>
      <p className="text-xl">Description: {car.description}</p>
      <p className="text-xl">Categorie: {car.categorie}</p>
      <p className="text-2xl font-bold text-primary mt-4">
        {car.prixJournalier} DT / jour
      </p>

      <Link href={`/cars/${car.id}/reservation`}>
        <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-xl transition shadow-lg mt-6">
          Réserver maintenant
        </button>
      </Link>
    </div>
  );
}
