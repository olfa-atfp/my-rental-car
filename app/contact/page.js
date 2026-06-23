import Image from "next/image";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact | Location de voitures en Tunisie",
  description:
    "Contactez-nous pour toute demande de location de voitures en Tunisie. Nous sommes à votre écoute.",
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Contact RentCar</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Formulaire */}
        <ContactForm />

        {/* Informations */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <Image
            src="/images/contact-rentcar.jpg"
            alt="RentCar"
            width={600}
            height={400}
            className="rounded-lg mb-6"
          />

          <h2 className="text-2xl font-bold mb-4">Nos coordonnées</h2>

          <p className="mb-2">
            <strong>Agence :</strong> RentCar Tunisia
          </p>

          <p className="mb-2">
            <strong>Adresse :</strong> Avenue Habib Bourguiba, Tunis
          </p>

          <p className="mb-2">
            <strong>Téléphone :</strong> +216 71 123 456
          </p>

          <p className="mb-2">
            <strong>Email :</strong> contact@rentcar.tn
          </p>

          <p className="mb-2">
            <strong>Horaires :</strong>
          </p>

          <ul className="list-disc ml-5">
            <li>Lundi - Vendredi : 08h00 - 18h00</li>
            <li>Samedi : 08h00 - 13h00</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
