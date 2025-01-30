import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQJ0xOYBmoH59ikcWfOnMna0LqK0EBgP8",
  authDomain: "ingresocdg-17de2.firebaseapp.com",
  projectId: "ingresocdg-17de2",
  storageBucket: "ingresocdg-17de2.appspot.com",
  messagingSenderId: "1099396487753",
  appId: "1:1099396487753:web:84ec7435ca89630ab8bd98",
  measurementId: "G-Y6MLN9SMM4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
