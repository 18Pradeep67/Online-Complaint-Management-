import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Paper } from '@mui/material';

function UserComplaintDetails() {
  const { id } = useParams(); // Get complaint id from URL
  const [complaint, setComplaint] = useState(null);

  // Sample complaints data (simulated fetching)
  useEffect(() => {
    // Simulating fetching complaint details by id (replace with actual API call)
    const fetchedComplaint = {
      id: id,
      title: `Complaint ${id}`,
      description: `This is the detailed description for Complaint ${id}.`,
      status: 'resolved', // Sample status
      complainedDate: '2024-07-15', // Sample complained date
      resolvedDate: '2024-07-20', // Sample resolved date (if resolved)
    };
    setComplaint(fetchedComplaint);
  }, [id]);

  if (!complaint) {
    return <div>Loading...</div>; // Placeholder for loading state
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ color: '#3f51b5', mb: 2 }}>Complaint Details</Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>Complaint Title:</strong> {complaint.title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>Complaint Description:</strong> {complaint.description}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>Complained Date:</strong> {complaint.complainedDate}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>Status:</strong> {complaint.status}
        </Typography>
        {complaint.status === 'resolved' && (
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Resolved Date:</strong> {complaint.resolvedDate}
          </Typography>
        )}
      </Paper>
    </Container>
  );
}

export default UserComplaintDetails;
