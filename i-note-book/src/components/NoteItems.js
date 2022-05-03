import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NoteItems = (props) => {

    const notify = () => toast.info("Ready to Edit",{autoClose: 2000});
    const notify_delete = () => toast.success("Item deleted",{autoClose: 3000});
    const { note } = props;
    return (
        <div className='col-md-3'>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{note.title}</h4>
                    
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-trash-can mx-3" onClick={notify_delete}></i>
                    <i className="fa-solid fa-pen-to-square mx-3" onClick={notify}></i>
                    
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default NoteItems
