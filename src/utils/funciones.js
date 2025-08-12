import { db } from "./firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

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

async function deletePatologiaPost(id) {
  console.log("Deleting patologia post with ID:", id);
  try {
    const docRef = doc(db, "patologias", id);
    await deleteDoc(docRef);
    console.log("Patologia post deleted with ID:", id);
    return true;
  } catch (e) {
    console.error("Error deleting patologia post:", e);
  }
}

async function fetchConsultoriosPosts() {
  const documentRef = collection(db, "consultorios");
  const snapshot = await getDocs(documentRef);
  const postsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  postsData.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  return postsData;
}

async function deleteConsultorioPost(id) {
  console.log("Deleting consultorio post with ID:", id);
  try {
    const docRef = doc(db, "consultorios", id);
    await deleteDoc(docRef);
    console.log("Consultorio post deleted with ID:", id);
    return true;
  } catch (e) {
    console.error("Error deleting consultorio post:", e);
  }
}

async function uploadConsultorioPost({ nombre, direccionModalidad, masInformacion, adicional, linkConsultorio }) {
  console.log("Uploading consultorio post:", { nombre, direccionModalidad });
  if (!nombre || !direccionModalidad) {
    console.error("Nombre o dirección/modalidad faltante.");
    return;
  }
  try {
    const docRef = await addDoc(collection(db, "consultorios"), {
      nombre,
      direccionModalidad,
      masInformacion,
      adicional,
      linkConsultorio,
    });
    console.log("Consultorio post created with ID:", docRef.id);
  } catch (e) {
    console.error("Error uploading consultorio post:", e);
  }
}



export {
  fetchPatologiasPosts,
  uploadPatologiaPost,
  deletePatologiaPost,
  uploadConsultorioPost,
  fetchConsultoriosPosts,
  deleteConsultorioPost,
};
