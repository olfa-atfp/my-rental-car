"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup
    .string()
    .required("Le nom est obligatoire")
    .min(4, "Le nom doit contenir au moins 4 caractères"),

  email: yup.string().email("Email invalide").required("Email obligatoire"),

  telephone: yup
    .string()
    .required("Numéro de téléphone obligatoire")
    .matches(/^\d{8}$/, "Le numéro doit contenir exactement 8 chiffres"),

  message: yup
    .string()
    .required("Message obligatoire")
    .max(30, "Le message ne doit pas dépasser 30 caractères"),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);

    alert(
      "Votre demande a été envoyée avec succès. Notre équipe RentCar vous contactera bientôt.",
    );

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-lg rounded-lg p-6"
    >
      <h2 className="text-2xl font-bold mb-6">Contactez-nous</h2>

      {/* Nom */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Nom complet</label>

        <input
          type="text"
          {...register("name")}
          className="w-full border rounded p-2"
        />

        <p className="text-red-500 text-sm">{errors.name?.message}</p>
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Email</label>

        <input
          type="email"
          {...register("email")}
          className="w-full border rounded p-2"
        />

        <p className="text-red-500 text-sm">{errors.email?.message}</p>
      </div>

      {/* Téléphone */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Téléphone</label>

        <input
          type="text"
          {...register("telephone")}
          className="w-full border rounded p-2"
        />

        <p className="text-red-500 text-sm">{errors.telephone?.message}</p>
      </div>

      {/* Message */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Message</label>

        <textarea
          {...register("message")}
          rows="4"
          className="w-full border rounded p-2"
        />

        <p className="text-red-500 text-sm">{errors.message?.message}</p>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Envoyer
      </button>
    </form>
  );
}
