import React from 'react';
import {Outlet, Link } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}><Link to="/"style={{color: "white", textDecoration: "none"}}>Todo</Link></Typography>
          <Button color="inherit"><Link to="/user" style={{color: "white", textDecoration: "none"}}>User</Link></Button>
          <Button color="inherit"><Link to="/posts" style={{color: "white", textDecoration: "none"}}>Post</Link></Button>
          <Button color="inherit"><Link to="/api" style={{color: "white", textDecoration: "none"}}>API</Link></Button>
        </Toolbar>
      </AppBar>

      <Outlet />
    </Box>
  );
}