import React, {useContext} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import noteContext from '../context/notes/noteContext';
const NoteItems = (props) => {

    const context = useContext(noteContext);
    
      const { deleteNotes } = context;
    
    const deleteHandle = () => {
        deleteNotes(note._id) && 
        toast.success("Item deleted",{autoClose: 500});
    }
    const { note, updateNote } = props;
    
    return (
        <div className='col-md-3'>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{note.title}</h4>
                    
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-trash-can mx-3" onClick={deleteHandle}></i>
                    <i className="fa-solid fa-pen-to-square mx-3" onClick={()=>{updateNote(note)}}></i>
                    
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default NoteItems
