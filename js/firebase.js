// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* 🔥 তোমার Firebase Config (এটা Firebase Console থেকে কপি করো) */
const firebaseConfig = {
  apiKey: "AIzaSyBFsTzlRPoWHVXEHbKrPdwxslxZGa7Kqfw",
  authDomain: "biniyog-95d00.firebaseapp.com",
  projectId: "biniyog-95d00",
  storageBucket: "biniyog-95d00.appspot.com",
  messagingSenderId: "523238228802",
  appId: "1:523238228802:web:a65183bdc4c268f94efedb"
};

/* 🚀 Firebase Initialize (একবারই হবে) */
export const app = initializeApp(firebaseConfig);

/* 🔐 Auth & 🔥 Firestore Export */
export const auth = getAuth(app);
export const db = getFirestore(app);
