import "./App.css";
import React from "react";
import Card from "./Componentes/Cards/Card.jsx";
import axios from "axios";
import Carrito from "./Componentes/Carrito/Carrito.jsx";

axios.defaults.baseURL = "https://prueba-mercadopago-production.up.railway.app";
/*
axios.defaults.baseURL = "http://localhost:3001";*/

function App() {
  return (
    <div className="App">
      <Carrito></Carrito>
      <Card></Card>
    </div>
  );
}

export default App;
