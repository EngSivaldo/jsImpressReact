import { useState, createContext } from "react";
import "./App.css";
import FirstWrapper from "./FirstWrapper";
import TextComponent from "./TextComponent";

export const colorContext = createContext(null);

function App() {
  const [color, setColor] = useState("blue");

  return (
    <colorContext.Provider value={{ color, setColor }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <TextComponent>Daniel do JavaScript Impressionador</TextComponent>
        <FirstWrapper />
      </div>
    </colorContext.Provider>
  );
}

export default App;





// O colorContext é usado para fornecer o estado color e a função setColor para todos os componentes que precisam deles. O TextComponent usa o contexto para obter a cor atual e aplicá-la ao estilo do texto, enquanto o ColorSelection usa o contexto para atualizar a cor quando um quadrado é clicado