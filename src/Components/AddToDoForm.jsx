import React from 'react'
import { useState } from 'react';
import { todoAdded } from '../Store/Features/todos/todoSlice';
import { useDispatch } from 'react-redux';

const AddToDoForm = () => {
  const [input ,setInput] =useState("");

  const dispatch = useDispatch();

  const handleSubmit=(e) =>{
    e.preventDefault();

    if(!input.trim){
      alert("Please add todo");
      setInput("");
      return;
    }
    else{
      dispatch(
        todoAdded({
          name:input,
        }
        
        )
      );
      setInput("")
  
  }
}

  return (
    <>
    <form onSubmit={handleSubmit} 
    className='flex gap-5 justify-around'>
        <input type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='shadow appearance-none border rounded py-2 px-4 w-3/4' 
        placeholder='Add Todo'
        />
        <button type='submit' className='bg-blue-500 hover:bg-blue-700 py-2 px-6 rounded '>Add</button>
        
    </form>
    </>
  )
}

export default AddToDoForm;