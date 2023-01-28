import React from 'react'
import { useDispatch } from 'react-redux';
import { update_etat } from '../data/store';

export default function TaskToDo(props) {
    const dispatch = useDispatch();

    function handlerupdateEtat(t) {
        let inputEl = document.getElementById("id"+t);
        (inputEl.checked === true) ?
        dispatch(update_etat({id: t,etat: 0})) 
        : dispatch(update_etat({id: t,etat: 1}));
    }
    
  return (
    <div className='border p-2 row m-2'> 
        <div className='col-7 d-flex align-items-center'>
            <input className="form-check-input  d-inline" type="checkbox" 
                value={props.task.id} id={"id"+props.task.id}
                checked={(props.task.etat === 0) ? false : true} 
                onChange={() => handlerupdateEtat(props.task.id)}
            />
            <span  className="ms-2">{props.task.task}</span>
        </div>
        <span className="col-4 ">{props.task.time}</span>

        <div className='col-1'>
            <button onClick={()=>props.getid(props.task.id)} type="button" value={props.task.task}  className="btn border border-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                    <i className='fas fa-pen' />
            </button>
        </div>


    </div>
  )
}
