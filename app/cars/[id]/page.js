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
/*import Link from "next/link";

// Fonction réutilisable pour récupérer une voiture
async function getCar(id) {
  const baseUrl = "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/cars/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(
      `Impossible de récupérer la voiture (Status: ${res.status})`,
    );
  }

  return res.json();
}

// Métadonnées dynamiques (SEO)
export async function generateMetadata({ params }) {
  const { id } = await params;

  try {
    const car = await getCar(id);

    return {
      title: `${car.modele} - Location`,
      description: `Réservez ${car.modele} au meilleur prix.`,
    };
  } catch {
    return {
      title: "Voiture introuvable",
      description: "Cette voiture n'existe pas.",
    };
  }
}

// Page des détails
export default async function CarDetailPage({ params }) {
  const { id } = await params;

  if (!id) {
    return (
      <div className="p-8">
        <h2 className="text-xl font-semibold text-red-600">ID manquant</h2>
      </div>
    );
  }

  try {
    const car = await getCar(id);

    return (
      <div className="p-8 max-w-4xl mx-auto">
        <img
          src={car.image}
          alt={car.modele}
          className="w-full rounded-lg mb-6"
        />

        <h1 className="text-3xl font-bold mb-2">{car.modele}</h1>

        <p className="text-gray-600 mb-2">
          <strong>Marque :</strong> {car.marque}
        </p>

        <p className="mb-2">
          <strong>Description :</strong> {car.description}
        </p>

        <p className="mb-2">
          <strong>Catégorie :</strong> {car.categorie}
        </p>

        <p className="text-2xl font-bold text-primary mb-6">
          {car.prixJournalier} DT / jour
        </p>

        <Link href={`/cars/${car.id}/reservation`}>
          <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 rounded-xl transition">
            Réserver maintenant
          </button>
        </Link>
      </div>
    );
  } catch (error) {
    return (
      <div className="p-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error.message}
        </div>
      </div>
    );
  }
}*/
// Client Component pour afficher les détails d'une voiture apartir d'un API
// app/cars/[id]/page.js
"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CarDetailPage() {
  const params = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Vérifier que params.id existe
    const id = params?.id;

    if (!id) {
      setError("ID manquant");
      setLoading(false);
      return;
    }

    console.log("Fetching car with ID:", id); // Debug

    fetch(`/api/cars/${id}`)
      .then((res) => {
        console.log("Response status:", res.status); // Debug
        if (!res.ok) {
          throw new Error(`Erreur ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Data received:", data); // Debug
        setCar(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err); // Debug
        setError(err.message);
        setLoading(false);
      });
  }, [params?.id]);

  if (loading) return <div> Chargement...</div>;
  if (error) return <div> Erreur : {error}</div>;
  if (!car) return <div>Aucune voiture trouvée</div>;

  return (
    <div className="p-8">
      <img src={car.image} alt={car.name} className="w-full max-w-2xl mb-4" />
      <h1 className="text-3xl font-bold">{car.name}</h1>
      <p className="text-gray-600">{car.category}</p>
      <p className="text-xl">Couleur: {car.color}</p>
      <p className="text-xl">Matricule: {car.matricule}</p>
      <p className="text-2xl font-bold text-primary mt-4">
        {car.price} DT / jour
      </p>
      <Link href={`/cars/${car.id}/reservation`}>
        <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-xl transition shadow-lg">
          Réserver maintenant
        </button>
      </Link>
    </div>
  );
}
