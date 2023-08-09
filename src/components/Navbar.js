import React from 'react';
import { BsBell } from 'react-icons/bs';
import ProfilePicture from './images/Profile-picture.png';
// import CourseIcon from './images/';
// import ActiveCourseIcon from '../images/course-colored.svg';
// import AssignmentIcon from '../images/assignment-icon.svg';
// import ActiveAssignmentIcon from '../images/assignment-colored.svg';
// import FaqIcon from '../images/faq-icon.svg';
// import ActiveFaqIcon from '../images/faq-colored.svg';
// import SettingsIcon from './images/';
// import ActiveSettingsIcon from '../images/settings-icon-colored.svg';
// import LogOutIcon from '../images/logout-icon.svg';
// import MainProfilePic from '../images/main-profile-pic.png';

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-end">
        <BsBell className="mr-3 my-4" />
        <p className="mr-3 h-7 my-3 font-bold text-sm">Kelin</p>
        <img src={ProfilePicture} alt="" className="h-12 mr-4" />
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
