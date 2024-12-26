import { useState } from 'react';

const AddItemsContainer = ({ addToList }) => {
  // Declara um estado para armazenar a nova tarefa
  const [newTask, setNewTask] = useState('');

  return (
    <div className="add-items-container">
      {/* Campo de entrada de texto para digitar a nova tarefa */}
      <input 
        type="text"
        value={newTask}
        onChange={(evt) => {
          // Atualiza o estado newTask com o valor do campo de entrada
          setNewTask(evt.target.value);
        }}
      />
      {/* Botão para adicionar a nova tarefa à lista */}
      <button onClick={() => {
        // Verifica se newTask não está vazia
        if (newTask !== '') {
          // Chama a função addToList passando newTask como argumento
          addToList(newTask);
          // Limpa o campo de entrada após adicionar a tarefa
          setNewTask('');
        }
      }}>
        Adicionar
      </button>
    </div>
  );
};

export default AddItemsContainer;