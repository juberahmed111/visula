// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuM-5X6LguE7IxrcPDq3j8jx_Eyj5JS7I",
  authDomain: "tourist-booker.firebaseapp.com",
  projectId: "tourist-booker",
  storageBucket: "tourist-booker.appspot.com",
  messagingSenderId: "933999134672",
  appId: "1:933999134672:web:23266a44cd60da06c61bd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;