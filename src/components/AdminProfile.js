import React from 'react';
import { Container, Typography, Paper, Grid, Box, Avatar, List, ListItem, ListItemText, Divider } from '@mui/material';
import { AssignmentInd as AssignmentIndIcon } from '@mui/icons-material';

function AdminProfile() {
  // Sample assigned complaints data
  const assignedComplaints = [
    { id: 1, title: 'Complaint 1', status: 'Pending', assignedTo: 'Alice Smith' },
    { id: 2, title: 'Complaint 2', status: 'Resolved', assignedTo: 'Bob Johnson' },
    { id: 3, title: 'Complaint 3', status: 'In Progress', assignedTo: 'Charlie Brown' },
    { id: 4, title: 'Complaint 4', status: 'Pending', assignedTo: 'Dana White' },
    { id: 5, title: 'Complaint 5', status: 'Resolved', assignedTo: 'Eve Black' },
    { id: 6, title: 'Complaint 6', status: 'In Progress', assignedTo: 'Frank Green' },
    { id: 7, title: 'Complaint 7', status: 'Pending', assignedTo: 'Grace Lee' },
    { id: 8, title: 'Complaint 8', status: 'Resolved', assignedTo: 'Hank Miller' },
    { id: 9, title: 'Complaint 9', status: 'In Progress', assignedTo: 'Ivy Walker' },
    { id: 10, title: 'Complaint 10', status: 'Pending', assignedTo: 'Jack Turner' },
    { id: 11, title: 'Complaint 11', status: 'Resolved', assignedTo: 'Kate Wilson' },
    { id: 12, title: 'Complaint 12', status: 'In Progress', assignedTo: 'Leo Martinez' },
    { id: 13, title: 'Complaint 13', status: 'Pending', assignedTo: 'Mia Garcia' },
    { id: 14, title: 'Complaint 14', status: 'Resolved', assignedTo: 'Nina Thomas' },
    { id: 15, title: 'Complaint 15', status: 'In Progress', assignedTo: 'Owen Davis' },
  ];

  return (
    <Container>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" sx={{ color: '#3f51b5', mb: 2 }}>My Profile</Typography>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Avatar sx={{ width: 120, height: 120, bgcolor: '#3f51b5', mr: 2 }}>
              JD
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography variant="body1" sx={{ mb: 1, fontSize: '1.2rem' }}><strong>Name:</strong> John Doe</Typography>
            <Typography variant="body1" sx={{ mb: 1, fontSize: '1.2rem' }}><strong>Phone Number:</strong> +1234567890</Typography>
            <Typography variant="body1" sx={{ mb: 1, fontSize: '1.2rem' }}><strong>Email:</strong> johndoe@example.com</Typography>
            <Typography variant="body1" sx={{ mb: 1, fontSize: '1.2rem' }}><strong>Role:</strong> Admin</Typography>
            <Typography variant="body1" sx={{ mb: 1, fontSize: '1.2rem' }}><strong>Assigned Complaints:</strong> {assignedComplaints.length}</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mt: 3, mb: 3 }}>
        <Typography variant="h6" sx={{ color: '#3f51b5', mb: 2 }}>Assigned Complaints</Typography>
        <Box sx={{ p: 3, mt: 3, mb: 3, maxHeight: 350, overflow: 'auto' }}>
          <List>
            {assignedComplaints.map(complaint => (
              <React.Fragment key={complaint.id}>
                <ListItem>
                  <AssignmentIndIcon sx={{ mr: 2, color: '#3f51b5' }} />
                  <ListItemText 
                    primary={complaint.title} 
                    secondary={`Status: ${complaint.status}, Assigned to: ${complaint.assignedTo} (Agent)`} 
                    sx={{ fontSize: '1rem' }} 
                  />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Paper>
    </Container>
  );
}

export default AdminProfile;