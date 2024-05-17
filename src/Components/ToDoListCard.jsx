import React, { useEffect, useState } from "react";
import AddToDoForm from "./AddToDoForm";
import UpdateToDoForm from "./UpdateToDoForm";
import SingleToDoCard from "./SingleToDoCard";
import { useDispatch, useSelector } from "react-redux";
import { UseDispatch } from "react-redux";
import { todoCleared } from "../Store/Features/todos/todoSlice";

const ToDoListCard = () => {

const myTodos = useSelector((state) => state.todos.todos);
const toggleForm = useSelector((state) => state.todos.toggleForm )

const dispatch = useDispatch()

const [text,setText] = useState(true);

const handleClick =()=>{
  setText(!text);
}
  return (
    <div className=" absolute sm:w-1/2 md:w-1/2 lg:w-1/2 h-3/4 min-h-max bg-amber-100 shadow-2xl rounded-lg p-2 items-center flex flex-col space-y-10 justify-between  ">
      <div className="flex flex-col  min-h-max space-y-10 h-3/4 sm:w-1/2 md:w-1/2 lg:w-1/2">
        <h1 className="text-3xl font-semibold underline text-center">My ToDo List </h1>
        <div className="w-full">
          {toggleForm?<AddToDoForm />:<UpdateToDoForm />}
        </div>
  
        {
        text?
          <div>
          <h1
          onClick={handleClick} 
          className="text-center font-bold text-3xl mb-8">Enter your first ToDo Item</h1>
          <div className="text-4xl text-center">✅</div>
          </div>:""
          }
      
        <div className="w-full">
          <ul className="w-full max-h-72 overflow-y-scroll">
            {myTodos.map((todo) => (
                <li className="mb-3" key={todo.id}>
                  <SingleToDoCard  id={todo.id} name={todo.name}/>
                </li>
            ))}
            
          </ul>
        
        </div>
        
      </div>
      
      <button 
      onClick={()=>dispatch(todoCleared())}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline">
        Clear
      </button>
    </div>
  );
};

export default ToDoListCard;
