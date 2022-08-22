import './create.css'
import { useState } from 'react'

const CrateForm = (props) => {
    const [getInputTodo, setInputTodo] = useState('');
    const handleTodoInput = (event) => {
      setInputTodo(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newTodo = {
            id: Math.floor(Math.random()*100) + 1,
            title: getInputTodo
        }
        props.onCreateTodo(newTodo)

        setInputTodo('')
    }
    return (
        <div>
          <form onSubmit={handleSubmit}>
            <input className='form-create' value={getInputTodo} type="text" onChange={handleTodoInput}/>
            <button className='button-submit' type='submit'> submit </button>
          </form>
        </div>
    )
}

export default CrateForm;