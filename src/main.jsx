import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter } from 'react-router-dom';
import { StoreContextProvider } from './context/StoreContext.jsx';
import axios from 'axios';

axios.interceptors.request.use((config) => {
  if (config.url.startsWith("http://localhost:8080")) {
    config.url = config.url.replace(
      "http://localhost:8080",
      "https://foodies-backend-e6v6.onrender.com"
    );
  }
  return config;
});

axios.defaults.baseURL = "https://foodies-backend-e6v6.onrender.com";
axios.defaults.headers.common["Content-Type"] = "application/json";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
)
