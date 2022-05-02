import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItems from './NoteItems';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, setNotes } = context;
    return (
        <div className='row my-2'>
            <h1> Your notes</h1>
            {notes.map((note) => {
                return (
                   <NoteItems note = {note}/>
                )
            })}
        </div>
    )
}

export default Notes
