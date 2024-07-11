import React from 'react';
import { Container, Typography, Paper, Grid, Box, Avatar, List, ListItem, ListItemText, Divider } from '@mui/material';
import { AssignmentInd as AssignmentIndIcon } from '@mui/icons-material';

function UserProfile() {
  // Sample assigned complaints data
  const assignedComplaints = [
    { id: 1, title: 'Complaint 1', status: 'Pending' },
    { id: 2, title: 'Complaint 2', status: 'Resolved', resolvedDate: '2024-07-12' },
    { id: 3, title: 'Complaint 3', status: 'In Progress' },
    { id: 4, title: 'Complaint 4', status: 'Pending' },
    { id: 5, title: 'Complaint 5', status: 'Resolved', resolvedDate: '2024-07-10' },
    { id: 6, title: 'Complaint 6', status: 'In Progress' },
    { id: 7, title: 'Complaint 7', status: 'Pending' },
    { id: 8, title: 'Complaint 8', status: 'Resolved', resolvedDate: '2024-07-15' },
    { id: 9, title: 'Complaint 9', status: 'In Progress' },
    { id: 10, title: 'Complaint 10', status: 'Pending' },
    { id: 11, title: 'Complaint 11', status: 'Resolved', resolvedDate: '2024-07-18' },
    { id: 12, title: 'Complaint 12', status: 'In Progress' },
    { id: 13, title: 'Complaint 13', status: 'Pending' },
    { id: 14, title: 'Complaint 14', status: 'Resolved', resolvedDate: '2024-07-20' },
    { id: 15, title: 'Complaint 15', status: 'In Progress' },
  ];

  // Filter resolved complaints
  const resolvedComplaints = assignedComplaints.filter(complaint => complaint.status === 'Resolved');

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
            <Typography variant="body1" sx={{ mb: 1, fontSize: '1.2rem' }}><strong>Resolved Complaints:</strong> {resolvedComplaints.length}</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mt: 3, mb: 3 }}>
        <Typography variant="h6" sx={{ color: '#3f51b5', mb: 2 }}>Resolved Complaints</Typography>
        <Box sx={{ p: 3, mt: 3, mb: 3, maxHeight: 350, overflow: 'auto' }}>
          <List>
            {resolvedComplaints.map(complaint => (
              <React.Fragment key={complaint.id}>
                <ListItem>
                  <AssignmentIndIcon sx={{ mr: 2, color: '#3f51b5' }} />
                  <ListItemText primary={complaint.title} secondary={`Resolved Date: ${complaint.resolvedDate}`} sx={{ fontSize: '1rem' }} />
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

export default UserProfile;
