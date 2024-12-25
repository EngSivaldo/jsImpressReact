import { useState } from 'react';
import { Subtitulo } from './subtitulo.jsx'
import './App.css';

function App() {
  const [numeroAleatorio, alternarNumeroAleatorio] = useState(Math.random());
  const numero = 27;
  const numero2 = 27 / 3;

  function trocarNumeroAleatorio() {
    alternarNumeroAleatorio(Math.random());
  }

  return (
    <div>
      <h1>Meu primeiro título com o React {numeroAleatorio}</h1>
      <Subtitulo autor={"Sivaldo Vieira"} idade={27} altura={'177cm'}/>
      <button onClick={trocarNumeroAleatorio}>Novo Número Aleatório</button>
    </div>
  );
}

export default App;