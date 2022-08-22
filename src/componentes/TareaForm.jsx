import React,{ useState } from 'react'
import '../styles/app.css';

const TareaForm = ({nuevaTarea}) => {
  const [inputText,setInputText] = useState("");
  const [validation, setValidation] = useState(true);

  const handleForm = (e) => {
    setInputText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(inputText.trim() !== "") {
      nuevaTarea(inputText);
      setInputText("");
      setValidation(true);
    }else {
      setValidation(false);
    }

  }

  return (
    <div className='container-form'>
      <form action="" className='form' onSubmit={handleSubmit}>
        <span>Añadir Tarea</span>
        <div className='container-search'>
          <input type="text" value={inputText} onChange={handleForm}/>
          <button>Añadir</button>
        </div>      
      </form>
      {
        !validation && <div className='validacion'>Añada una tarea por favor</div>
      }
    </div>
  )
}

export default TareaForm;