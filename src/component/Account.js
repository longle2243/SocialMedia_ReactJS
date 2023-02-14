import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

import React, { Component } from 'react'

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data });
      });
  }

  render() {
    return (
      <div>
        {this.state.data.map(todo => (
          <Card sx={{ maxWidth: 345, m: "auto", mt: 5, boxShadow: 5 }}>
            <CardMedia sx={{ height: 240 }} image={todo.url} />
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">{todo.id}</Typography>
                <Typography variant="body2" color="text.secondary" key={todo.id}>{todo.title}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    )
  }
}
