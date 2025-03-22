// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmBX0HWy5p61wYBQiGaMlGTg8J_doa900",
  authDomain: "react-native-todo-app-ba36d.firebaseapp.com",
  projectId: "react-native-todo-app-ba36d",
  storageBucket: "react-native-todo-app-ba36d.firebasestorage.app",
  messagingSenderId: "92145270630",
  appId: "1:92145270630:web:0bd958b738f9444b6092a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;