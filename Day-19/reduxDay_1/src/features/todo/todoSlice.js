import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }

            state.todos.push(todo);

        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((t)=>t.id != action.payload);
        }   
    }
})


export default todoSlice.reducer;


export const {addTodo,removeTodo} = todoSlice.actions;

