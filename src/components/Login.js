import React from 'react';
import Logo from './images/Logo.png';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
    navigate('/workspace');
  };
  return (
    <form
      className="bg-[#e6ac00] border h-screen"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="m-auto mt-28 pt-3 w-96 h-96 bg-white">
        <div className="flex justify-between w-4/5 m-auto my-5">
          <div>
            <p className=" text-sm font-bold">Login</p>
            <p className="text-xs my-2">Login to your account</p>
          </div>
          <div>
            <img className=" w-12" src={Logo} alt="" />
          </div>
        </div>
        <div className="w-4/5 m-auto h-1/2 content-between">
          <p className="text-xs">Email</p>
          <input
            type="email"
            className="border w-full h-10 my-3 px-3"
            placeholder="john@gmail.com..."
            {...register('email', { required: 'This is required' })}
          />
          <p className="text-xs">Password</p>
          <input
            type="password"
            className="border w-full h-10 my-3 px-3"
            placeholder="password..."
            {...register('password', {
              required: 'This is required',
              minLength: 4,
            })}
          />
        </div>
        <div className="">
          <button className="login-button w-2/3 mx-11 h-10 text-white bg-[#e6ac00] hover:bg-[#c49403] cursor-pointer">
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
