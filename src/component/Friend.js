import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import React, { Component } from 'react'

var datalocal=[]

export default class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [],
      value: "",
      search: []
    };

    this.savevalue = this.savevalue.bind(this);
    this.searchname = this.searchname.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data });
      });
  }

  savevalue(e){
    this.setState({value: e.target.value})
  }

  searchname(){
    const filterdata=this.state.data.filter(user=>user.name===this.state.value)
    this.setState({search: filterdata})
    this.setState({value: ""})
    console.log(filterdata);
  }

  render() {
    return (
      <div>
      <AppBar position="static">
        <Toolbar>
          <Typography><input type="text" placeholder="Search Name" value={this.state.value} onChange={this.savevalue} /></Typography>
          <Button color="inherit" onClick={this.searchname}>Search</Button>
        </Toolbar>
      </AppBar>
     <TableContainer component={Paper}>
      {
        this.state.data ?
        <Table sx={{ minWidth: 650, maxWidth:1000, m:"auto" }} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell sx={{color:"red",fontWeight: "bold"}}>Name</TableCell>
            <TableCell sx={{color:"red",fontWeight: "bold"}} align="right">UserName</TableCell>
            <TableCell sx={{color:"red",fontWeight: "bold"}} align="right">Email</TableCell>
            <TableCell sx={{color:"red",fontWeight: "bold"}} align="right">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.data.map((data) => (
            <TableRow
              key={data.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">{data.name}</TableCell>
              <TableCell align="right">{data.username}</TableCell>
              <TableCell align="right">{data.email}</TableCell>
              <TableCell align="right">{data.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> : <p>Loading...</p>
      }
    </TableContainer>
   </div>
    )
  }
}
