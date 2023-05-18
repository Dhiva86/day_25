import React from 'react'
import { useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import { AppBar,  IconButton, Toolbar } from '@mui/material';

function Base({title, description, children}) {
  const navigate = useNavigate()

  return (
    <div className='main-conatainer'>
    <header>
    <nav>
      <AppBar position="static">
  <Toolbar variant="dense">
    <Typography sx={{ mr: 2 }}>  
     Students Info
    </Typography>
    <IconButton 
    edge="end"
     color="inherit"
     onClick={()=>navigate("/")}
      aria-label="dashboard" sx={{ mr: 2 }}>  
     Dashboard
    </IconButton>

    <IconButton 
    edge="start" 
    color="inherit"
     aria-label="students"
     onClick={()=>navigate("/students")}
      sx={{ mr: 2 }}>  
     Students
    </IconButton>

    <IconButton 
    edge="start" 
    color="inherit" 
    aria-label="add-students" 
    onClick={()=>navigate("/add-students")}
    sx={{ mr: 2 }}>  
     Add student
    </IconButton>
  </Toolbar>
</AppBar>
</nav>
        
    </header>
    <main>
      <h1>{title}</h1>
      <h4>{description}</h4>
      <div className='contents'>
        {children}
        </div>
    </main>
    </div>
  )
}

export default Base