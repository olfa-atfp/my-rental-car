"use client";

import Image from "next/image";

export default function DetailsCarCard({ car }) {
  const handleReservation = () => {
    alert("Réservation confirmée");
  };

  const handleCommande = () => {
    alert("Commande confirmée");
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        src={car.image}
        alt={car.modele}
        width={800}
        height={500}
        className="w-full h-96 object-cover"
      />

      <div className="p-6">
        <h1 className="text-3xl font-bold">
          {car.marque} {car.modele}
        </h1>

        <p className="mt-4 text-gray-600">{car.description}</p>

        <p className="mt-4">
          <strong>Catégorie :</strong> {car.categorie}
        </p>

        <p className="mt-2 text-xl font-bold text-green-600">
          {car.prixJournalier} DT / jour
        </p>

        <div className="mt-6 flex gap-4">
          <button
            onClick={handleReservation}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Réserver
          </button>

          <button
            onClick={handleCommande}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Commander
          </button>
        </div>
      </div>
    </div>
  );
}
