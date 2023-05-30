import React, { useEffect} from 'react'
import Base from '../Base/Base'
import { useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import { StudentValidateSchma } from './AddStudents'


function EditStudents({students, setStudents}) {

  
    const {id} = useParams()
    const studentData = students.find(stud => stud.id === id)
    const {values, handleChange, handleSubmit, handleBlur,errors, touched} = useFormik({
    initialValues:{
      name:studentData.name,
      batch:studentData.batch,
      gender:studentData.gender,
      education:studentData.education
    },
    validationSchema:StudentValidateSchma,
    onSubmit:(updateStudent) =>{
      handleUpdateStudent(updateStudent)
    }
  })
  
  const navigate = useNavigate()

  useEffect(()=>{    
    }
  ,[id,students,values])

  const handleUpdateStudent= async(updateStudent) =>{
 try {
  
 
  const response = await fetch(`https://6474210b7de100807b1a6696.mockapi.io/studentsinfo/${id}`,{
    method:"PUT",
    body:JSON.stringify(updateStudent),
    headers:{
"Content-Type": "application/json"
  }
})
const data = await response.json()
      console.log(data)

  const studIndex = students.findIndex((stud)=>stud.id === id)
students[studIndex] = data
setStudents ([...students])
navigate ("/students")
 }
  
 catch(error){
  console.log(error)
 }

  }
   

    return (
      <Base
      title={"Edit the Students Details"}
      >
       <form onSubmit={handleSubmit}>
    <div className='form-group'>
        <h4>Add Students</h4>
        
        <input
         placeholder='Enter the Name of Student'
         type='text'
         value={values.name}
         onChange={handleChange}
         onBlur={handleBlur}
         name="name"
         />
         {touched.name && errors.name? <div style={{color:"blue"}}>{errors.name}</div>:""}
        <input
         placeholder='Enter the Bach of Student'
         type='text'
         value={values.batch}
         onChange={handleChange}
         onBlur={handleBlur}
         name="batch"
         />
         {touched.batch && errors.batch? <div style={{color:"blue"}}>{errors.batch}</div>:""}
        <input
         placeholder='Enter the Gender of Student'
         type='text'
         value={values.gender}
         onChange={handleChange}
         onBlur={handleBlur}
         name="gender"
         />
         {touched.gender && errors.gender? <div style={{color:"blue"}}>{errors.gender}</div>:""}
         <input
         placeholder='Enter the Education of Student'
         type='text'
         value={values.education}
         onChange={handleChange}
         onBlur={handleBlur}
         name="education"
         />
         {touched.education && errors.education? <div style={{color:"blue"}}>{errors.education}</div>:""}
         <br/>
         <div>
         <button
         >Update Student</button>
         </div>
    </div>
    </form>
        </Base>
      )
}


export default EditStudents