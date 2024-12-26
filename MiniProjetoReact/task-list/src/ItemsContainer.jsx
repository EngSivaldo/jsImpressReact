import TaskItem from "./TaskItem";

const ItemsContainer = ({ taskList }) => {

  return (
   <div>
     {taskList.map((t) => (
      <TaskItem task={t} />))}
   </div>
   )
}


export default ItemsContainer;
//É invocado no app.jsx