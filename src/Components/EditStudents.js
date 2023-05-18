import React, { useEffect, useState } from 'react'
import Base from '../Base/Base'
import { useNavigate, useParams } from 'react-router-dom'

function EditStudents({students, setStudents}) {
  const {id} = useParams()
  const navigate = useNavigate()
    const [idx, setIdx] = useState("")
    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [gender, setGender] = useState("")
    const [education, setEducation] = useState("")

  useEffect(()=>{
    const studentData = students.find(stud => stud.id === id)
    
    if(studentData){
    setIdx(studentData.id)
    setName(studentData.name)
    setBatch(studentData.batch)
    setGender(studentData.gender)
    setEducation(studentData.education)
    }
  },[id,students])

  const updateStudent=() =>{
    const studIndex = students.findIndex((stud)=>stud.id === id)

    const updatedStudents = {
        id,
        name,
        batch,
        gender,
        education
    }
    students[studIndex] = updatedStudents
    setStudents ([...students])
    navigate ("/students")
  }

    return (
      <Base
      title={"Edit the Students Details"}
      >
        <div className='form-group'>
            <h4>Edit Students</h4>
            
            <input
            placeholder='Enter the Id of Student'
            type='number'
            value={idx}
            onChange={(e)=>setIdx(e.target.value)}
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
             <button
             onClick={updateStudent}
             >Update Student</button>
        </div>
        </Base>
      )
}

export default EditStudents