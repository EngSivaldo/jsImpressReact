import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulação de autenticação
    if (username === 'admin' && password === 'admin') {
      onLogin({ username, role: 'admin' });
    } else if (username === 'funcionario' && password === 'funcionario') {
      onLogin({ username, role: 'funcionario' });
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <div className="add-items-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default Login;