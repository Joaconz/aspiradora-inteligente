import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBKJTyV5E6AoHgxdFWPHYj3YCC8bc-eccI",
  authDomain: "aspiradora-inteligente.firebaseapp.com",
  databaseURL: "https://aspiradora-inteligente-default-rtdb.firebaseio.com",
  projectId: "aspiradora-inteligente",
  storageBucket: "aspiradora-inteligente.appspot.com",
  messagingSenderId: "37835802027",
  appId: "1:37835802027:web:06aa14b5b64f9ad167feee",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
