import './todo.css'
import { useState } from 'react';
import TodoList from '../todo-list/todolist';
import Form from '../todocreate/create'
import { Link } from 'react-router-dom'

const Todo = (props) => {
  const [getTodos, setTodos] = useState(
    [
      {id: 1, title: 'Manggis'},
      {id: 2, title: 'Pisang'},
      {id: 3, title: 'Anggur'},
    ]
  )
  const eventCreateTodo = (todo) => {
    setTodos(getTodos.concat(todo))
    console.log(getTodos);
  }
    return (
        <div>
            <h1 className='h1'>
                List {props.name}
            </h1>
            <Link to="/About">by NUKA</Link>
            <h2>
                <Form onCreateTodo={eventCreateTodo}/>
                <TodoList dataTodos={getTodos}/>
            </h2>
        </div>
    )
}


export default Todo;