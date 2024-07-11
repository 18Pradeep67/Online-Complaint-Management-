import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          
        </IconButton>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          COMPLAINT DASHBOARD
        </Typography>
        <Button color="inherit" component={Link} to="/">Dashboard</Button>
        <Button color="inherit" component={Link} to="/complaints">Complaints</Button>
        <Button color="inherit" component={Link} to="/myprofile">My Profile</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
