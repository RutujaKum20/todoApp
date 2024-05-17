import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Features/todos/todoSlice";

const Store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default Store;
