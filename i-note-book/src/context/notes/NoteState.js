
import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
    const state1 ={
        "name": "Abrar",
        "class": "React"
    }
    const [state,setState] = useState(state1)

    const update = ()=>{
        setTimeout( ()=> {
            setState({
                "name": "Abrar Ahmad",
                "class": "React Learning"
            })
        },1000)
    }
    return(
        <NoteContext.Provider value ={{state, update}}> 
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState; 