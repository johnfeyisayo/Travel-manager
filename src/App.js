import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
// import Dashboard from './components/Dashboard';
import Workspace from './components/Workspace';
import Clients from './components/Clients';
import ClientProfile from './components/ClientProfile';
import Navbar from './components/Navbar';
import SideNavbar from './components/SideNavBar';

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="sidenavbar" element={<SideNavbar />}></Route>
        <Route path="workspace" element={<Workspace />}></Route>
        <Route
          path="clients"
          element={<Clients />}></Route>
        <Route path="/clientprofile/:task.id" element={<ClientProfile />}></Route>
        <Route path="navbar" element={<Navbar />}></Route>
      </Routes>
    </div>
  );
}

export default App;
