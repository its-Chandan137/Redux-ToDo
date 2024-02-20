import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    todos: [{id: 1, text: "Hello and Welcome", text2: "How are you?"}],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const {text, text2} = action.payload;
            const todo = {
                id: nanoid(),
                text: text,
                text2: text2,
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo)=>
                todo.id !== action.payload)
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer