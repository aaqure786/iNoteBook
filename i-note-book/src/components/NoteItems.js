import React from 'react'

const NoteItems = (props) => {
    const { note } = props;
    return (
        <div className='col-md-3'>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{note.title}</h3>
                    
                    <p className="card-text">{note.description}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default NoteItems
