import React, { useState } from "react";
import styled from "styled-components";
import "../App.css";

const Button = styled.button`
  /* Same as above */
`;
const ButtonToggle = styled(Button)`
  opacity: 0.8;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  display: inline-block;
  font-family: nunito, roboto, proxima-nova, "proxima nova", sans-serif;
  font-size: 10px;
  font-weight: 800;
  line-height: 16px;
  min-height: 40px;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: 60px;
  height: 35px;

  ${({ active }) =>
    active &&
    `background-color: #e49258;
    background-position: 0 0;
    color: #000000;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
  wi
`;

const ren = ["Bruto", "Líquido"];
const tip = ["PRÉ", "PÓS", "FIXADO"];

function Simulador() {
  const [activeRen, setActiveRen] = useState(ren[0]);
  const [activeTip, setActiveTip] = useState(tip[0]);
  // const [simulador, setSimulador] = useState(tip[0]);

  return (
    <div>
      <header>
        <h1>Simulador</h1>
      </header>
      <section className="rendimentos">
        <h4>Rendimento</h4>
        <ButtonGroup>
          {ren.map((type) => (
            <ButtonToggle
              key={type}
              active={activeRen === type}
              onClick={() => setActiveRen(type)}
            >
              {type}
            </ButtonToggle>
          ))}
        </ButtonGroup>

        <form>
          <label for="fname">Aporte Inicial</label>
          <br />
          <input type="text" id="fname" name="fname" />
        </form>
        <form>
          <label for="fname">Prazo (em meses)</label>
          <br />
          <input type="text" id="fname" name="fname" />
        </form>
        <form>
          <label for="fname">IPCA (ao ano)</label>
          <br />
          <input type="text" id="fname" name="fname" />
        </form>
        <div>
          <button className="button-24">Limpar campos</button>
        </div>
      </section>

      <section className="rendimentos">
        <h4>Tipos de indexação</h4>
        <ButtonGroup>
          {tip.map((type) => (
            <ButtonToggle
              key={type}
              active={activeTip === type}
              onClick={() => setActiveTip(type)}
            >
              {type}
            </ButtonToggle>
          ))}
        </ButtonGroup>

        <form>
          <label for="fname">Aporte mensal</label>
          <br />
          <input type="text" id="fname" name="fname" />
        </form>
        <form>
          <label for="fname">Rentabilidade</label>
          <br />
          <input type="text" id="fname" name="fname" />
        </form>
        <form>
          <label for="fname">CDI (Ao ano)</label>
          <br />
          <input type="text" id="fname" name="fname" />
        </form>
        <div>
          <button className="button-24">Simular</button>
        </div>
      </section>
    </div>
  );
}

export default Simulador;
