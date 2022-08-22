import React, { useState } from 'react'
import '../styles/app.css';

const Tarea = ({ tarea, deleteTask, id, taskEdit }) => {
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState("");

  const editTask = () => {
    setEditMode(!editMode);
  }

  const selectTask = () => {
    deleteTask(id);
  }

  const handleEdit = (e) => {

    setEditText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    taskEdit(id, editText);
    setEditText("");
    setEditMode(!editMode);
  }

  return (

    <div className='container-task'>
      {
        editMode && (
          <form className='editForm' onSubmit={handleSubmit}>
            <input type="text" value={editText} onChange={handleEdit} />
            <button>Guardar</button>
          </form>
        )
      }
      <div className='container-content'>
        <div className="tarea">
          <span>{tarea}</span>
        </div>
        <div className='botones'>
          <span onClick={editTask}>Editar</span>
          <span onClick={selectTask}>Borrar</span>
        </div>
      </div>
    </div>
  )
}

export default Tarea;