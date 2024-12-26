const TaskItem = ({ task,removeFromList }) => {
  return (

    <div className="task-item">
      <p>{task}</p>
      <button onClick={() => removeFromList(task)}>Apagar</button>
    </div>
  )
  
};


export default TaskItem;