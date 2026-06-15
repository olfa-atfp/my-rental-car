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
}
