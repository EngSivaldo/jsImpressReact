const AddItemsContainer = ({ addToList }) => {
  let newTask = '';
  return (
  <div className="add-items-container">
    <input 
    type="text"
     onChange={(evt) => {
     newTask =  evt.target.value}}/>
    <button onClick={() =>addToList(newTask)}>Adicionar</button>
  </div>
  )
};

export default AddItemsContainer;