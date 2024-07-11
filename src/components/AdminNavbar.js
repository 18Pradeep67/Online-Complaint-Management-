import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';


function AdminNavbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          
        </IconButton>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          COMPLAINT DASHBOARD
        </Typography>
        <Button color="inherit" component={Link} to="/">Dashboard</Button>
        <Button color="inherit" component={Link} to="/admincomplaints">Complaints</Button>
        <Button color="inherit" component={Link} to="/adminprofile">My Profile</Button>
      </Toolbar>
    </AppBar>
  );
}

export default AdminNavbar;