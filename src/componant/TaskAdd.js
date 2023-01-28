import { useState } from 'react';
import {useDispatch } from 'react-redux';
import { add_task } from '../data/store';

export default function TaskAdd(props) {
    const [task, setTask] = useState("")
    const dispatch = useDispatch();
    const date = new Date();
    const d = date.toLocaleString()
    function addtaskhandler(){
      (task === "")? alert("please fill the input first"):
      dispatch(add_task({id : props.id,task:task,time: d ,etat:0}));
      setTask("")
    }

  return (
    <div className='addtask'>
      <input placeholder='task to do ...'  type='text' value={task} onChange={(e)=> setTask(e.target.value)} />
      <button onClick={addtaskhandler} className='text-capitalize'>add</button>
    </div>
  )
}
