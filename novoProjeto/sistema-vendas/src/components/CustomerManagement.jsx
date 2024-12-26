import React, { useState } from 'react';

const CustomerManagement = ({ customers, setCustomers }) => {
  const [newCustomer, setNewCustomer] = useState({ name: '', cpf: '', email: '', contact: '', address: '' });

  const addCustomer = () => {
    setCustomers([...customers, newCustomer]);
    setNewCustomer({ name: '', cpf: '', email: '', contact: '', address: '' });
  };

  const removeCustomer = (cpf) => {
    setCustomers(customers.filter(customer => customer.cpf !== cpf));
  };

  return (
    <div className="add-items-container">
      <h2>Gestão de Clientes</h2>
      <input
        type="text"
        placeholder="Nome"
        value={newCustomer.name}
        onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="CPF"
        value={newCustomer.cpf}
        onChange={(e) => setNewCustomer({ ...newCustomer, cpf: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newCustomer.email}
        onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Contato"
        value={newCustomer.contact}
        onChange={(e) => setNewCustomer({ ...newCustomer, contact: e.target.value })}
      />
      <input
        type="text"
        placeholder="Endereço"
        value={newCustomer.address}
        onChange={(e) => setNewCustomer({ ...newCustomer, address: e.target.value })}
      />
      <button onClick={addCustomer}>Adicionar Cliente</button>
      <ul className="itemsContainer">
        {customers.map(customer => (
          <li key={customer.cpf} className="task-item">
            <p>{customer.name} - {customer.cpf} - {customer.email}</p>
            <button onClick={() => removeCustomer(customer.cpf)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerManagement;