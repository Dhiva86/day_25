import React from 'react'
import Base from '../Base/Base'
import { useNavigate } from 'react-router-dom'

const Students = ({students, setStudents})=> {
  const navigate = useNavigate()

  const deleteStudent = async (studentId) =>{
    try{
      const res = await fetch(`https://6474210b7de100807b1a6696.mockapi.io/studentsinfo/${studentId}`,{
        method:"DELETE"
    })
    const data = await res.json()
      setStudents(data)
      const removedStudent = students.filter(student=>student.id !==studentId)
   setStudents(removedStudent)
    }
  catch(error) {
  console.log(error)
  }
}
  return (
    <Base
    title={"Students info"}
    description={"All student info here"}
    >  
    <div className='stud-collection'>
          {students.map((stud,idx)=>(
            <div className='stud-card' key={idx}>
                <h4>{stud.name}</h4>
                <p>Batch:{stud.batch}</p>
                <p>Gender: {stud.gender}</p>
                <p>Education: {stud.education}</p>
                <div className='nav-btn'>
                  <button onClick={()=>navigate(`/edit/${stud.id}`)}>Edit</button>
                  <button onClick={()=>deleteStudent(stud.id)}>Delete</button>
                </div>

            </div>
          ))}


    </div>
    </Base>
  )
}

export default Students