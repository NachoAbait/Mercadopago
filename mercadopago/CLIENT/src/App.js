import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { createOrder } from "./Actions/createOrder";
import React, { useEffect } from "react";
import { cleanOrder } from "./Actions/cleanOrden";

function App() {
  const dispatch = useDispatch();

  const init_endpoint = useSelector((state) => state.init_endpoint);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(cleanOrder());
    console.log("este es el init-endpoint en handle");
    console.log(init_endpoint);

    dispatch(createOrder());
    console.log("Estoy en el handle, se acaba de mandar la acción");
    console.log(init_endpoint);
  };

  useEffect(() => {
    if (init_endpoint.length) {
      console.log("Redirigiendo a la URL:", init_endpoint);
      window.location.href = init_endpoint;
    }
  }, [init_endpoint]);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>PAGAR</button>
      </header>
    </div>
  );
}

export default App;
