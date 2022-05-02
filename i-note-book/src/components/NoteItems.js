import React from 'react'

const NoteItems = (props) => {
    const { note } = props;
    return (
        <div className='col-md-3'>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{note.title}</h4>
                    
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-trash-can mx-3"></i>
                    <i className="fa-solid fa-pen-to-square mx-3"></i>
                    
                </div>
            </div>
        </div>
    )
}

export default NoteItems
