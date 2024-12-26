import TaskItem from "./TaskItem";

const ItemsContainer = ({ taskList, removeFromList }) => {

  return (
   <div className="itemsContainer ">
     {taskList.map((t) => (
      <TaskItem task={t} removeFromList={removeFromList}/>))}
   </div>
   )
}


export default ItemsContainer;
//É invocado no app.jsx