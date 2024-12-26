import ItemsContainer from './itemsContainer';
import './App.css'

function App() {

  return (
   <div>
       <h1>Minha lista de tarefas do dia</h1>   
       <ItemsContainer taskList={['Lavar roupa', 'Ir ao mercado']}/>
   </div>
  )
   
  
}

export default App
//componente base