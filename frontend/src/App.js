// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './page/landing';
import Signup from './page/signup';
import Login from './page/login';
import Dashboard from './page/dashboard';
import OtpVerify from './page/otpverify';
import RegistrationSuccess from './page/registrationSuccess';
import Leaderboard from './page/leaderboard.js';
import Rule from './page/rules.js'
import Task from './page/task.js'

const PrivateRoute = ({ element: Element }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Simplified authentication check
  return isAuthenticated ? <Element /> : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ca" element={<Landing />} />
        <Route path="/ca/signup" element={<Signup />} /> 
        <Route path="/ca/login" element={<Login />} />
        <Route path="/ca/otpVerify" element={<OtpVerify />} />
        {/* <Route path="/ca/dashboard" element={<PrivateRoute element={Dashboard} />} /> */}
        <Route path="/ca/registrationSuccess" element={<PrivateRoute element={RegistrationSuccess} />} />
        <Route path="/ca/leaderboard" element={<Leaderboard />} />
        <Route path="/ca/rule" element={<Rule />} />
        {/* <Route path="/registrationSuccess" element={<RegistrationSuccess/>}></Route> */}
        <Route path="/ca/task" element={<Task />} />
        <Route path="*" element={<Navigate to="/ca" />} />
      </Routes>
    </Router>
  );
}

export default App;
