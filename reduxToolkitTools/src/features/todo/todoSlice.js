import { createSlice, nanoid } from "@reduxjs/toolkit";
// naniod it provide uniqe id
const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    // in context api we only write funtion`s declaration only not a defination but in Redux toolkit we write funtion defination full
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
