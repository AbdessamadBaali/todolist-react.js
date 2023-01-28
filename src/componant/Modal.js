import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {update_task} from '../data/store'

export default function Modal(props) {
    const [val , setVal] = useState('');
    const dispatch = useDispatch();
    function handler() {
        dispatch(update_task({id:props.id,newtask: val}))
        setVal('')
    }
   
  return (
    
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel"> Give The New Value Of Task</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            <form>
                <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">task :</label>
                    <input type="text" className="form-control" id="recipient-name" value={val} 
                        onChange={(e)=> setVal(e.target.value)}
                    />
                </div>
            </form>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button onClick={handler} type="button" className="btn btn-primary" >Save change</button>
        </div>
        </div>
    </div>
    </div>
  )
}
