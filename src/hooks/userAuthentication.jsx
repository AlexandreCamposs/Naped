// import {
//   useCreateUserWithEmailAndPassword,
//   useSignInWithEmailAndPassword,
//   updateProfile,
// } from 'react-firebase-hooks/auth';
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

      await updateProfile(user, { displayName: data.displayName });

      console.log(user);
      setLoading(false);

      return user;
    } catch (error) {
      console.log(error);
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
  };
};
