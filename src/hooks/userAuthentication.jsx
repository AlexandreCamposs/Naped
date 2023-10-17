import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';

import { useState } from 'react';

export const useAuthentication = () => {
  const [createUserWithEmailAndPassword, userC, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const registerUser = async (email, password) => {
    try {
      createUserWithEmailAndPassword(email, password);
    } catch (error) {}
  };

  const loginUser = (email, password) => {
    try {
      signInWithEmailAndPassword(email, password);
    } catch (error) {}
  };

  return {
    registerUser,
    user,
    loading,
    error,
    loginUser,
    user,
    loading,
    error,
  };
};
