import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
// import Dashboard from './components/Dashboard';
import Workspace from './components/Workspace';
import Clients from './components/Clients';
import ClientProfile from './components/ClientProfile';
import Navbar from './components/Navbar';
import SideNavbar from './components/SideNavBar';
import { useState } from 'react';
// import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      title: 'Name',
      name: 'Adegoke Olonode',
      email: 'adegoketemitope1909@gmail.com',
      address: 'No 2, olonode close, Monato, Ibadan, Oyo State, Nigeria',
    },

    {
      title: 'Name',
      name: 'Adegoke Olonode',
      email: 'adegoketemitope1909@gmail.com',
      address: 'No 2, olonode close, Monato, Ibadan, Oyo State, Nigeria',
    },

    {
      title: 'Name',
      name: 'Adegoke Olonode',
      email: 'adegoketemitope1909@gmail.com',
      address: 'No 2, olonode close, Monato, Ibadan, Oyo State, Nigeria',
    },
    {
      title: 'Name',
      name: 'Adegoke Olonode',
      email: 'adegoketemitope1909@gmail.com',
      address: 'No 2, olonode close, Monato, Ibadan, Oyo State, Nigeria',
    },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="sidenavbar" element={<SideNavbar />}></Route>
        <Route path="workspace" element={<Workspace />}></Route>
        <Route
          path="clients"
          element={<Clients />}
          tasks={tasks}
          setTasks={setTasks}
        ></Route>
        <Route path="client profile" element={<ClientProfile />}></Route>
        <Route path="navbar" element={<Navbar />}></Route>
      </Routes>
    </div>
  );
}

export default App;
