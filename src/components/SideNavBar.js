import React from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import { RiDashboardFill } from 'react-icons/ri';
import { FaPeopleGroup } from 'react-icons/fa6';
import { FaTasks } from 'react-icons/fa';
import { CgNotes } from 'react-icons/cg';
import { TbReportAnalytics, TbReportMoney } from 'react-icons/tb';
import { AiOutlineMessage } from 'react-icons/ai';
import { useState } from 'react';
import Logo from './images/Logo.png';
import { Link } from 'react-router-dom';

const SideNavbar = () => {
  const [open, setOpen] = useState(true);
  const menus = [
    { title: 'Workspace', icone: <RiDashboardFill />, link: '/workspace' },
    { title: 'Clients', icon: <FaPeopleGroup />, link: '/clients' },
    { title: 'Schedule Appointments', icon: <CgNotes /> },
    { title: 'Payment', icon: <TbReportMoney /> },
    { title: 'Task', icon: <FaTasks /> },
    { title: 'Message', icon: <AiOutlineMessage /> },
    { title: 'Report', icon: <TbReportAnalytics /> },
  ];

  return (
    <div
      className={`bg-white h-screen ${
        open ? 'w-72' : 'w-20'
      } duration-300 p-4 relative`}
    >
      <BsArrowLeftShort
        className={`bg-white text-[#e6ac00] text-3xl rounded-full absolute -right-4 border border-[#e6ac00] cursor-pointer ${
          !open && 'rotate-180'
        }`}
        onClick={() => setOpen(!open)}
      />
      <div>
        <img
          src={Logo}
          alt=""
          className={`h-20 mx-auto duration-200 ${!open && 'w-25'}`}
        />
      </div>
      <ul className="pt-2 mt-3">
        {menus.map((menu, index) => (
          <>
            <li
              key={index}
              className="text-gray-500 font-bold text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#e6ac00]  rounded-md mt-5"
            >
              <span className="text-2l block float-left">
                {menu.icon ? menu.icon : <RiDashboardFill />}
              </span>
              <span
                className={`text-base font-medium flex-1 ${!open && 'hidden'}`}
              >
                <a href={menu.title}>{menu.title}</a>
              </span>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default SideNavbar;
