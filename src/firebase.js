import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9Ybd4xNoAsrupnvV7dPCLGcykDF4-bRQ",
  authDomain: "vaishnavi-portfolio-5b8ad.firebaseapp.com",
  projectId: "vaishnavi-portfolio-5b8ad",
  storageBucket: "vaishnavi-portfolio-5b8ad.firebasestorage.app",
  messagingSenderId: "916954710326",
  appId: "1:916954710326:web:a59c64ae7da686b8593397",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);