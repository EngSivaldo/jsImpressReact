import { useContext } from "react";
import { colorContext } from "./App";

const TextComponent = ({ children }) => {
  const { color } = useContext(colorContext);
  return (
    <i className="text-component" style={{ color: color, fontWeight: "bold" }}>
      {children}
    </i>
  );
};

export default TextComponent;