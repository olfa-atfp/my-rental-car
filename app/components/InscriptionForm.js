"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  nom: yup
    .string()
    .required("Le nom est obligatoire")
    .min(5, "Le nom doit contenir au moins 5 caractères"),

  cin: yup
    .string()
    .required("Le CIN est obligatoire")
    .matches(/^\d{8}$/, "Le CIN doit contenir exactement 8 chiffres"),

  email: yup.string().email("Email invalide").required("Email obligatoire"),

  password: yup
    .string()
    .required("Mot de passe obligatoire")
    .min(6, "Le mot de passe doit contenir au moins 6 caractères"),

  confirmPassword: yup
    .string()
    .required("Veuillez confirmer votre mot de passe")
    .oneOf([yup.ref("password")], "Les mots de passe ne correspondent pas"),

  conditions: yup
    .boolean()
    .oneOf([true], "Vous devez accepter les conditions générales"),
});

export default function InscriptionForm() {
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

    alert("Inscription validée ! (fonctionnalité non implémentée)");

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-lg rounded-lg p-8"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Créer un compte</h2>

      {/* Nom */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Nom complet</label>
        <input
          type="text"
          {...register("nom")}
          className="w-full border rounded p-2"
        />
        <p className="text-red-500 text-sm">{errors.nom?.message}</p>
      </div>

      {/* CIN */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">CIN</label>
        <input
          type="text"
          {...register("cin")}
          className="w-full border rounded p-2"
        />
        <p className="text-red-500 text-sm">{errors.cin?.message}</p>
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

      {/* Mot de passe */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Mot de passe</label>
        <input
          type="password"
          {...register("password")}
          className="w-full border rounded p-2"
        />
        <p className="text-red-500 text-sm">{errors.password?.message}</p>
      </div>

      {/* Confirmation */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">
          Confirmation du mot de passe
        </label>
        <input
          type="password"
          {...register("confirmPassword")}
          className="w-full border rounded p-2"
        />
        <p className="text-red-500 text-sm">
          {errors.confirmPassword?.message}
        </p>
      </div>

      {/* Conditions */}
      <div className="mb-4">
        <label className="flex items-center gap-2">
          <input type="checkbox" {...register("conditions")} />
          J'accepte les conditions générales de location
        </label>

        <p className="text-red-500 text-sm">{errors.conditions?.message}</p>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
      >
        Créer mon compte
      </button>
    </form>
  );
}
