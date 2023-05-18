import { useState } from 'react';
import './App.css';
import Students from './Components/Students';
import { data } from './Data/data';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import AddStudents from './Components/AddStudents';
import EditStudents from './Components/EditStudents';
import Nopage from './Components/Nopage';


function App() {
  const [students, setStudents] = useState(data)
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
