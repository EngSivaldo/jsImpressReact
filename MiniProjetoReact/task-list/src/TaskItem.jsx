// Define o componente funcional TaskItem que recebe duas props: task e removeFromList
const TaskItem = ({ task, removeFromList, showBorderBottom}) => {
  // Retorna um contêiner div que representa um item de tarefa
  return (
    <div className={`task-item ${showBorderBottom ? "bottom-border" : ''}`}>
      {/* Exibe a tarefa em um parágrafo */}
      <p>{task}</p>
      {/* Botão para remover a tarefa da lista */}
      <button onClick={() => removeFromList(task)}>Apagar</button>
    </div>
  );
};

// Exporta o componente TaskItem como padrão
export default TaskItem;



// Este componente representa um item individual da lista de tarefas. Ele exibe a tarefa e inclui um botão que, quando clicado, chama a função removeFromList passando a tarefa como argumento para removê-la da lista