import React from 'react'
import { useState } from 'react';
import {FaTrash} from 'react-icons/fa'
import {FaPencilAlt} from 'react-icons/fa'
import { MdOutlineCheckBox } from "react-icons/md";
import {  useDispatch } from 'react-redux';
import { todoDeleted } from '../Store/Features/todos/todoSlice';
import { toggleInputForm } from '../Store/Features/todos/todoSlice';



const SingleToDoCard = (props) => {
  const [done,setDone] = useState(false);

  const dispatch = useDispatch();

  return (
    <div className='flex justify-between bg-red-100 py-2 rounded shadow overflow-y-scroll'> 
        <div className='px-4'>
            <h1 className={done?"font-semibold line-through":"font-semibold"}>{props.name}</h1>
        </div>
        <div className='px-4 flex space-x-4'>
            <MdOutlineCheckBox 
            onClick={() => setDone(!done)}
            className='cursor-pointer text-green-700 text-2xl'/>
            <FaPencilAlt 
            onClick={() => dispatch(toggleInputForm({
              id:props.id,
              name:props.name
            }))}
            className='cursor-pointer text-orange-500 text-xl' />
            <FaTrash
            onClick={() => dispatch(todoDeleted(props.id))}
             className='cursor-pointer text-red-700 text-xl' />
        </div>
    </div>
  )
}

export default SingleToDoCard