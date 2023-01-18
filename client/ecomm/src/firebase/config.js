import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCUI7aHSq3cmcEwybxfbe010OfZiaW8Eh0",
  authDomain: "kgn-shop-786e0.firebaseapp.com",
  projectId: "kgn-shop-786e0",
  storageBucket: "kgn-shop-786e0.appspot.com",
  messagingSenderId: "1016669246125",
  appId: "1:1016669246125:web:e5c5e9a56be4548424ac24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
