import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Paper, TextField, MenuItem, Button, Box } from '@mui/material';

function AdminComplaintDetails() {
  const { id } = useParams(); // Get complaint id from URL
  const [complaint, setComplaint] = useState(null);
  const [assignedTo, setAssignedTo] = useState('');

  // Sample complaints data (simulated fetching)
  useEffect(() => {
    // Simulating fetching complaint details by id (replace with actual API call)
    const fetchedComplaint = {
      id: '1',
      title: 'Complaint 1',
      status: 'pending',
      name: 'John Doe',
      phoneNumber: '+1234567890',
      emailId: 'johndoe@example.com',
      complaintDescription: 'This is the first complaint.',
    };
    setComplaint(fetchedComplaint);
  }, [id]);

  const handleAssign = () => {
    // Logic to handle assigning the complaint to an agent
    alert(`Complaint assigned to ${assignedTo}`);
  };

  if (!complaint) {
    return <div>Loading...</div>; // Placeholder for loading state
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper sx={{ p: 3, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
        <Typography variant="h4" sx={{ color: 'violet' }}>Complaint Details</Typography>
        <Typography variant="body1" sx={{ mt: 2, fontWeight: 'bold', fontSize: '1.2rem' }}>Complaint Title: {complaint.title}</Typography>
        <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>Complaint Description: {complaint.complaintDescription}</Typography>
        <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>Complained By: {complaint.name}</Typography>
        <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>Phone Number: {complaint.phoneNumber}</Typography>
        <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>Email: {complaint.emailId}</Typography>
        <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>Status: {complaint.status}</Typography>
        
        <TextField
          select
          label="Assign to"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          fullWidth
          sx={{ mt: 3 }}
          InputLabelProps={{ sx: { fontSize: '1.2rem', fontWeight: 'bold' } }}
          InputProps={{ placeholder: 'Assign to' }}
        >
          <MenuItem value="Agent 1">Alice Smith</MenuItem>
          <MenuItem value="Agent 2">Bob Johnson</MenuItem>
          <MenuItem value="Agent 3">Charlie Brown</MenuItem>
          <MenuItem value="Agent 4">Dana White</MenuItem>
          <MenuItem value="Agent 5">Eve Black</MenuItem>
          <MenuItem value="Agent 1">Frank Green</MenuItem>
          <MenuItem value="Agent 2">Grace Lee</MenuItem>
          <MenuItem value="Agent 3">Hank Miller</MenuItem>
          <MenuItem value="Agent 4">Ivy Walker</MenuItem>
          <MenuItem value="Agent 5">Jack Turner</MenuItem>
          <MenuItem value="Agent 1">Kate Wilson</MenuItem>
          <MenuItem value="Agent 2">Leo Martinez</MenuItem>
          <MenuItem value="Agent 3">Mia Garcia</MenuItem>
          <MenuItem value="Agent 4">Nina Thomas</MenuItem>
          <MenuItem value="Agent 5">Owen Davis</MenuItem>
        </TextField>
        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAssign}
            sx={{ backgroundColor: '#1976d2', color: '#fff', fontSize: '1.2rem', padding: '10px 20px' }}
          >
            Assign
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default AdminComplaintDetails;
