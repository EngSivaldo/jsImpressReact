import { useState } from "react";
import "./App.css";
import FirstWrapper from "./FirstWrapper";
import TextComponent from "./TextComponent";

function App() {
  const [color, setColor] = useState("blue");

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <TextComponent color={color}>Daniel do JavaScript Impressionador</TextComponent>
      <FirstWrapper setColor={setColor} />
    </div>
  );
}

export default App;