import React from 'react'

const Tarea = ({tarea}) => {
  return (
    <div className='container-tarea'>
      <div className="tarea">
        <span>{tarea}</span>
      </div>
      <div className='botones'>
        <span>Editar</span>
        <span>Borrar</span>
      </div>
    </div>
  )
}

export default Tarea;