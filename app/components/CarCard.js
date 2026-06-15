import Image from "next/image";
import Link from "next/link";

export default function CarCard({ car }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <Image
        src={car.image}
        alt={car.modele}
        width={400}
        height={250}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold">{car.modele}</h2>

        <p className="text-gray-600">Marque : {car.marque}</p>

        <p className="text-sm text-gray-500 mt-2">{car.description}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            {car.categorie}
          </span>

          <span className="font-bold text-green-600">
            {car.prixJournalier} DT/jour
          </span>
          <Link href={`/cars/${car.id}`}>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Voir détails
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
