import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbHVGcR9sSe--b1lqR4WVu90oQ4KaE7KE",
  authDomain: "miniblog-ceb2f.firebaseapp.com",
  projectId: "miniblog-ceb2f",
  storageBucket: "miniblog-ceb2f.firebasestorage.app",
  messagingSenderId: "444254294081",
  appId: "1:444254294081:web:e7df4a6b39b0ca5652f6c0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
