import { useState } from "react";
const useFormulario =(inicial)=>{

    const [formulario, setFormulario] = useState(inicial)
  
  const handleChange = (e) =>{
    setFormulario({
      ...formulario,// copia del formulario
      [e.target.name]: e.target.value //creacion de propiedad dinamica
    })
  }

  const reset =()=>{
    setFormulario(inicial)
  }

  return [formulario, handleChange, reset ]
}
export default useFormulario