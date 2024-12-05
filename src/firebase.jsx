// Importación de las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// Configuración de Firebase (reemplazar con tus propias credenciales)
const firebaseConfig = {
  apiKey: "AIzaSyAlgdT2s8XuHTNN-txKzZWaTJsBk0JV-NI",
  authDomain: "admin-panel-4679d.firebaseapp.com",
  projectId: "admin-panel-4679d",
  storageBucket: "admin-panel-4679d.firebasestorage.app",
  messagingSenderId: "52572278928",
  appId: "1:52572278928:web:72a89d4a3cfdaaec58c815",
};

// Inicialización de la app de Firebase
const app = initializeApp(firebaseConfig);

// Exportación de los servicios de Firebase necesarios
export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);
