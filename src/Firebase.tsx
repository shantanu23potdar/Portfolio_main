import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBz0e_Y3Fzvr94LSUqiVg6J9hetoSc-6VQ",
  authDomain: "portfolio-644ea.firebaseapp.com",
  projectId: "portfolio-644ea",
  storageBucket: "portfolio-644ea.firebasestorage.app",
  messagingSenderId: "271042000421",
  appId: "1:271042000421:web:9b1eabddbc67906f88b1cc",
  measurementId: "G-FN19VTQ1WT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
