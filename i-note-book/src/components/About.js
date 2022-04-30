import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {

  const a = useContext(noteContext);

  useEffect(()=>{
    a.update()
    // eslint-disable-next-line 
  },[]);
  return (
    <div className='my-3'>
      <h1>This is About {a.state.name} and this is {a.state.class}</h1>
    </div>
  )
}

export default About
