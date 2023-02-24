import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

import React, { Component } from 'react'

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch("https://dummyjson.com/products/category/smartphones")
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data });
      });
  }

  render() {
    this.state.data.products && console.log(this.state.data.products[0])
    return (
      <div>
        {
          this.state.data.products ?
            <div>
              {this.state.data.products.map(todo => (
                <div key={todo.id}>
                  {todo.category === "smartphones" && (
                    <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row" sx={{ maxWidth: 1000, m:"auto"}}>
                      <Card sx={{ maxWidth: 345, m: "auto", mt: 5, boxShadow: 5 }}>
                        <CardMedia sx={{ height: 240, width:300 }} image={todo.thumbnail} />
                        <CardActionArea>
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">{todo.id}</Typography>
                            <Typography variant="body2" color="text.secondary">{todo.title}</Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>

                      <Card sx={{ maxWidth: 345, m: "auto", mt: 5, boxShadow: 5 }}>
                        <CardMedia sx={{ height: 240, width:300 }} image={todo.thumbnail} />
                        <CardActionArea>
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">{todo.id}</Typography>
                            <Typography variant="body2" color="text.secondary">{todo.title}</Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>

                      <Card sx={{ maxWidth: 345, m: "auto", mt: 5, boxShadow: 5 }}>
                        <CardMedia sx={{ height: 240, width:300 }} image={todo.thumbnail} />
                        <CardActionArea>
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">{todo.id}</Typography>
                            <Typography variant="body2" color="text.secondary">{todo.title}</Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Box>
                  )}
                </div>
              ))}
            </div> : <p>Loading ...</p>
        }
      </div>
    )
  }
}
