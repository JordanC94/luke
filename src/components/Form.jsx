import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [category, setCategory] = useState("character");
  const [id, setId] = useState(1);
  const [errorMessage, setErrorMessage] = useState(null);
  const handleClick = () => {
    setErrorMessage("These arent the droids you are looking for.")
  }
  const navigate = useNavigate();
  const submitHandler = e => {
    e.preventDefault()
    navigate(`/${category}/${id}`)
  }
  return (
    <div>
      <form className='form-inline' onSubmit={submitHandler}>
        <label>Search For:</label>
        <select value={category}onChange = {e => setCategory(e.target.value)}>
          <option value="character">Character</option>
          <option value="planet">Planet</option>
        </select>
        <label>ID:</label>
        <input value={id}onChange ={e => setId(e.target.value)} type="number" />
        <button onClick={handleClick} className='btn btn-primary'>Search</button>
      </form>
    </div>
  )
}

export default Form
