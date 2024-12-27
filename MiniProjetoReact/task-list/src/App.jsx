import { useState, useEffect } from 'react';
import ItemsContainer from './itemsContainer';
import AddItemsContainer from './AddItemsContainer';
import './App.css';

function App() {
  // Função para carregar tarefas do Local Storage
  const loadTasksFromLocalStorage = () => {
    const savedTasks = localStorage.getItem('taskList');
    return savedTasks ? JSON.parse(savedTasks) : [];
  };

  // Estado para armazenar a lista de tarefas
  const [taskList, setTaskList] = useState(loadTasksFromLocalStorage());

  // Função para salvar tarefas no Local Storage
  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('taskList', JSON.stringify(tasks));
  };

  // Efeito para salvar a lista de tarefas no Local Storage sempre que ela mudar
  useEffect(() => {
    saveTasksToLocalStorage(taskList);
  }, [taskList]);

  // Função para remover uma tarefa da lista
  const removeFromList = (item) => {
    const newList = taskList.filter(task => task !== item);
    setTaskList(newList);
  };

  // Função para adicionar uma nova tarefa à lista
  const addToList = (item) => {
    setTaskList([...taskList, item]);
  };

  return (
    <div className="app-container">
      <h1>Minha lista de tarefas do dia</h1>
      {/* Componente para adicionar novas tarefas */}
      <AddItemsContainer addToList={addToList} />
      {/* Componente para exibir a lista de tarefas */}
      <ItemsContainer taskList={taskList} removeFromList={removeFromList} />
    </div>
  );
}

export default App;