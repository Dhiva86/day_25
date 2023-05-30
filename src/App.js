import { useEffect, useState } from 'react';
import './App.css';
import Students from './Components/Students';

import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import AddStudents from './Components/AddStudents';
import EditStudents from './Components/EditStudents';
import Nopage from './Components/Nopage';


function App() {
  const [students, setStudents] = useState([])
  useEffect(()=> {
    const getStudentsInfo = async()=>{
      const res = await fetch(`https://6474210b7de100807b1a6696.mockapi.io/studentsinfo`,{
          method:"GET"
      })
      const data = await res.json()
      setStudents(data)
    }
    getStudentsInfo()
  },)
  return (
    
    <div className="App">
   <Routes>
      <Route exact path="/" element={<Dashboard/>}/>
      <Route path="/students" element={<Students
      students = {students}
      setStudents = {setStudents}
      />}/>
      <Route path="/add-students" element={<AddStudents
        students = {students}
        setStudents = {setStudents}
        />}/>
        
        <Route
         path="/edit/:id"
         element ={<EditStudents
             students={students}
            setStudents={setStudents}
         />}
         />
       <Route
       path="*"
       element={<Nopage/>}
       >


       </Route>


   </Routes>
    </div>
  );
}

export default App;
