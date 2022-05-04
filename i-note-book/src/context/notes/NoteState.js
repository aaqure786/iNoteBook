
import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
    const initialnotes = [
        {
          "_id": "625dc78b0a86ab69bdbead27",
          "user": "625c6fdab3fa1c4818494977",
          "title": "This is my Second note",
          "description": "This is a notes app which keep the record of your data",
          "tag": "General",
          "date": "2022-04-18T20:18:19.714Z",
          "__v": 0
        },
        {
          "_id": "625dc78b0a86ab69bdbead37",
          "user": "625c6fdab3fa1c4818494977",
          "title": "This is my Second note",
          "description": "This is a notes app which keep the record of your data",
          "tag": "General",
          "date": "2022-04-18T20:18:19.714Z",
          "__v": 0
        },
        {
          "_id": "625dc78b0a86ab69bdbea4d27",
          "user": "625c6fdab3fa1c4818494977",
          "title": "This is my Second note",
          "description": "This is a notes app which keep the record of your data",
          "tag": "General",
          "date": "2022-04-18T20:18:19.714Z",
          "__v": 0
        },
        {
          "_id": "625dc78b0a86ab69bdbea5d27",
          "user": "625c6fdab3fa1c4818494977",
          "title": "This is my Second note",
          "description": "This is a notes app which keep the record of your data",
          "tag": "General",
          "date": "2022-04-18T20:18:19.714Z",
          "__v": 0
        },
        {
          "_id": "625dc78b0a86ab69bdbe6ad27",
          "user": "625c6fdab3fa1c4818494977",
          "title": "This is my Second note",
          "description": "This is a notes app which keep the record of your data",
          "tag": "General",
          "date": "2022-04-18T20:18:19.714Z",
          "__v": 0
        },
        {
          "_id": "625dc78b0a86ab69bdbe8d27",
          "user": "625c6fdab3fa1c4818494977",
          "title": "This is my Second note",
          "description": "This is a notes app which keep the record of your data",
          "tag": "General",
          "date": "2022-04-18T20:18:19.714Z",
          "__v": 0
        },
      ]

      const [notes, setNotes] = useState(initialnotes)

      //Add a note 
      const addNotes = (title,description,tag) => {
        console.log("Adding a new note")
       const note = {
          "_id": "625dc78b0a86ab69bddc8d12",
          "user": "625c6fdab3fa1c4818494977",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2022-04-18T20:18:19.714Z",
          "__v": 0
        
        }
        setNotes(notes.concat(note))
      }
      //Edit a note 
      const editNotes = (id)=>{

      }  
      const deleteNotes = (id)=> {

      }

    return(
        <NoteContext.Provider value ={{notes,addNotes,editNotes,deleteNotes}}> 
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState; 