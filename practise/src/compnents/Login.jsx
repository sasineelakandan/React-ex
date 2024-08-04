import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function LoginForm({setIsVisible}) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };
  const[email,setemail]=useState()
  const[pass,setpass]=useState()

   
  const useremail='devasasi@gmail.com'
   const userpass='85858585'

 function handlelogin(){
  if(email==useremail&&userpass==pass){
    alert('login successful')
}else{

}
 }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
          <div>
            <label className="block font-semibold text-gray-600 mb-2">Email</label>
            <input
              type="text"
              placeholder="email@example.com"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email format'
                }

              })}
            
              onChange={(e)=>setemail(e.target.value)}
              className={`w-full border p-3 rounded focus:outline-none focus:ring-2 ${
                errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>
          <div>
            <label className="block font-semibold text-gray-600 mb-2">Password</label>
            <input
              type="password"
              placeholder="********"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long'
                }
              })}
              
              onChange={(e)=>setpass(e.target.value)}
              className={`w-full border p-3 rounded focus:outline-none focus:ring-2 ${
                errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                {...register('rememberMe')}
                className="mr-2 focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="remember-me" className="text-gray-600">Remember me</label>
            </div>
            <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
          </div>
          <button onClick={handlelogin} type="submit" className="w-full bg-blue-500 text-white font-semibold py-3 rounded hover:bg-blue-600 transition duration-300">Login</button>
        </form>
      </div>
      
      
    </div>
  );
}

export default LoginForm;

