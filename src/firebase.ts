import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfJwIHi45_hBjUqH-q9MPlRgzml4GED8U",
  authDomain: "nwitter-reloaded-aadf6.firebaseapp.com",
  projectId: "nwitter-reloaded-aadf6",
  storageBucket: "nwitter-reloaded-aadf6.appspot.com",
  messagingSenderId: "357952013142",
  appId: "1:357952013142:web:889722660a33dfb13d8cf7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
