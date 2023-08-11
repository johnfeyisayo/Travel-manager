import React from 'react';
import { BsTriangle } from 'react-icons/bs';
import ProfilePicture from './images/Profile-picture.png';

const Notifications = () => {
  return (
    <div className="relative">
      <BsTriangle className="absolute top-12 right-6" />
      <div className="border text-xs absolute w-96 -right-36 top-20 bg-white px-5 py-4 rounded-xl shadow-lg">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold">Notifications</h3>
          </div>
          <div>
            <h3 className="text-[#e6ac00] font-bold">Mark all as read</h3>
          </div>
        </div>

        <hr className="mt-6" />

        <div className="leading-5">
          <div className="flex justify-between mt-3">
            <div>
              <img src={ProfilePicture} alt="" className="h-10" />
            </div>
            <div>
              <h4 className=" font-bold">Odusote</h4>
              <p className="text-gray-400">Reacted to your appointment on ..</p>
            </div>
            <div>
              <p className="text-[#e6ac00]">10 mins ago</p>
            </div>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between mt-3">
            <div>
              <img src={ProfilePicture} alt="" className=" h-10" />
            </div>
            <div>
              <h4 className="font-bold">Victoria</h4>
              <p className="text-gray-400">Mentioned you in a comment on ..</p>
            </div>
            <div>
              <p className="text-[#e6ac00]">2 hours ago</p>
            </div>
          </div>

          <hr className="my-3" />

          <div className="flex mt-3 justify-between">
            <div>
              <img src={ProfilePicture} alt="" className=" h-10" />
            </div>
            <div>
              <h4 className="font-bold">Odusote</h4>
              <p className="text-gray-400">Mentioned you in a comment on ..</p>
            </div>
            <div>
              <p className="text-[#e6ac00]">8 hours ago</p>
            </div>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between mt-3">
            <div>
              <img src={ProfilePicture} alt="" className=" h-10" />
            </div>
            <div>
              <h4 className="font-bold">Mayokun</h4>
              <p className="text-gray-400">Reacted to your assignment on ..</p>
            </div>
            <div>
              <p>2 days ago</p>
            </div>
          </div>

          <hr className="my-3" />

          <div className="flex mt-3 justify-between">
            <div>
              <img src={ProfilePicture} alt="" className=" h-10" />
            </div>
            <div>
              <h4 className="font-bold">Adegoke</h4>
              <p className="text-gray-400">
                John: reacted ✌ to a comment on ..
              </p>
            </div>
            <div>
              <p>2 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
