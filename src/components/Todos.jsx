import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/ToDo/todoSlice'

function Todos() {
    const todos = useSelector((state)=> state.todos)
    const dispatch = useDispatch()
  return (
    <>
        <div>Todos</div>
        {todos.map((todo) => (
        <div key={todo.id} className='todos'>
            <div className='todoText'>{todo.text}</div>

            <button onClick={() => dispatch(removeTodo(todo.id))}>Del</button>
        </div>
        ))}
    </>
  )
}

export default Todos