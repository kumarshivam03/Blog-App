// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import dotenv from "dotenv";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// dotenv.config();

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "blog-app-b3096.firebaseapp.com",
  projectId: "blog-app-b3096",
  storageBucket: "blog-app-b3096.appspot.com",
  messagingSenderId: "875061797575",
  appId: "1:875061797575:web:72cf585843f759cb4694e2",
  measurementId: "G-YZX10VWQHW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
