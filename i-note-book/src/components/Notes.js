import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext';
import AddNotes from './AddNotes';
import NoteItems from './NoteItems';


const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getNotes } = context;
    useEffect (()=>{
        getNotes();
        // eslint-disable-next-line
    },[])

    return (
        <>
            <AddNotes/>
            <div className='row my-2'>
                <h1> Your notes</h1>
                {notes.map((note) => {
                    return (
                        <NoteItems key={note._id} note={note} />
                    )
                })}
            </div>
        </>
    )
}

export default Notes
