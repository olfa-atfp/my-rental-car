/*-----------Version fichier des données
import CarList from "../components/CarList";

export default function CarsPage() {
  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        Catalogue de véhicules
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Découvrez notre sélection de véhicules disponibles à la location.
      </p>

      <CarList />
    </main>
  );
}*/
/*---------------Version API Inerne--------------*/
/*Version API*/
import Image from "next/image";
import Link from "next/link";

async function getCars() {
  const res = await fetch("http://localhost:3000/api/cars", {
    cache: "no-store",
  });
  return res.json();
}

export default async function CarsPage() {
  const cars = await getCars();

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">Nos Voitures</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div
            key={car.id}
            className="border rounded-lg overflow-hidden shadow-lg flex flex-col"
          >
            <Image
              src={car.image}
              width={400}
              height={250}
              alt={car.marque}
              className="w-full h-64 object-cover"
            />

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold">{car.modele}</h2>
                <p className="text-gray-500">{car.description}</p>
                <p className="mt-2 font-bold">{car.prixJournalier} DT / jour</p>
              </div>

              {/* Bouton Détails */}
              <Link
                href={`/cars/${car.id}`}
                className="mt-4 inline-block text-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Détails
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
