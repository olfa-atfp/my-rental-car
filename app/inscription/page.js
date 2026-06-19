import InscriptionForm from "../components/InscriptionForm";

export default function InscriptionPage() {
  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Inscription Client
      </h1>

      <div className="max-w-2xl mx-auto">
        <InscriptionForm />
      </div>
    </main>
  );
}
