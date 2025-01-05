import { useState } from 'react';
import ItemsContainer from './ItemsContainer';
import ItemsContainerClass from './ItemsContainerClass';
import AddItemsContainer from './AddItemsContainer';
import './App.css';

function App() {
  const [taskList, setTaskList] = useState(['Lavar roupa', 'Ir ao mercado']);

  const removeFromList = (item) => {
    const newList = [...taskList];
    const itemIndex = newList.indexOf(item);
    newList.splice(itemIndex, 1);
    setTaskList(newList);
  };

  const addToList = (item) => {
    setTaskList([...taskList, item]);
  };

  return (
    <div>
      <h1>Minha lista de tarefas do dia</h1>
      <AddItemsContainer addToList={addToList} />
      <ItemsContainer taskList={taskList} removeFromList={removeFromList} />
      <ItemsContainerClass
        taskList={taskList}
        removeFromList={removeFromList}
      />
    </div>
  );
}

export default App;