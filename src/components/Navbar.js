import React, { useState } from 'react';
import { BsBell } from 'react-icons/bs';
import ProfilePicture from './images/Profile-picture.png';
import Notification from './Notifications';

const Navbar = () => {
  const [bellOpen, setBellOpen] = useState(false);
  const [isBellOpen, setIsBellOpen] = useState(false);

  const handleBellIconClick = () => {
    setIsBellOpen(!isBellOpen);
    setBellOpen(!bellOpen);
  };

  return (
    <div>
      <div className="flex gap-x-7 justify-end border px-20">
        <BsBell
          className="my-4 cursor-pointer absolute right-60"
          onClick={() => handleBellIconClick()}
        />
        {bellOpen && (
          <>
            <Notification />
          </>
        )}
        <p className="h-7 my-3 font-bold text-sm">Kelin</p>
        <img src={ProfilePicture} alt="" className="h-12 cursor-pointer" />
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
