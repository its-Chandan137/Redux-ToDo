import React, {useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/ToDo/todoSlice'

function AddToDo() {
    const [input, setInput] = useState('')
    const [input2, setInput2] = useState('')
    const dispatch = useDispatch()

    useEffect(()=>{
        document.querySelector('.inputBox1').focus();
    },[])

    const handleKeyDown = (e)=>{
        if(e.key == "ArrowDown")
        {
            document.querySelector('.inputBox2').focus();
        }
        else if(e.key == "ArrowUp")
        {
            document.querySelector('.inputBox1').focus();
        }
    }


    const addTodoHandler = (e) => {
        e.preventDefault()
        if(input != "" || input2 != "")
        {
            dispatch(addTodo({text: input, text2: input2}))
            setInput('')
            setInput2('')
            document.querySelector('.inputBox1').focus();
        }
    }
  return (
    <form onSubmit={addTodoHandler} className='formBox'>
        <input type="text" 
        className='inputBox1'
        value={input}
        onKeyDown={handleKeyDown}
        onChange={(e) => setInput(e.target.value)}  />

        <input type="text" 
        className='inputBox2'
        value={input2}
        onKeyDown={handleKeyDown}
        onChange={(e) => setInput2(e.target.value)}  />

        <button type='submit'
        className='addBtn'>
            Add
        </button>
    </form>
  )
}

export default AddToDo