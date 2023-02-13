import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

export default function GetDataApi() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data ?
        <div>
          {data.map(todo => (
            <Card sx={{ maxWidth: 345, m: "auto", mt: 5, boxShadow: 5 }}>
              <CardMedia
                sx={{ height: 240 }}
                image={todo.url}
              />
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">{todo.id}</Typography>
                  <Typography variant="body2" color="text.secondary" key={todo.id}>{todo.title}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
          
        </div> : <p>Loading...</p>}
    </div>
  );
}