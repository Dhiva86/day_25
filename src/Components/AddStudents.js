import React, { useState } from 'react'
import Base from '../Base/Base'
import { useNavigate } from 'react-router-dom'
//import Students from './Students'

function AddStudents({students, setStudents}) {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [gender, setGender] = useState("")
    const [education, setEducation] = useState("")
    const navigate = useNavigate()

  const handleAddStudent = ()=>{
    const newStudent = {
        id,
        name,
        batch,
        gender,
        education
    }
    //console.log(newStudent)
   setStudents([...students, newStudent])
    navigate("/students")
  }

  return (
    <Base
    title={"Add the new Students Details"}
    >
    <div className='form-group'>
        <h4>Add Students</h4>
        <input
        placeholder='Enter the Id of Student'
        type='number'
        value={id}
        onChange={(e)=>setId(e.target.value)}
        />
        <input
         placeholder='Enter the Name of Student'
         type='text'
         value={name}
         onChange={(e)=>setName(e.target.value)}
         />
        <input
         placeholder='Enter the Bach of Student'
         type='text'
         value={batch}
         onChange={(e)=>setBatch(e.target.value)}
         />
        <input
         placeholder='Enter the Gender of Student'
         type='text'
         value={gender}
         onChange={(e)=>setGender(e.target.value)}
         />
         <input
         placeholder='Enter the Education of Student'
         type='text'
         value={education}
         onChange={(e)=>setEducation(e.target.value)}
         />
         <br/>
         <div>
         <button
         onClick={handleAddStudent}
         >Add Student</button>
         </div>
    </div>
    </Base>
  )
}

export default AddStudents