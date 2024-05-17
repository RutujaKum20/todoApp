import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useState } from 'react';
import { todoUpdated } from '../Store/Features/todos/todoSlice';

const UpdateToDoForm = () => {

  const todoToUpdate = useSelector((state) => state.todos.todoUpdate)

  const [update,setUpdate] = useState(todoToUpdate.name)

  const dispatch = useDispatch()

  const handleSubmit =(e)=>{
    e.preventDefault()

    if(!update.trim()){
      alert("enter valid todo");
      setUpdate("");
      return;
    }
    else{
      dispatch(todoUpdated({
        id:todoToUpdate.id,
        name:update
      }))

    }
  } 


  return (
    <>
    <form onSubmit={handleSubmit} className='flex gap-5 justify-around'>
        <input type='text'
        value={update}
        onChange={(e) => setUpdate(e.target.value)}
        className='shadow appearance-none border rounded py-2 px-4 w-3/4' 
        placeholder='Update Todo'
        />
        <button type='submit' className='bg-orange-500 hover:bg-orange-700 py-1 px-3 rounded '>Update</button>
        
    </form>
    </>
  )
}

export default UpdateToDoForm;