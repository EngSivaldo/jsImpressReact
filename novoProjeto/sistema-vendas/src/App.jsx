import React, { useState, useEffect } from 'react';
import ProductManagement from './components/ProductManagement';
import CustomerManagement from './components/CustomerManagement';
import FinanceManagement from './components/FinanceManagement';
import SalesManagement from './components/SalesManagement';
import Login from './components/Login';
import './App.css';

const loadFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const App = () => {
  const [products, setProducts] = useState(loadFromLocalStorage('products'));
  const [customers, setCustomers] = useState(loadFromLocalStorage('customers'));
  const [finances, setFinances] = useState(loadFromLocalStorage('finances'));
  const [sales, setSales] = useState(loadFromLocalStorage('sales'));
  const [user, setUser] = useState(null);
  const [activeSection, setActiveSection] = useState('products');

  useEffect(() => {
    saveToLocalStorage('products', products);
  }, [products]);

  useEffect(() => {
    saveToLocalStorage('customers', customers);
  }, [customers]);

  useEffect(() => {
    saveToLocalStorage('finances', finances);
  }, [finances]);

  useEffect(() => {
    saveToLocalStorage('sales', sales);
  }, [sales]);

  const handleLogin = (user) => {
    setUser(user);
  };

  return (
    <div className="app-container">
      <h1>Auto Center Fernandes</h1>
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <nav>
            <button onClick={() => setActiveSection('products')}>Produtos</button>
            <button onClick={() => setActiveSection('customers')}>Clientes</button>
            <button onClick={() => setActiveSection('sales')}>Vendas</button>
            {user.role === 'admin' && (
              <button onClick={() => setActiveSection('finances')}>Finanças</button>
            )}
          </nav>
          {activeSection === 'products' && (
            <ProductManagement products={products} setProducts={setProducts} />
          )}
          {activeSection === 'customers' && (
            <CustomerManagement customers={customers} setCustomers={setCustomers} />
          )}
          {activeSection === 'sales' && (
            <SalesManagement products={products} setProducts={setProducts} sales={sales} setSales={setSales} />
          )}
          {activeSection === 'finances' && user.role === 'admin' && (
            <FinanceManagement finances={finances} setFinances={setFinances} />
          )}
        </>
      )}
    </div>
  );
};

export default App;