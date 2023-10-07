import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Alertbar from './components/Alertbar.jsx';
import Dashboard from './components/Dashboard.jsx';
import ManageTeam from './components/ManageTeam';
import Statement from './components/Statement.jsx';
import Resources from './components/Resources';
import Analytics from './components/Analytics';
import Settings from './components/Settings';
import Search from './components/Search';
import Login from './components/Login';

function App() {

  const authenticated = true;
  
  return (
    <div className="App">
      <BrowserRouter>
      {authenticated && (
          <>
            <Sidebar />
            <Alertbar />
          </>
        )}
        <Routes>
          {authenticated ? (
            <>
              <Route path="*" element={<Navigate to="/Dashboard" />} />
              <Route path="/" element={<Navigate to="/Dashboard" />} />
              <Route path="/Login" element={<Navigate to="/Dashboard" />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Search" element={<Search />} />
              <Route path="/ManageTeam" element={<ManageTeam />} />
              <Route path="/Statement" element={<Statement />} />
              <Route path="/Resources" element={<Resources />} />
              <Route path="/Analytics" element={<Analytics />} />
              <Route path="/Settings" element={<Settings />} />
            </>
          ) : (
            <>
              <Route path="/*" element={<Navigate to="/login" />} />
              <Route path="/login" element={<Login />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
