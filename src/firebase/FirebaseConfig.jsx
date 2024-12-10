import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp7l0xom9dplWMELOdHDfJYTOdHK2LjPQ",
  authDomain: "my-ecommerce-53b6c.firebaseapp.com",
  projectId: "my-ecommerce-53b6c",
  storageBucket: "my-ecommerce-53b6c.firebasestorage.app",
  messagingSenderId: "599293860080",
  appId: "1:599293860080:web:1335b6e3ad706019fe0a35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app)
const auth = getAuth(app)

export {fireDB,auth}
