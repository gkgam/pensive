// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const app=initializeApp(Firebaseconfig);
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMGnb4jaYZ1n2ZK60DQ6LDPqL2onqwWYI",
  authDomain: "pensive-fcc0b.firebaseapp.com",
  projectId: "pensive-fcc0b",
  storageBucket: "pensive-fcc0b.appspot.com",
  messagingSenderId: "504416248092",
  appId: "1:504416248092:web:0bfb3aecbef33f7aaf1ad9",
  measurementId: "G-9KKYWRD9SD"
};
export const auth=geetauth(app);
export const db=getFirestore(app);

