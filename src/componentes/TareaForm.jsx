import React,{ useState } from 'react'

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
    <div>
      <form action="" className='form' onSubmit={handleSubmit}>
        <span>Añadir Tarea</span>
        <input type="text" value={inputText} onChange={handleForm}/>
        <button>Añadir</button>
      </form>
      {
        !validation && <div className='validacion'>Añada una tarea por favor</div>
      }
    </div>
  )
}

export default TareaForm;