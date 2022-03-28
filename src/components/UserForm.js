import Input from './Input'
import Button from './Button'
import useFormulario from '../hooks/useFormulario'

const UserForm =({submit})=>{

    const [formulario, handleChange, reset] = useFormulario({
        name: '',
        lastname: '',
        email:''
      })

      const handleSubmit =(e)=>{
        e.preventDefault()
        submit(formulario)
        reset()
      }

    return(
        <form onSubmit={handleSubmit}>
        
          <Input 
          name="name"
          label="Nombre"
          value={formulario.name}
          onChange={handleChange}
          placeholder='Nombre'
          >
          </Input>

          <Input 
          name="lastname"
          label="Apellido"
          value={formulario.lastname}
          onChange={handleChange}
          placeholder='Apellido'
          >
          </Input>

          <Input 
          name="email"
          label="correo"
          value={formulario.email}
          onChange={handleChange}
          placeholder='Email'
          >
          </Input>

          <Button>Enviar</Button>
      </form>
    )
}
export default UserForm