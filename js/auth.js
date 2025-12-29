import { db } from "./firebase.js";
import {
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.signup = async () => {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const pass = document.getElementById("password").value;
  const repass = document.getElementById("repassword").value;

  if (!name || !phone || !pass || !repass) {
    alert("All fields required");
    return;
  }

  if (pass !== repass) {
    alert("Password not match");
    return;
  }

  const ref = doc(db, "users", phone);
  const snap = await getDoc(ref);

  if (snap.exists()) {
    alert("User already exists");
    return;
  }

  await setDoc(ref, {
    name,
    phone,
    password: pass,
    balance: 100
  });

  localStorage.setItem("user", phone);
  window.location.href = "dashboard.html";
};
