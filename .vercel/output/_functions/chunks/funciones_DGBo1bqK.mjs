import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, deleteDoc, addDoc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

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
getStorage(app);

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

export { deleteConsultorioPost as a, fetchConsultoriosPosts as b, uploadConsultorioPost as c, deletePatologiaPost as d, fetchPatologiasPosts as f, uploadPatologiaPost as u };
