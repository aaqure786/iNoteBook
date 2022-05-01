import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {

  const a = useContext(noteContext);

  
  return (
    <div className='my-3'>
      <h1>This is About {a.state.name} and this is {a.state.class}</h1>
    </div>
  )
}

export default About
