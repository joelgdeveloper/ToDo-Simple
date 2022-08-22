import { useState } from 'react'
import Tarea from './componentes/Tarea';
import TareaForm from './componentes/TareaForm';
import './styles/app.css';

function App() {
  const [listaTareas, setlistaTareas] = useState([]);

  const nuevaTarea = (tarea) => {
    setlistaTareas([tarea, ...listaTareas]);
  }

  const deleteTask = (id) => {
    const filterTask = listaTareas.filter((task, index) => (index !== id));
    setlistaTareas(filterTask);
  }

  const taskEdit = (id, tarea) => {
    const listUpdate = listaTareas.map((task, index) => {
      if (index == id) {
        task = tarea;
      }
      return task;
    })

    setlistaTareas(listUpdate);
  }

  return (
    <div className="App">
      <TareaForm nuevaTarea={nuevaTarea} />
      {
        listaTareas.map((tarea, index) => (
          <Tarea key={index} tarea={tarea} deleteTask={deleteTask} id={index} taskEdit={taskEdit} />
        ))
      }
    </div>
  )
}

export default App
