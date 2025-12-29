import { auth, db } from "./firebase.js";
import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  doc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

onAuthStateChanged(auth, user => {
  if (!user) {
    location.href = "index.html";
    return;
  }

  const ref = doc(db, "users", user.uid);

  onSnapshot(ref, snap => {
    if (snap.exists()) {
      username.innerText = snap.data().name;
      balance.innerText = snap.data().balance;
    }
  });
});

window.logout = () => signOut(auth);
