const TaskItem = ({ task, removeFromList, showBorderBottom }) => {
  return (
    <div className={`task-item ${showBorderBottom ? 'bottom-border' : ''}`}>
      <p>{task}</p>
      <button onClick={() => removeFromList(task)}>Apagar</button>
    </div>
  );
};

export default TaskItem;