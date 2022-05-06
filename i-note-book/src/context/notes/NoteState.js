
import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initialnotes = []
  const [notes, setNotes] = useState(initialnotes)
  const getNotes = async () => {
    //Api Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1YzZmZGFiM2ZhMWM0ODE4NDk0OTc3In0sImlhdCI6MTY1MDMwNjk5OX0.DxeMBl4H-ZHdLNUkW_MQHWze-B8XYX6M6daWHX09py0"
      },

    });
    const json = await response.json();
    console.log(json)
    //Adding notes to array
    setNotes(json)

  }


  //Add a note 
  const addNotes = async (title, description, tag) => {
    //Api Call 
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1YzZmZGFiM2ZhMWM0ODE4NDk0OTc3In0sImlhdCI6MTY1MDMwNjk5OX0.DxeMBl4H-ZHdLNUkW_MQHWze-B8XYX6M6daWHX09py0"
      },
      body: JSON.stringify({title, description, tag})
    });
  
    //Logic to Add Note
    console.log("Adding a new note")
    const note = await response.json();
    console.log(note)
    setNotes(notes.concat(note))
  }
  //Edit a note 
  const editNotes = async (id, description, title, tag) => {
    //Api Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1YzZmZGFiM2ZhMWM0ODE4NDk0OTc3In0sImlhdCI6MTY1MDMwNjk5OX0.DxeMBl4H-ZHdLNUkW_MQHWze-B8XYX6M6daWHX09py0"
      },
      body: JSON.stringify(title, description, tag)
    });
    const result1 = await response.json();
    //Logic to edit note
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.tidescriptiontle = description;
        element.tag = tag;

      }

    }

  }
  const deleteNotes = async (id) => {
    //Api Call
    const response = await fetch(`${host}/api/notes/deletnotes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1YzZmZGFiM2ZhMWM0ODE4NDk0OTc3In0sImlhdCI6MTY1MDMwNjk5OX0.DxeMBl4H-ZHdLNUkW_MQHWze-B8XYX6M6daWHX09py0"
      },
      body: JSON.stringify()
    });
    const result2 = await response.json();
    //Logic to delete note
    const newNote = notes.filter((note) => {
      return (
        note._id !== id
      )
    })
    setNotes(newNote)

  }

  return (
    <NoteContext.Provider value={{ notes, addNotes, editNotes, deleteNotes, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState; 