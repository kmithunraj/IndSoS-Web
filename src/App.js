import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Alertbar from './components/Alertbar.jsx';
import Dashboard from './components/Dashboard.jsx';
import ManageTeam from './components/ManageTeam';
import Statement from './components/Statement.jsx';
import Resources from './components/Resources';
import Analytics from './components/Analytics';
import Settings from './components/Settings';
import Search from './components/Search';



function App() {





  return (
    <div className="App">

      <BrowserRouter>

        <Sidebar />
        <Alertbar />

        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/ManageTeam" element={<ManageTeam />} />
          <Route path="/Statement" element={<Statement />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>

        

      </BrowserRouter>

    </div>
  );
}

export default App;
