import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/ToDo/todoSlice'

function AddToDo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()


    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <form onSubmit={addTodoHandler} className='formBox'>
        <input type="text" 
        className='inputBox1'
        value={input}
        onChange={(e) => setInput(e.target.value)}  />

        <button type='submit'
        className='addBtn'>
            Add
        </button>
    </form>
  )
}

export default AddToDo