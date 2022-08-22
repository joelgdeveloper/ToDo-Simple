import { useState } from 'react'
import Tarea from './componentes/Tarea';
import TareaForm from './componentes/TareaForm';
import './styles/app.css';

function App() {
  const [listaTareas, setlistaTareas] = useState([]);

  const nuevaTarea = (tarea) => {
    
    setlistaTareas([tarea, ...listaTareas]);
  }
  
  return (
    <div className="App">
      <TareaForm nuevaTarea={nuevaTarea} /> 
      {
        listaTareas.map( (tarea,i) => (
          <Tarea key={i} tarea={tarea} />
        ))
      }
    </div>
  )
}

export default App
