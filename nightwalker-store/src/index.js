import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCcTukZ8V6kAfmY6Ul45izwLgTMsS0zCyw",
  authDomain: "nightwalker-store.firebaseapp.com",
  projectId: "nightwalker-store",
  storageBucket: "nightwalker-store.appspot.com",
  messagingSenderId: "702155068829",
  appId: "1:702155068829:web:b1e86d5ee5ad6830a70b74",
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
