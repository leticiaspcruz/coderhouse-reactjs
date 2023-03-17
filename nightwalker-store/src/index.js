import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRESTORE_API_KEY,
  authDomain: "nightwalker-store.firebaseapp.com",
  projectId: "nightwalker-store",
  storageBucket: "nightwalker-store.appspot.com",
  messagingSenderId: "702155068829",
  appId: process.env.REACT_APP_FIRESTORE_APP_ID,
  measurementId: "G-T3872E6GHM"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
