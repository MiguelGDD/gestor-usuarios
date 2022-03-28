import './Input.css'
//separa el label y mandal el resto de info en ..rest
const Input =({label, ...rest})=>{
    return(
        <div className='field'>
            <label>{label}</label>
            <input {...rest} required/>
        </div>
    )
}
export default Input