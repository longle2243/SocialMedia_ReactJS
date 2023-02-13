import React, { Component } from 'react'
import {Outlet, Link } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default class Home extends Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}><Link to="/"style={{color: "white", textDecoration: "none"}}>Social Media</Link></Typography>
          <Button color="inherit"><Link to="/post" style={{color: "white", textDecoration: "none"}}>Post</Link></Button>
          <Button color="inherit"><Link to="/friend" style={{color: "white", textDecoration: "none"}}>Friend</Link></Button>
          <Button color="inherit"><Link to="/account" style={{color: "white", textDecoration: "none"}}>Account</Link></Button>
        </Toolbar>
      </AppBar>

      <Outlet />
    </Box>
    )
  }
}
