import React from 'react';
import Navbar from './Navbar';
import SideNavbar from './SideNavBar';
import ProfileImage from './images/Screen Shot 2023-08-09 at 1.15.35 PM.png';

const ClientProfile = () => {
  return (
    <div>
      <Navbar />
      <div className='flex'>
      <SideNavbar />
      <div className='bg-slate-50 w-full pl-16'>
      <div className=''>
            <h1 className="mt-20 text-xl font-semibold">Client Profile</h1>
            <p className="text-gray-400 mt-3">View Client Profile here</p>
          </div>
          <div className='border p-8 mt-7 bg-white w-11/12 rounded-md'>
          <div className='bg-slate-50 border mt-8 rounded-md w-11/12 py-3 px-3'>
          <p>Client's picture</p>
          <div className='flex w-96 justify-between mt-7'>
          <div>
          <img src={ProfileImage} alt='' className='h-20 rounded-full' />
          </div>
          <div>
          <p className='font-semibold'>Odusote Mayokun</p>
          <p className='text-gray-400'>adegoketemitope1909@gmail.com</p>
          <div className='flex justify-between text-gray-400'>
            <p>Female</p>
            <p>54 Year&apos;s old</p>
            <p>Ngerian</p>
          </div>
          </div>
          </div>
          </div>
          <div className='flex leading-8 w-11/12 text-xs justify-between mt-12 '>
            <div>
            <div>
              <p>Full Name</p>
              <p>Odusote Mayokun</p>
            </div>
            <div>
              <p>Application Fullname <span className=' text-red-500'>as shown in passport</span></p>
              <p>Odusote Mayokun Kemi</p>
            </div>
            <div>
              <p>Place Of Birth</p>
              <p>Nigeria</p>
            </div>
            <div>
            <p>Date Of Birth</p>
            <p>04/11/12</p>
            </div>
            <div>
              <p>Marital Status</p>
              <p>Married</p>
            </div>
            <div>
              <p>Current Occupation</p>
              <p>Engineer</p>
            </div>
            <div>
              <p>Residential Address</p>
              <p>No 2, Oloro Street Bank Olodo, Ibadan, Oyo State, Nigeria</p>
            </div>
            <div>
              <p>Country Of Interest</p>
              <p>Iceland</p>
            </div>
            </div>
    

            <div>
            <div>
              <p>Email</p>
              <p>adegoketemitope1909@abc.com</p>
            </div>
            <div>
              <p>Gender</p>
              <p>Female</p>
            </div>
            <div>
              <p>Country Of Citizenship</p>
              <p>Nigeria, Uganda</p>
            </div>
            <div>
            <p>Education <span className='text-red-500'>Client&apos;s Highest Level of Education</span></p>
            <p>Bachelor&apos;s Degree</p>
            </div>
            <div>
              <p>Phone Number</p>
              <p>+234(0)8160730668</p>
            </div>
            <div>
              <p>Mailing Address</p>
              <p>No 2, Oloro Street Bank Olodo, Ibadan, Oyo State, Nigeria</p>
            </div>
            <div>
              <p>Purpose Of Traveling</p>
              <p>Trading</p>
            </div>
            </div>
          </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default ClientProfile;
