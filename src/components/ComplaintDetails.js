import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Button, Container, Paper, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ComplaintDetails = () => {
  const { id } = useParams(); // Assuming you're using useParams to get the complaint id
  const theme = useTheme();
  const [complaint, setComplaint] = useState(null);
  const [status, setStatus] = useState('pending'); // Default status
  const [buttonText, setButtonText] = useState('');

  // Simulated data for demonstration
  const complaints = [
    { id: '1', text: 'Complaint 1', status: 'pending', name: 'John Doe', phoneNumber: '+1234567890', emailId: 'johndoe@example.com', complaintDescription: 'This is the first complaint.' },
    { id: '2', text: 'Complaint 2', status: 'processed', name: 'Jane Smith', phoneNumber: '+1987654321', emailId: 'janesmith@example.com', complaintDescription: 'This is the second complaint.' },
    { id: '3', text: 'Complaint 3', status: 'resolved', name: 'Michael Johnson', phoneNumber: '+1122334455', emailId: 'michael@example.com', complaintDescription: 'This is the third complaint.' }
  ];

  useEffect(() => {
    // Simulating fetching complaint details by id (replace with actual API call)
    const selectedComplaint = complaints.find(comp => comp.id === id);
    if (selectedComplaint) {
      setComplaint(selectedComplaint);
      setStatus(selectedComplaint.status);
      updateButtonState(selectedComplaint.status);
    }
  }, [id]);

  const updateButtonState = (currentStatus) => {
    if (currentStatus === 'pending') {
      setButtonText('Process');
    } else if (currentStatus === 'processed') {
      setButtonText('Resolve');
    } else if (currentStatus === 'resolved') {
      setButtonText('Remove');
    }
  };

  const handleButtonClick = () => {
    // Logic to update complaint status based on current status
    console.log(`Clicked button with status: ${status}`);
    // Example: Update backend or state management system
    // For demonstration, we'll just update the status locally
    if (status === 'pending') {
      setStatus('processed');
      setButtonText('Resolve');
    } else if (status === 'processed') {
      setStatus('resolved');
      setButtonText('Remove');
    } else if (status === 'resolved') {
      // Logic to remove complaint or handle removal
      console.log('Complaint removed!');
      // Example: Update backend or state management system
    }
  };

  if (!complaint) {
    return <div>Loading...</div>; // Placeholder for loading state
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper sx={{ p: 3, boxShadow: 3 }}>
        <Typography variant="h4" sx={{ marginBottom: theme.spacing(2) }}>Complaint Details</Typography>
        <Box sx={{ marginBottom: theme.spacing(2) }}>
          <Typography variant="body1" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Complaint: {complaint.text}</Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', marginTop: theme.spacing(1) }}>Name: {complaint.name}</Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>Phone Number: {complaint.phoneNumber}</Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>Email: {complaint.emailId}</Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', marginTop: theme.spacing(1) }}>Complaint Description: {complaint.complaintDescription}</Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', marginTop: theme.spacing(1) }}>Status: {status}</Typography>
        </Box>
        {status !== 'resolved' && (
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ marginTop: theme.spacing(2) }}
            onClick={handleButtonClick}
          >
            {buttonText}
          </Button>
        )}
        {status === 'resolved' && (
          <Button
            variant="contained"
            sx={{ marginTop: theme.spacing(2), backgroundColor: theme.palette.success.main, color: theme.palette.getContrastText(theme.palette.success.main) }}
            size="large"
            onClick={handleButtonClick}
          >
            {buttonText}
          </Button>
        )}
      </Paper>
    </Container>
  );
};

export default ComplaintDetails;
