import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6_b7cRZ4nlhzDiGHwYhFw57SlEUY6Kvs",
  authDomain: "coderhouse-5444b.firebaseapp.com",
  projectId: "coderhouse-5444b",
  storageBucket: "coderhouse-5444b.appspot.com",
  messagingSenderId: "982059984867",
  appId: "1:982059984867:web:30bc7ada2d2d8acd52a2d6",
  measurementId: "G-RT295QKB55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
