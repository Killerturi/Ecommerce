import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArfVM4moRxsuqkQ7lYQzhzNiVuH5lY6uE",
  authDomain: "proj1-81c66.firebaseapp.com",
  projectId: "proj1-81c66",
  storageBucket: "proj1-81c66.appspot.com",
  messagingSenderId: "133865354285",
  appId: "1:133865354285:web:68dfebbabb11c5244334a4",
  measurementId: "G-XD7NRY0JZC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
