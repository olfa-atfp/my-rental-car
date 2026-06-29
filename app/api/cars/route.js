export async function GET() {
  const cars = [
    {
      id: 1,
      modele: "Peugeot 208",
      marque: "Peugeot",
      image: "/images/peugeot-208.jpg",
      description: "Boîte manuelle, Essence, Climatisation, 5 places",
      prixJournalier: 120,
      categorie: "Citadine",
    },
    {
      id: 2,
      modele: "Renault Clio 5",
      marque: "Renault",
      image: "/images/renault-clio5.jpg",
      description: "Boîte automatique, Essence, Écran tactile, 5 places",
      prixJournalier: 130,
      categorie: "Citadine",
    },
    {
      id: 3,
      modele: "Volkswagen Golf 8",
      marque: "Volkswagen",
      image: "/images/golf-8.jpg",
      description: "Boîte automatique, Diesel, GPS intégré, 5 places",
      prixJournalier: 180,
      categorie: "Berline",
    },
    {
      id: 4,
      modele: "BMW X3",
      marque: "BMW",
      image: "/images/bmw-x3.jpg",
      description: "Boîte automatique, Diesel, Caméra de recul, 5 places",
      prixJournalier: 280,
      categorie: "SUV",
    },
    {
      id: 5,
      modele: "Tesla Model 3",
      marque: "Tesla",
      image: "/images/tesla-model3.jpg",
      description: "100% électrique, Autopilot, Boîte automatique",
      prixJournalier: 320,
      categorie: "Électrique",
    },
    {
      id: 6,
      modele: "Hyundai Tucson",
      marque: "Hyundai",
      image: "/images/hyundai-tucson.jpg",
      description: "Boîte automatique, Hybride, Climatisation, 5 places",
      prixJournalier: 250,
      categorie: "SUV",
    },
  ];

  return Response.json(cars);
}
