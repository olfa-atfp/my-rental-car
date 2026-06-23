import cars from "../../data/cars";
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
}
