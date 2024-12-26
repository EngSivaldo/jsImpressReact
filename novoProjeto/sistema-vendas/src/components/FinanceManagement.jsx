import React, { useState } from 'react';

const FinanceManagement = ({ finances, setFinances }) => {
  const [newExpense, setNewExpense] = useState({ type: '', amount: 0 });

  const addExpense = () => {
    setFinances([...finances, newExpense]);
    setNewExpense({ type: '', amount: 0 });
  };

  const removeExpense = (index) => {
    setFinances(finances.filter((_, i) => i !== index));
  };

  const calculateTotal = (type) => {
    return finances
      .filter(expense => expense.type === type)
      .reduce((total, expense) => total + expense.amount, 0);
  };

  return (
    <div className="add-items-container">
      <h2>Gestão Financeira</h2>
      <input
        type="text"
        placeholder="Tipo de Gasto (Funcionários, Energia, Água, etc.)"
        value={newExpense.type}
        onChange={(e) => setNewExpense({ ...newExpense, type: e.target.value })}
      />
      <input
        type="number"
        placeholder="Valor (R$)"
        value={newExpense.amount}
        onChange={(e) => setNewExpense({ ...newExpense, amount: parseFloat(e.target.value) })}
      />
      <button onClick={addExpense}>Adicionar Gasto</button>
      <ul className="itemsContainer">
        {finances.map((expense, index) => (
          <li key={index} className="task-item">
            <p>{expense.type} - R${expense.amount}</p>
            <button onClick={() => removeExpense(index)}>Remover</button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Total de Gastos</h3>
        <p>Funcionários: R${calculateTotal('Funcionários')}</p>
        <p>Energia: R${calculateTotal('Energia')}</p>
        <p>Água: R${calculateTotal('Água')}</p>
        <p>Outros: R${calculateTotal('Outros')}</p>
      </div>
    </div>
  );
};

export default FinanceManagement;