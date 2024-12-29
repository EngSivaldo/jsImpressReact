import "./App.css";
import IntermediateComponent from "./IntermediateComponent";
import UselessComponent from "./UselessComponent";

function App() {
  const backgroundColor = "red";
  return (
    <div>
      <input type="text" />
      {/* <IntermediateComponent title={"Olá, impressionador!"} value={27}>
        <i>Novo valor informado</i>
      </IntermediateComponent> */}
      <UselessComponent backgroundColor={backgroundColor}>
        <i>Novo valor informado</i>
      </UselessComponent>
      <input type="checkbox" />
    </div>
  );
}

export default App;
