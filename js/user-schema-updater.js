// js/user-schema-updater.js
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const db = getFirestore();

// Generate a random refCode (for demo, can adjust logic)
function generateRefCode(length = 6) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for(let i=0; i<length; i++){
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

/**
 * Call this function with user UID after login
 * Example:
 * import { ensureUserFields } from './js/user-schema-updater.js';
 * ensureUserFields(user.uid);
 */
export async function ensureUserFields(uid){
  if(!uid) return;
  const ref = doc(db,"users",uid);
  const snap = await getDoc(ref);
  const today = new Date().toISOString().split("T")[0];

  if(!snap.exists()){
    // New user - create all fields
    await setDoc(ref,{
      uid: uid,
      name: "",
      phone: "",
      role: "user",
      balance: 0,
      totalDeposit: 0,
      totalWithdraw: 0,
      depositHistory: [],
      withdrawHistory: [],
      totalRefer: 0,
      refCode: generateRefCode(),
      referCode: null,
      loginStreak: 1,
      lastLoginDate: today,
      createdAt: serverTimestamp()
    });
  } else {
    // Existing user - add missing fields only
    const data = snap.data();
    const updates = {};

    if(data.balance === undefined) updates.balance = 0;
    if(data.totalDeposit === undefined) updates.totalDeposit = 0;
    if(data.totalWithdraw === undefined) updates.totalWithdraw = 0;
    if(data.depositHistory === undefined) updates.depositHistory = [];
    if(data.withdrawHistory === undefined) updates.withdrawHistory = [];
    if(data.totalRefer === undefined) updates.totalRefer = 0;
    if(data.refCode === undefined) updates.refCode = generateRefCode();
    if(data.referCode === undefined) updates.referCode = null;
    if(data.loginStreak === undefined) updates.loginStreak = 1;
    if(data.lastLoginDate === undefined) updates.lastLoginDate = today;
    if(data.name === undefined) updates.name = "";
    if(data.phone === undefined) updates.phone = "";
    if(data.role === undefined) updates.role = "user";
    if(data.createdAt === undefined) updates.createdAt = serverTimestamp();

    if(Object.keys(updates).length > 0){
      await updateDoc(ref, updates);
    }
  }
}
