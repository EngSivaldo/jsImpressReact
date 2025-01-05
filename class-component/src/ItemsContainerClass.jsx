import React, { Component } from 'react';
import TaskItem from './TaskItem';

class ItemsContainerClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  handleCheckboxChange = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    const { taskList, removeFromList } = this.props;
    const { checked } = this.state;

    return (
      <div className='items-container'>
        <input
          type='checkbox'
          name='border-bottom'
          id='border-btn'
          checked={checked}
          onChange={this.handleCheckboxChange} // Certifique-se de usar onChange aqui
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
  }
}

export default ItemsContainerClass;