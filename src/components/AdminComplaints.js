import React, { useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Paper, Pagination } from '@mui/material';
import { Link } from 'react-router-dom';

function AdminComplaints() {
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const complaintsPerPage = 5; // Number of complaints per page

  // Sample complaints data
  const complaints = [
    { id: 1, title: 'Complaint 1', description: 'This is the first complaint.' },
    { id: 2, title: 'Complaint 2', description: 'This is the second complaint.' },
    { id: 3, title: 'Complaint 3', description: 'This is the third complaint.' },
    { id: 4, title: 'Complaint 4', description: 'This is the fourth complaint.' },
    { id: 5, title: 'Complaint 5', description: 'This is the fifth complaint.' },
    { id: 6, title: 'Complaint 6', description: 'This is the sixth complaint.' },
    { id: 7, title: 'Complaint 7', description: 'This is the seventh complaint.' },
    { id: 8, title: 'Complaint 8', description: 'This is the eighth complaint.' },
    { id: 9, title: 'Complaint 9', description: 'This is the ninth complaint.' },
    { id: 10, title: 'Complaint 10', description: 'This is the tenth complaint.' },
    { id: 11, title: 'Complaint 11', description: 'This is the eleventh complaint.' },
    { id: 12, title: 'Complaint 12', description: 'This is the twelfth complaint.' },
    { id: 13, title: 'Complaint 13', description: 'This is the thirteenth complaint.' },
    { id: 14, title: 'Complaint 14', description: 'This is the fourteenth complaint.' },
    { id: 15, title: 'Complaint 15', description: 'This is the fifteenth complaint.' },
  ];

  // Pagination logic
  const indexOfLastComplaint = currentPage * complaintsPerPage;
  const indexOfFirstComplaint = indexOfLastComplaint - complaintsPerPage;
  const currentComplaints = complaints.slice(indexOfFirstComplaint, indexOfLastComplaint);

  // Change page
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Container>
      <Paper sx={{ p: 2, mt: 2 }}>
        <Typography variant="h4">Complaints</Typography>
        <List>
          {currentComplaints.map(complaint => (
            <ListItem button component={Link} to={`/admincomplaints/${complaint.id}`} key={complaint.id}>
              <ListItemText primary={complaint.title} secondary={complaint.description} />
            </ListItem>
          ))}
        </List>
        <Pagination
          count={Math.ceil(complaints.length / complaintsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          size="large"
          sx={{ mt: 2, justifyContent: 'center' }}
        />
      </Paper>
    </Container>
  );
}

export default AdminComplaints;
