
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyB4Ph3udfYysyPPdj3x6lXnwMQ6dxZmxY4",
  authDomain: "coder55185.firebaseapp.com",
  projectId: "coder55185",
  storageBucket: "coder55185.appspot.com",
  messagingSenderId: "167899946213",
  appId: "1:167899946213:web:95713aa9bde5d3652f080c"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
