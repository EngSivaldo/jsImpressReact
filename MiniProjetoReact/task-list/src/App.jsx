import { useState, useEffect } from 'react';
import ItemsContainer from './itemsContainer';
import AddItemsContainer from './AddItemsContainer';
import './App.css';

function App() {
  const loadTasksFromLocalStorage = () => {
    const savedTasks = localStorage.getItem('taskList');
    return savedTasks ? JSON.parse(savedTasks) : [];
  };

  const [taskList, setTaskList] = useState(loadTasksFromLocalStorage());

  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('taskList', JSON.stringify(tasks));
  };

  useEffect(() => {
    saveTasksToLocalStorage(taskList);
  }, [taskList]);

  const removeFromList = (item) => {
    const newList = taskList.filter(task => task !== item);
    setTaskList(newList);
  };

  const addToList = (item) => {
    setTaskList([...taskList, item]);
  };

  return (
    <div className="app-container">
      <h1>Minha lista de tarefas do dia</h1>
      <AddItemsContainer addToList={addToList} />
      <ItemsContainer taskList={taskList} removeFromList={removeFromList} />
    </div>
  );
}

export default App;