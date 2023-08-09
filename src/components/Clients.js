import React from 'react';
import Navbar from './Navbar';
import SideNavbar from './SideNavBar';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Clients = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [tasks, setTasks] = useState([
    {
      title: 'Name',
      name: 'Adegoke Olonode',
      email: 'adegoketemitope1909@gmail.com',
      phone: '08160730668',
      address: 'No 2, olonode close, Monato, Ibadan, Oyo State, Nigeria',
      link: '/clientprofile',
    },

    {
      title: 'Email',
      name: 'Adeyemi Olonode',
      email: 'adegoketemitope1909@gmail.com',
      phone: '08160730668',
      address: 'No 2, olonode close, Monato, Ibadan, Oyo State, Nigeria',
      link: '/clientprofile',
    },

    {
      title: 'Phone',
      name: 'Adetola Olonode',
      email: 'adegoketemitope1909@gmail.com',
      phone: '08160730668',
      address: 'No 2, olonode close, Monato, Ibadan, Oyo State, Nigeria',
      link: '/clientprofile',
    },
    {
      title: 'Residential',
      name: 'Ademola Olonode',
      email: 'adegoketemitope1909@gmail.com',
      phone: '08160730668',
      address: 'No 2, olonode close, Monato, Ibadan, Oyo State, Nigeria',
      link: '/clientprofile',
    },
  ]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    const filtered = tasks.filter((task) =>
      task.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredTasks(filtered);
  };

  return (
    <div className="">
      <Navbar />
      <div className="flex">
        <div>
          <SideNavbar />
        </div>
        <div className=" bg-slate-50 w-full pl-16">
          <div>
            <h1 className="mt-20 text-xl font-semibold">Clients</h1>
            <p className="text-gray-400 mt-3">Here&apos;s the client list</p>
          </div>
          <div className="w-11/12 border mt-4 bg-white rounded-md pt-8 p-7">
            <div>
              <div className="flex border">
                <div>
                  <input
                    type="text"
                    placeholder="Search by  name"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="border rounded-md h-10 pl-3 w-48 border-gray-400 "
                  />
                </div>
                <div className="">
                  <button
                    onClick={handleSearchClick}
                    className="border bg-[#e6ac00] w-32 h-10 rounded-md text-white font-semibold"
                  >
                    Search
                  </button>
                </div>
              </div>
              <table className="my-12">
                <thead>
                  <tr className="bg-[#f9f4e1]  rounded-s-xl border-b-2 border-b-[#e6ac00] text-sm">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {(filteredTasks.length > 0 ? filteredTasks : tasks).map(
                    (task, index) => (
                      <tr key={task.id}>
                      <td><Link to={`/task/${task.id}`}>{task.title}</Link></td>
                        <td>{task.email}</td>
                        <td>{task.phone}</td>
                        <td>{task.address}</td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
