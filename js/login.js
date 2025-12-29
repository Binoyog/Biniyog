import { db } from "./firebase.js";
import { doc, getDoc } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

document.getElementById("loginBtn").addEventListener("click", async () => {

  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;

  if(phone === "" || password === ""){
    alert("সব ঘর পূরণ করো");
    return;
  }

  const userRef = doc(db, "users", phone);
  const snap = await getDoc(userRef);

  if(!snap.exists()){
    alert("Account নাই");
    return;
  }

  if(snap.data().password !== password){
    alert("Password ভুল");
    return;
  }

  localStorage.setItem("biniyog_user", phone);
  window.location.href = "dashboard.html";
});
