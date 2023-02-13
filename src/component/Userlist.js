import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

var datalocal=[]

export default function Userlist() {
  const [data,setData]= useState(null)  
  useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response=>response.json())
      .then(data=>setData(data))
      .catch(error=> console.error(error))
    },[])
  
  const [value, setvalue] = useState("")
  const [search, setsearch] = useState("")

  const savevalue = (e) => {
    setvalue(e.target.value)
  }

  const searchname = (e) => {
    const filterdata=data.filter(user=>user.name===value)
    setsearch(filterdata)
    setvalue("")
  }

  return (
   <div>
      <input type="text" placeholder="Search Name" value={value} onChange={savevalue} />
      <button onClick={searchname}>Search</button>
     <TableContainer component={Paper}>
      {
        data ?
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">UserName</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
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
  );
}
