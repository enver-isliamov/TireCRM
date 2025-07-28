import React from 'react';
import { HashRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import AddClient from './pages/AddClient';
import Settings from './pages/Settings';
import Layout from './components/Layout';

const AppLayout = () => (
  <Layout>
    <Outlet />
  </Layout>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/clients/add" element={<AddClient />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
