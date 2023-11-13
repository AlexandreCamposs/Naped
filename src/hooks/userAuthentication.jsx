import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase/config";

import { useState } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const clearError = () => {
    setError("");
  };

  const registerUser = async (data) => {
    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      await updateProfile(user, { displayName: data.name });

      console.log(user);
      setLoading(false);

      setError("");

      return user;
    } catch (error) {
      console.log(error);

      let messageError = "";
      if (error.message.includes("auth/missing-password")) {
        messageError = "Senha deve ter no mínimo 6 digitos.";
      } else if (error.message.includes("auth/invalid-email")) {
        messageError = "Email inválido.";
      } else if (error.message.includes("auth/email-already-in-use")) {
        messageError = "Email já cadastrado.";
      } else {
        messageError = "Ocorreu um erro tente mais tarde.";
      }

      setError(messageError);
    }
  };

  const loginUser = async (data) => {
    setLoading(true);

    try {
      const res = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      setLoading(false);

      return res;
    } catch (error) {
      console.log(error);

      let messageError = "";

      if (error.message.includes("auth/invalid-email")) {
        messageError = "E-mail inválido";
      } else if (error.message.includes("auth/missing-password")) {
        messageError = "Senha inválida.";
      } else {
        messageError = "Tente mais tarde.";
      }

      setError(messageError);
    }
  };

  console.log(error);

  const logout = () => {
    signOut(auth);
  };

  return {
    registerUser,
    loginUser,
    logout,
    auth,
    error,
    loading,
    clearError,
  };
};
