import { useState, createContext } from "react";
import "./App.css";
import FirstWrapper from "./FirstWrapper";
import TextComponent from "./TextComponent";

function App() {
  const [color, setColor] = useState("blue");
  const colorContext = createContext(null);

  return (
    <colorContext.Provider value={{
      color,
      setColor,
    }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <TextComponent color={color}>Daniel do JavaScript Impressionador</TextComponent>
        <FirstWrapper setColor={setColor} />
      </div>
    </colorContext.Provider>
    );
}
  
    
   

export default App;