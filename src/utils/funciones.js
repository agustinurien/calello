import { db } from "./firebaseConfig";
import { addDoc, collection, getDocs } from "firebase/firestore";

async function fetchPatologiasPosts() {
  const documentRef = collection(db, "patologias");
  const snapshot = await getDocs(documentRef);
  const postsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  postsData.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  return postsData;
}

async function uploadPatologiaPost({ nombre, resumen, explicacion }) {
  console.log("Uploading patologia post:", { nombre, explicacion });
  if (!nombre || !explicacion) {
    console.error("Nombre o explicación faltante.");
    return;
  }
  try {
    const docRef = await addDoc(collection(db, "patologias"), {
      nombre,
      resumen,
      explicacion,
    });
    console.log("Patologia post created with ID:", docRef.id);
  } catch (e) {
    console.error("Error uploading patologia post:", e);
  }
}

export { fetchPatologiasPosts, uploadPatologiaPost };
