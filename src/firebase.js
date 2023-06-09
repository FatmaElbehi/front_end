// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5UZfNTwH0WHVLQIlJRp2iHB2xh-piKss",
  authDomain: "testgpt-77b19.firebaseapp.com",
  projectId: "testgpt-77b19",
  storageBucket: "testgpt-77b19.appspot.com",
  messagingSenderId: "200920224939",
  appId: "1:200920224939:web:0722d0e5d8e16568d8d3ee",
  measurementId: "G-W3R6XQ8R5P"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage=getStorage();
export const db = getFirestore()