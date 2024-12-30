import { useState } from "react";
// Importa o componente TaskItem do arquivo "./TaskItem"
import TaskItem from "./TaskItem";

// Define o componente funcional ItemsContainer que recebe duas props: taskList e removeFromList
const ItemsContainer = ({ taskList, removeFromList }) => {
  const [checked, setChecked] = useState(false);
  // Retorna um contêiner div que contém uma lista de TaskItem
  return (
    <div className="itemsContainer">
      <input type="checkbox" name="border-bottom" id="border-btn" checked={checked} onClick={() => setChecked(!checked)}/>
      <label htmlFor="border-bottom">Habiltar linhas</label>
      {/* Mapeia cada item da taskList para um componente TaskItem */}
      {taskList.map((t, idx) => (
        // Passa a tarefa e a função removeFromList como props para cada TaskItem
        // Define uma chave única para cada TaskItem usando o índice do item na lista
        <TaskItem task={t} removeFromList={removeFromList} key={`task-item-${idx}`} showBorderBottom={checked}/>
      ))}
    </div>
  );
}

// Exporta o componente ItemsContainer como padrão
export default ItemsContainer;


// Este componente é invocado no app.jsx para renderizar uma lista de tarefas (taskList). Cada tarefa é passada para um componente TaskItem, que também recebe a função removeFromList para permitir a remoção de itens da lista.