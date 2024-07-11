import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Complaints from './components/Complaints';
import ComplaintDetails from './components/ComplaintDetails';
import Navbar from './components/Navbar';
import UserNavBar from './components/UserNavBar';
import { Container } from '@mui/material';
import MyProfile from './components/MyProfile';
import SubmitComplaint from './components/SubmitComplaint';
import UserComplaintDetails from './components/UserComplaintDetails';
import UserComplaints from './components/UserComplaints';
import UserProfile from './components/UserProfile';
import AdminNavbar from './components/AdminNavbar';
import AdminProfile from './components/AdminProfile';
import AdminComplaints from './components/AdminComplaints';
import AdminComplaintDetails from './components/AdminComplaintDetails';

function App() {
  return (
    <div className="App">
      {/*<Navbar />*/}
      {/*<UserNavBar/>*/}
      <AdminNavbar/>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/complaints/:id" element={<ComplaintDetails />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/submitcomplaint" element={<SubmitComplaint />} />
          <Route path="/usercomplaints" element={<UserComplaints />} />
          <Route path="/usercomplaints/:id" element={<UserComplaintDetails />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/adminprofile" element={<AdminProfile/>} />
          <Route path="/admincomplaints" element={<AdminComplaints/>} />
          <Route path="/admincomplaints/:id" element={<AdminComplaintDetails/>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
