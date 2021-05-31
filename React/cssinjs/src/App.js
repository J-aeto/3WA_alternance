import "./App.css";
import { appHeader, centralPanelStyle } from "./styles";
import styled from "styled-components";
import { Square, Square2 } from "./components/Square";
import { useState } from "react";

// Pour rappel: l'attribut 'style' permet en React de faire du style inline
// On lui donne comme valeur un objet JS représentant le style à appliquer

// La modification inline de l'objet de style est ici seulement
// pour illustrer la manière de faire immutable.

// Creation de div stylisée avec styled-components
const Footer = styled.div`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  fontSize: calc(10px + 2vmin);
  color: white;
`;

// Autre exemple de div
const Title = styled.div`
  font-size 1.2em;
  font-weight: bold;
  margin: 5px;
  color: red;
`;

// On peut hériter du style d'un autre styled component, et l'étendre ou le modifier
const BlueTitle = styled(Title)`
  color: rgb(57, 180, 211);
`;

// On peut accéder aux props et faire en sorte que le style crée le soit dynamiquement
const Description = styled.div`
  font-size: 0.8em;
  font-weight: ${(props) => (props.important ? "bold" : "normal")};
  margin: 10px;
`;

// On pourra avoir comme base, autre chose que des div
const Button = styled.button`
  color: #ff3333;
  &:hover {
    color: #0080ff;
  }
  margin 5px;
`;

/*
Créer un style pour un composant React pré-existant:
const newSquare = styled(Square2)`
  color: rbg(50,50,50)
  width: 100px;
  height: 100px;
`;
*/

const deltaValue = 30;
const affectColor = (color, v) => Math.min(Math.max(color + v, 0), 255)
const colorHandler = (setter, v) =>
  setter((previousState) => affectColor(previousState, v));

function App() {
  const [r, setR] = useState(100)
  const [g, setG] = useState(0)
  const [b, setB] = useState(0)
  return (
    <div className="App">
      <header style={appHeader}>
        <Title>CSS in JS, différentes approches</Title>
        <BlueTitle>
          (et petit a petit allez vers la gestion d'état complexes...)
        </BlueTitle>
      </header>
      <div style={{ ...centralPanelStyle, margin: "10vh" }}>
        <Description important>Personalisation RGB</Description>
        <Description>
          Vous pouvez ici ajuster les valeur RGB de la couleur principale de votre thème
        </Description>
        <div>
          <Button onClick={() => colorHandler(setR, +deltaValue)}>+ rouge</Button>
          <Button onClick={() => colorHandler(setR, -deltaValue)}>- rouge</Button>
        </div>
        <div>
          <Button onClick={() => colorHandler(setG, +deltaValue)}>+ Vert</Button>
          <Button onClick={() => colorHandler(setG, -deltaValue)}>- Vert</Button>
        </div>
        <div>
          <Button onClick={() => colorHandler(setB, +deltaValue)}>+ Bleu</Button>
          <Button onClick={() => colorHandler(setB, -deltaValue)}>- Bleu</Button>
        </div>
        <div>
          <Button onClick={() => {
            colorHandler(setR, +deltaValue);
            colorHandler(setG, +deltaValue);
            colorHandler(setB, +deltaValue)
          }}>+ Luminosité</Button>
          <Button onClick={() => {
            colorHandler(setR, -deltaValue);
            colorHandler(setG, -deltaValue);
            colorHandler(setB, -deltaValue)
          }}>- Luminosité</Button>
        </div>
        <Square red={r} green={g} blue={b}></Square>
        <p>valeur de rouge: {r}</p>
        <p>valeur de vert: {g}</p>
        <p>valeur de bleu: {b}</p>
      </div>
      <Footer></Footer>
    </div >
  );
}

export default App;
