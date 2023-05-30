
import Base from '../Base/Base'
import { useNavigate } from 'react-router-dom'
import * as yup from "yup";
import { useFormik } from "formik";


export const StudentValidateSchma = yup.object({
 name:yup.string().required("please fill the name"),
 batch:yup.string().required("Enter the Batch details").min(5,"Enter the valid Batch"),
 gender:yup.string().required("Mention the Gender"),
 education:yup.string().required("Fill the education details")

})

function AddStudents({students, setStudents}) {
  const {values, handleChange, handleSubmit, handleBlur,errors, touched} = useFormik({
    initialValues:{
      name:"",
      batch:"",
      gender:"",
      education:""
    },
    validationSchema:StudentValidateSchma,
    onSubmit:(newStudent) =>{
      handleAddStudent(newStudent)
    }
  })

   
    const navigate = useNavigate()

  const handleAddStudent = async (newStudent)=>{
   
    try{
      const response = await fetch(`https://6474210b7de100807b1a6696.mockapi.io/studentsinfo/`,{
        method:"POST",
        body:JSON.stringify(newStudent),
        headers:{
   "Content-Type": "application/json"
        }
    })
    const data = await response.json()
      console.log(data)
      setStudents([...students, data])
       navigate("/students")
  }
      catch(error){
        console.log(error)
      }
    
  
  }

  return (
    <Base
    title={"Add the new Students Details"}
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
         
         >Add Student</button>
         </div>
    </div>
    </form>
    </Base>
  )
}

export default AddStudents