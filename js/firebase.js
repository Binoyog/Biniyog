import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBFsTzlRPoWHVXEHbKrPdwxslxZGa7Kqfw",
  authDomain: "biniyog-95d00.firebaseapp.com",
  projectId: "biniyog-95d00",
  storageBucket: "biniyog-95d00.appspot.com",
  messagingSenderId: "523238228802",
  appId: "1:523238228802:web:a65183bdc4c268f94efedb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
