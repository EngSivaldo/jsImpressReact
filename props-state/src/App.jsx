import { useState } from 'react';
import { DualColorTitle, MemoizedDualColorTitle } from './DualColorTitle';
import './App.css';

function App() {
  // Define um estado chamado titleText com valor inicial 'Novo título da minha página'
  const [titleText, setTitleText] = useState('Novo título da minha página');
  const [booleanState, setBooleanState] = useState(false);
  // Função que será chamada quando o botão for clicado
  const changeTitle = () => {
    // Atualiza o estado titleText adicionando um 'a' ao final do texto atual
    setTitleText(titleText + 'a');
  };
 console.log('componente app se renderizou')
  return (
    <div>
      <input type="checkbox" checked={booleanState} onChange={() => setBooleanState(!booleanState)}/>
      {/* Botão que chama a função changeTitle quando clicado */}
      <button onClick={changeTitle}>mudar texto</button>
      {/* Componente DualColorTitle que recebe titleText como prop */}
      <MemoizedDualColorTitle title={titleText} />
    </div>
  );
}

export default App;



// Este código cria um componente React que exibe um botão e um título. Quando o botão é clicado, a função changeTitle é chamada, que adiciona um 'a' ao final do texto do título e atualiza o estado. O componente DualColorTitle recebe o texto atualizado como uma prop e o exibe