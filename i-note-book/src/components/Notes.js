import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import AddNotes from './AddNotes';
import NoteItems from './NoteItems';


const Notes = () => {
    const context = useContext(noteContext);
    const { notes, addNotes } = context;
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
