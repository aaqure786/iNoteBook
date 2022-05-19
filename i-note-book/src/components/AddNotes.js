import React, {useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext';

const AddNotes = () => {
  const context = useContext(noteContext);
  const [note, setNote] = useState({title : "", description : "" ,tag: ""})
    const { addNotes } = context;

    const handleClick = (e) => {
      e.preventDefault();
      addNotes(note.title,note.description,note.tag);
      setNote({title : "", description : "" ,tag: ""})

    }
    const onChange = (e) => {
      setNote({...note, [e.target.name]: e.target.value} )
    }  
  return (
    <div className='container my-3'> 
    <h1>Add a Note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" value={note.title} minLength={5} required onChange={onChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="tag" name='tag' aria-describedby="emailHelp" value={note.tag} minLength={5} required onChange={onChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name='description' value={note.description} minLength={5} required onChange={onChange}/>
        </div>
        
        <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
      </form>

    </div>
  )
}

export default AddNotes
