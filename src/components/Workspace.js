import React from 'react';
import Navbar from './Navbar';
import { BsArrowRight } from 'react-icons/bs';
import SideNavbar from './SideNavBar';

const Workspace = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div>
          <SideNavbar />
        </div>
        <div className="bg-slate-50 w-full pl-16">
          <h1 className="mt-20 text-xl font-semibold">Your Workspace</h1>
          <p className="text-gray-400 mt-3">Welcome, xxx</p>
          <p className="pt-10 text-sm font-bold">Overview</p>
          <div className="flex flex-wrap gap-x-20 gap-y-2 mt-3">
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
                <div className="flex justify-between bg-[#f9f4e1]">
                  <h1 className="text-xs font-semibold pl-3 pb-2 pt-1">
                    Activity Report
                  </h1>
                  <div className="flex text-xs text-[#e6ac00] pt-1 justify-between pr-7">
                    <p className="w-36">View full activity report</p>
                    <BsArrowRight className="mt-1" />
                  </div>
                </div>
                <div className="flex text-xs w-11/12 text-gray-400 justify-between mt-2">
                  <hr className="w-48 my-2 font-bold border-t-2" />
                  <p>Tuesday (18th Sept. 2019)</p>
                </div>
                <div className="flex text-xs font-semibold p-8">
                  <div>
                    <p className="text-gray-400">You added a new client.</p>
                    <div className="text-right">
                      <p className="text-[#e6ac00]">Odusote Mayokun</p>
                      <p className="text-gray-400 border-l-2 border-l-[#e6ac00] w-28 ml-7 px-2 py-1 bg-[#f9f4e1]">
                        Status: Pending
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="border w-96 h-40 border-t-8 border-t-[#e6ac00] shadow-md">
                <div className="flex bg-[#f9f4e1] justify-between">
                  <h1 className="text-xs font-semibold pl-3 pb-2 pt-1">
                    Tasks that are due
                  </h1>
                  <div className="flex text-xs text-[#e6ac00] pt-1 w-28 justify-between pr-3">
                    <p>create task</p>
                    <BsArrowRight className="mt-1" />
                  </div>
                </div>
                <div className="text-xs h-16 font-semibold p-3 my-3 bg-[#f9f4e1]">
                  <div>
                    <p className="font-semibold">
                      Follow up with{' '}
                      <span className="text-[#e6ac00]">Odusote</span>
                    </p>
                  </div>
                  <div className="flex font-normal justify-between w-60 pt-1">
                    <p className="ml-1">Due on 1/21/2021</p>
                    <p>Created on 1/15/2021</p>
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
