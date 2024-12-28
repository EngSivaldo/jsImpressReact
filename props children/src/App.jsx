import './App.css';
import IntermediateComponent from './IntermediateComponent';

function App() {
  // console.log('app renderizou');
  return (
    <div>
      <input type='text' />
      <IntermediateComponent title={'Olá, impressionador!'} value={27}>
        <i>Novo valor informado</i>
      </IntermediateComponent>
      <input type='checkbox' />
    </div>
  );
}

export default App;
