import React, { Component } from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Listpost({listpost}) {
  return (
    <div>
      <h1>MY POST</h1>
      {
        listpost.map((todo, index) => (<Todo todo={todo} key={index}/>))
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

export default class MyPost extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: "",
      todo: []
    };

    this.savevalue = this.savevalue.bind(this);
    this.savetodo = this.savetodo.bind(this);
  }

  savevalue(e){
    this.setState({value: e.target.value})
  }

  savetodo(){
    this.setState(prevState => ({
      todo: [...prevState.todo, { name: prevState.value, endtask: false }],
      value: ""
    }));
  }

  render() {
    return (
      <div>
      <Card sx={{ maxWidth: 345, m: "auto", mt: 5, boxShadow: 5 }}>
          <CardContent>
          <Typography variant="body2" color="text.secondary" ><h1>POST</h1></Typography>
            <input type="text" placeholder="Write something ..." value={this.state.value} onChange={this.savevalue} />
            <Typography gutterBottom variant="h5" component="div"> <button onClick={this.savetodo}>PUSH</button></Typography>
          </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345, m: "auto", mt: 5, boxShadow: 5 }}>
          <CardContent>
            <Typography variant="body2" color="text.secondary" ><Listpost listpost={this.state.todo} /></Typography>
          </CardContent>
      </Card>
    </div>
    )
  }
}
