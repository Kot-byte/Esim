// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCXwQvsp0uNKnNBUazQbfr9uRH-ZnIk0ow",
  authDomain: "project-fb2b2.firebaseapp.com",
  projectId: "project-fb2b2",
  storageBucket: "project-fb2b2.firebasestorage.app",
  messagingSenderId: "1056006588999",
  appId: "1:1056006588999:web:cdab68f1f30b4c8cd7ff62",
  measurementId: "G-VWDZ6EQM8T"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
