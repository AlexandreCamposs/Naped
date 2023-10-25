import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';

import { auth } from '../firebase/config';

import { useState } from 'react';

export const useAuthentication = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const auth = getAuth();

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

      return user;
    } catch (error) {
      if (error === '') console.log(error);
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
      console.log(res);

      setLoading(false);
    } catch (error) {
      let messageError = '';
      if (error.message.includes('Password')) {
        messageError = 'Senha deve ter no mínimo 6 digitos.';
      } else if (error.message.includes('INVALID_EMAIL')) {
        messageError = 'Email inválido.';
      } else if (error.message.includes('EMAIL_EXISTS.')) {
        messageError = 'Email já cadastrado.';
      } else {
        messageError = 'Ocorreu um erro tente mais tarde.';
      }

      setError(messageError);
      console.log(error);
    }
  };

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
  };
};
