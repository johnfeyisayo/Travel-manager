import React from 'react';
import Navbar from './Navbar';
import SideNavbar from './SideNavBar';
import ProfileImage from './images/Screen Shot 2023-08-09 at 1.15.35 PM.png';
import { Link } from 'react-router-dom';

const ClientProfile = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <SideNavbar />
        <div className="bg-slate-50 w-full pl-16">
          <div>
            <h1 className="mt-20 text-xl font-semibold">Client Profile</h1>
            <p className="text-gray-400 mt-3">View Client Profile here</p>
          </div>
          <div className="border p-8 mt-7 bg-white w-11/12 rounded-md">
            <div className="bg-slate-50 border mt-8 rounded-md w-11/12 py-3 px-3">
              <p>Client's picture</p>
              <div className="flex w-96 justify-between mt-7">
                <div>
                  <img
                    src={ProfileImage}
                    alt=""
                    className="h-20 rounded-full cursor-pointer"
                  />
                </div>
                <div>
                  <p className="font-semibold">Odusote Mayokun</p>
                  <p className="text-gray-400">adegoketemitope1909@gmail.com</p>
                  <div className="flex justify-between text-gray-400">
                    <p>Female</p>
                    <p>54 Year&apos;s old</p>
                    <p>Nigerian</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex leading-8 w-11/12 text-xs justify-between mt-12 ">
              <div>
                <div>
                  <p className="text-gray-400 font-semibold">Full Name</p>
                  <p className="font-bold text-sm">Odusote Mayokun</p>
                </div>
                <div>
                  <p className="text-gray-400 font-semibold">
                    Application Fullname{' '}
                    <span className="text-red-500">as shown in passport</span>
                  </p>
                  <p className="font-bold text-sm">Odusote Mayokun Kemi</p>
                </div>
                <div>
                  <p className="text-gray-400 font-semibold">Place Of Birth</p>
                  <p className="font-bold text-sm">Nigeria</p>
                </div>
                <div>
                  <p className="text-gray-400 font-semibold">Date Of Birth</p>
                  <p>04/11/12</p>
                </div>
                <div>
                  <p className="text-gray-400 font-semibold">Marital Status</p>
                  <p className="font-bold text-sm">Married</p>
                </div>
                <div>
                  <p className="text-gray-400 font-semibold">
                    Current Occupation
                  </p>
                  <p className="font-bold text-sm">Engineer</p>
                </div>
                <div>
                  <p className="text-gray-400 font-semibold">
                    Residential Address
                  </p>
                  <p className="font-bold text-sm">
                    No 2, Oloro Street Bank Olodo, Ibadan, Oyo State, Nigeria
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 font-semibold">
                    Country Of Interest
                  </p>
                  <p className="font-bold text-sm">Iceland</p>
                </div>
              </div>

              <div>
                <div>
                  <p className="text-gray-400 font-semibold">Email</p>
                  <p className="font-bold text-sm">
                    adegoketemitope1909@abc.com
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 font-semibold">Gender</p>
                  <p className="font-bold text-sm">Female</p>
                </div>
                <div>
                  <p className="text-gray-400 font-semibold">
                    Country Of Citizenship
                  </p>
                  <p className="font-bold text-sm">Nigeria, Uganda</p>
                </div>
                <div>
                  <p className="text-gray-400 font-semibold">
                    Education{' '}
                    <span className="text-red-500">
                      Client&apos;s Highest Level of Education
                    </span>
                  </p>
                  <p className="font-bold text-sm">Bachelor&apos;s Degree</p>
                </div>
                <div>
                  <p className="text-gray-400 font-semibold">Phone Number</p>
                  <p className="font-bold text-sm">+234(0)8160730668</p>
                </div>
                <div>
                  <p className="text-gray-400 font-semibold">Mailing Address</p>
                  <p className="font-bold text-sm">
                    No 2, Oloro Street Bank Olodo, Ibadan, Oyo State, Nigeria
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 font-semibold">
                    Purpose Of Traveling
                  </p>
                  <p className="font-bold text-sm">Trading</p>
                </div>
              </div>
            </div>
            <Link to="/clients">
              <div className="text-right">
                <button className="login-button w-32 text-sm font-semibold rounded-md mx-11 h-10 text-white bg-[#e6ac00] hover:bg-[#c49403] cursor-pointer">
                  Back
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
