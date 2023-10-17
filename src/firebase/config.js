// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDXyHf-6T_4ssFDcPBVeIFGic7QzuVY8pE',
  authDomain: 'naped-980d7.firebaseapp.com',
  projectId: 'naped-980d7',
  storageBucket: 'naped-980d7.appspot.com',
  messagingSenderId: '945606864222',
  appId: '1:945606864222:web:4913348ffe50791c2af3cf',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
