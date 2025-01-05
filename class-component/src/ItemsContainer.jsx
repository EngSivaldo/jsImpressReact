import { useState } from 'react';
import TaskItem from './TaskItem';

const ItemsContainer = ({ taskList, removeFromList }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className='items-container'>
      <input
        type='checkbox'
        name='border-bottom'
        id='border-btn'
        checked={checked}
        onChange={handleCheckboxChange} // Certifique-se de usar onChange aqui
      />
      <label htmlFor='border-bottom'>Habilitar Linhas</label>
      {taskList.map((t, idx) => (
        <TaskItem
          task={t}
          removeFromList={removeFromList}
          key={`task-item-${idx}`}
          showBorderBottom={checked}
        />
      ))}
    </div>
  );
};

export default ItemsContainer;