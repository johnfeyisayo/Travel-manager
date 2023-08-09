import React from 'react';
import Navbar from './Navbar';
import { BsArrowRight } from 'react-icons/bs';
import SideNavbar from './SideNavBar';

const Workspace = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex">
        <div>
          <SideNavbar />
        </div>
        <div className=" bg-slate-50 w-full pl-16">
          <h1 className="mt-20 text-xl font-semibold">Your Workspace</h1>
          <p className="text-gray-400 mt-3">Welcome, xxx</p>
          <p className="pt-10 text-sm font-bold">Overview</p>
          <div className="flex flex-wrap gap-x-20 gap-y-2">
            <div className="border w-96 h-40 border-t-8 border-t-[#e6ac00] shadow-md">
              <h1 className="bg-[#f9f4e1] text-xs font-semibold pl-3 pb-2 pt-1">
                Today&apos;s Agenda
              </h1>
              <div className="flex text-xs font-semibold p-8">
                <div>
                  <p className="text-gray-400">
                    You don&apos;t have any event schedule for today.
                  </p>
                </div>
                <div>
                  <p className="ml-1 text-[#e6ac00]">Add</p>
                </div>
              </div>
            </div>
            <div>
              <div className="border w-96 h-52 border-t-8 border-t-[#e6ac00] shadow-md">
                <h1 className="bg-[#f9f4e1] text-xs font-semibold pl-3 pb-2 pt-1">
                  Today&apos;s Agenda
                </h1>
                <div className="flex text-xs font-semibold p-8">
                  <div>
                    <p className="text-gray-400">
                      You don&apos;t have any event schedule for today.
                    </p>
                  </div>
                  <div>
                    <p className="ml-1 text-[#e6ac00]">Add</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="border w-96 h-40 border-t-8 border-t-[#e6ac00] shadow-md">
                <div className="flex bg-[#f9f4e1] justify-between">
                  <h1 className="text-xs font-semibold pl-3 pb-2 pt-1">
                    Today&apos;s Agenda
                  </h1>
                  <div className="flex text-xs text-[#e6ac00] border w-28 justify-between pr-3">
                    <p>create task</p>
                    <BsArrowRight className="mt-1" />
                  </div>
                </div>
                <div className="text-xs font-semibold p-8">
                  <div>
                    <p className="font-semibold">
                      Follow up with <span>Odusote</span>
                    </p>
                  </div>
                  <div>
                    <p className="ml-1 text-[#e6ac00]">Add</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
