import { useState } from 'react';
import DualColorTitle from './DualColorTitle';
import './App.css';

function App() {
  // Define um estado chamado titleText com valor inicial 'Novo título da minha página'
  const [titleText, setTitleText] = useState('Novo título da minha página');

  // Função que será chamada quando o botão for clicado
  const changeTitle = () => {
    console.log('Fui executada!');
    console.log('O valor atual de titleText é: ', titleText);
    // Atualiza o estado titleText adicionando um 'a' ao final do texto atual
    setTitleText(titleText + 'a');
  };

  return (
    <div>
      {/* Botão que chama a função changeTitle quando clicado */}
      <button onClick={changeTitle}>mudar texto</button>
      {/* Componente DualColorTitle que recebe titleText como prop */}
      <DualColorTitle title={titleText} />
    </div>
  );
}

export default App;



// Este código cria um componente React que exibe um botão e um título. Quando o botão é clicado, a função changeTitle é chamada, que adiciona um 'a' ao final do texto do título e atualiza o estado. O componente DualColorTitle recebe o texto atualizado como uma prop e o exibe