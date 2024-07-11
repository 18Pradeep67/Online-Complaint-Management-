import React, { useState } from 'react';
import { Container, Typography, Paper, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, TextField, Button } from '@mui/material';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const lineData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Complaints',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgb(75, 192, 192)',
    },
  ],
};

const barData = {
  labels: ['Resolved', 'Pending', 'In Progress'],
  datasets: [
    {
      label: 'Complaints Status',
      data: [50, 30, 20],
      backgroundColor: ['#4caf50', '#ff5722', '#ffeb3b'],
      borderColor: ['#388e3c', '#d32f2f', '#fbc02d'],
      borderWidth: 1,
    },
  ],
};

function createData(name, date, status) {
  return { name, date, status };
}

const initialRows = [
  createData('Complaint 1', '2024-07-01', 'Resolved'),
  createData('Complaint 2', '2024-07-02', 'Pending'),
  createData('Complaint 3', '2024-07-03', 'In Progress'),
  createData('Complaint 4', '2024-07-01', 'Resolved'),
  createData('Complaint 5', '2024-07-02', 'Pending'),
  createData('Complaint 6', '2024-07-03', 'In Progress'),
  createData('Complaint 7', '2024-07-01', 'Resolved'),
  createData('Complaint 8', '2024-07-02', 'Pending'),
  createData('Complaint 9', '2024-07-03', 'In Progress'),
  createData('Complaint 10', '2024-07-01', 'Resolved'),
  createData('Complaint 11', '2024-07-02', 'Pending'),
  createData('Complaint 12', '2024-07-03', 'In Progress'),
  createData('Complaint 13', '2024-07-01', 'Resolved'),
  createData('Complaint 14', '2024-07-02', 'Pending'),
  createData('Complaint 15', '2024-07-03', 'In Progress'),
];

function Dashboard() {
  const [rows, setRows] = useState(initialRows);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const filteredRows = initialRows.filter(row =>
      row.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setRows(filteredRows);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 3, backgroundColor: '#3f51b5', color: 'white' }}>
        <Typography variant="h4" align="center">DASHBOARD</Typography>
        <Typography variant="body1" align="center">Welcome to the Complaint Dashboard!</Typography>
      </Paper>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 3, backgroundColor: '#ff5722', color: 'white' }}>
            <Typography variant="h6">User Statistics</Typography>
            <Typography variant="body1">Total Users: 1000</Typography>
            <Typography variant="body1">Active Users: 200</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 3, backgroundColor: '#4caf50', color: 'white' }}>
            <Typography variant="h6">Notifications</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <NotificationsIcon sx={{ mr: 1 }} />
              <Typography variant="body2">New complaint received</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <NotificationsIcon sx={{ mr: 1 }} />
              <Typography variant="body2">Complaint #123 resolved</Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, height: 450 }}>
                <Typography variant="h6" sx={{ color: '#3f51b5' }}>Monthly Complaints</Typography>
                <Box sx={{ p: 2,height: 400 }}>
                  <Line data={lineData} options={{ maintainAspectRatio: false }} />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, height: 450 }}>
                <Typography variant="h6" sx={{ color: '#3f51b5' }}>Complaints Status</Typography>
                <Box sx={{ p: 2,height: 400 }}>
                  <Bar data={barData} options={{ maintainAspectRatio: false }} />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
            <Typography variant="h6" sx={{ color: '#3f51b5' }}>Recent Complaints</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search Complaints"
                value={searchTerm}
                onChange={handleInputChange}
                sx={{ mr: 1 }}
              />
              <Button variant="contained" color="primary" onClick={handleSearch} startIcon={<SearchIcon />}>
                Search
              </Button>
            </Box>
            <TableContainer sx={{ maxHeight: 200, overflowY: rows.length > 5 ? 'auto' : 'initial' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: '#3f51b5' }}>Complaint</TableCell>
                    <TableCell sx={{ color: '#3f51b5' }}>Date</TableCell>
                    <TableCell sx={{ color: '#3f51b5' }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
