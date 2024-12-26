// Importa o componente StrictMode da biblioteca React
import { StrictMode } from 'react';
// Importa a função createRoot da biblioteca react-dom/client
import { createRoot } from 'react-dom/client';
// Importa o arquivo de estilos CSS
import './index.css';
// Importa o componente App
import App from './App.jsx';

// Cria a raiz do React e renderiza o componente App dentro do StrictMode
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);