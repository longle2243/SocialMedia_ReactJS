import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Todolist({todolist}) {
  return (
    <div>
      <h1>List</h1>
      {
        todolist.map((todo, index) => (<Todo todo={todo} key={index}/>))
      }
    </div>
  )
}

function Todo({todo}) {
  return (
    <div>
      <Card sx={{ maxWidth: 345, m: "auto", mt: 5, boxShadow: 5 }}>
        <CardActionArea>
          <CardContent>
            <Typography variant="body2" color="text.secondary" ><p>{todo.name}</p></Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}
