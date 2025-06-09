import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Student() {

    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name, setName]= React.useState('')
    const[email, setEmail]= React.useState('')
    const[dob, setDateOfBirth]= React.useState('')
    const handleClick = (event) =>{
    event.preventDefault();
    const student={name, email, dob}
    console.log(student)
    fetch("http://localhost:8080/api/version1/student/register",{
        method:"POST",
        headers:{"Content-Type":"Application/json"},
        body:JSON.stringify(student)
    }
    ).then(()=>{
        console.log("New Student was added!")
    })
}

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue", fontFamily:"Ariel"}}><u>Add Student</u></h1>
            <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1} }}
            noValidate
            autoComplete="off"
            >
                <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
                value={name}onChange={(event)=>setName(event.target.value)}/>
                <TextField id="outlined-basic" label="Student Email" variant="outlined" fullWidth
                value={email}onChange={(event)=> setEmail(event.target.value)}/>
                <TextField id="outlined-basic" label="Student Date Of Birth" variant="outlined" fullWidth
                value={dob}onChange={(event)=> setDateOfBirth(event.target.value)}/>
            </Box>
        </Paper>
              <Button variant="contained" onClick={handleClick}>Submit</Button>
    </Container>
  );
}
