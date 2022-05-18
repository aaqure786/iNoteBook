
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
  const editNotes = async (id, title, tag, description) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1YzZmZGFiM2ZhMWM0ODE4NDk0OTc3In0sImlhdCI6MTY1MDMwNjk5OX0.DxeMBl4H-ZHdLNUkW_MQHWze-B8XYX6M6daWHX09py0"
     },
      body: JSON.stringify({title,tag,description})
    });
    const json = await response.json(); 
    console.log(json)
     let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag; 
        break; 
      }
    }  
    setNotes(newNotes);
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
    console.log(result2)
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