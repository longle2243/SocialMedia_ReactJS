import React, { useState } from 'react'

import Todolist from './Todo'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function ListTodo() {
  const [value, setvalue] = useState([])
  const [todo, settodo] = useState([])

  const savevalue = (e) => {
    setvalue(e.target.value)
  }

  const savetodo = (e) => {
    settodo([{ name: value, endtask: false }, ...todo])
    setvalue("")
  }

  return (
    <div>
      <Card sx={{ maxWidth: 345, m: "auto", mt: 5, boxShadow: 5 }}>
          <CardContent>
          <Typography variant="body2" color="text.secondary" ><h1>POST</h1></Typography>
            <input type="text" placeholder="Write something ..." value={value} onChange={savevalue} />
            <Typography gutterBottom variant="h5" component="div"> <button onClick={savetodo}>PUSH</button></Typography>
          </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345, m: "auto", mt: 5, boxShadow: 5 }}>
          <CardContent>
            <Typography variant="body2" color="text.secondary" ><Todolist todolist={todo} /></Typography>
          </CardContent>
      </Card>
    </div>
  )
}
