import React from "react";
import Simulador from "../components/Simulador";
import "../App.css";

function TelaInicial() {
  return (
    <div>
      <header>
        <h1 className="title">Simulador de investimento</h1>
      </header>
      <Simulador />
    </div>
  );
}

export default TelaInicial;
