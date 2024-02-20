import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/ToDo/todoSlice'

function Todos() {
    const todos = useSelector((state)=> state.todos)
    const dispatch = useDispatch()

  return (
    <div className='wholeTodo'>
        <div className='todoTitle'>Todos</div>
        {todos.map((todo) => (
        <div key={todo.id} className='todos'>
            <div className='todoInputs'>
                <div className='todoText'><h3>{todo.text}</h3></div>
                <div className='todoText2'><h5>{todo.text2}</h5></div>
            </div>

            <button onClick={() => dispatch(removeTodo(todo.id))}>Delet</button>
        </div>
        ))}
    </div>
  )
}

export default Todos