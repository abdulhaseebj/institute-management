import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAj9fptEs05X2hKRnBhGeH8nt5ylSm1P80",
    authDomain: "institute-management-system-1.firebaseapp.com",
    projectId: "institute-management-system-1",
    storageBucket: "institute-management-system-1.appspot.com",
    messagingSenderId: "200178739888",
    appId: "1:200178739888:web:f35a6d069889ca7bf7a975",
    measurementId: "G-LQQY6V33DG"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app