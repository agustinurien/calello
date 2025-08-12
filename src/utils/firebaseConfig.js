import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCiMhvnIIn1rw9r17Wsq_Di8ujGvo2-Hp8",
  authDomain: "calelloapp.firebaseapp.com",
  projectId: "calelloapp",
  storageBucket: "calelloapp.firebasestorage.app",
  messagingSenderId: "1089866845140",
  appId: "1:1089866845140:web:49fac3d6c5ad7fa7b2a441",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
