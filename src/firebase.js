import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmxHxTw5lMdzW51BYfgCfx6zO7ARlkxE8",
  authDomain: "chatterbox-6e67e.firebaseapp.com",
  projectId: "chatterbox-6e67e",
  storageBucket: "chatterbox-6e67e.appspot.com",
  messagingSenderId: "593008929073",
  appId: "1:593008929073:web:927de78bed4e639a74a810",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
