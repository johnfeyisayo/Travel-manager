import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Workspace from './components/Workspace';
import Clients from './components/Clients';
import ClientProfile from './components/ClientProfile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="workspace" element={<Workspace />}></Route>
        <Route path="clients" element={<Clients />}></Route>
        <Route
          path="/clientprofile/:taskId"
          element={<ClientProfile />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
