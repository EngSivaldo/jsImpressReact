import { useState } from 'react';
import ItemsContainer from './itemsContainer';
import './App.css';

function App() {
  const [taskList, setTaskList] = useState(['Lavar roupas', 'Ir ao Mercado']);
  const removeFromList = (item) => {
    const newList = [...taskList];
    const itemIndex = newList.indexOf(item);
    newList.splice(itemIndex, 1);
    setTaskList(newList);

  }
  return (
    <div>
      <h1>Minha lista de tarefas do dia</h1>
      <h2>Adição de tarefas</h2>
      <ItemsContainer taskList={taskList} removeFromList={removeFromList} />
    </div>
  );
};

export default App;