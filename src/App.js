import TaskAdd from './componant/TaskAdd';
import TaskToDo from './componant/TaskToDo';
import Modal from './componant/Modal';
import {useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { delete_task ,  all_task} from './data/store';
import { useState } from 'react';

function App() { 
  const all = useSelector(state => state);
  const dispatch = useDispatch();
  const [idd , setId] = useState()
  function getid(i){
    console.log(i)
    setId(i)
  }
  return ( 
    <div className='border p-4 shadow  m-auto'>
        <h1> Todo List App</h1>
        <TaskAdd id={all.length}/>
        <div className="d-flex justify-content-between">
        <h3>Todo List </h3>
        <span className='fw-bold'>{all.length} TODOS</span>
        </div>

        <div className='bttn d-flex justify-content-between'>
        <button onClick={()=>dispatch(all_task())}  className='text-capitalize'>all done</button>
        <button onClick={()=>dispatch(delete_task())}  className='text-capitalize'>done</button>
        </div>
          {
            all.map( (elem, index) =>  <TaskToDo getid={getid} key={index} task={elem}/> )
          }
          <Modal id={idd}/>
    </div>
  );
} 

export default App;
