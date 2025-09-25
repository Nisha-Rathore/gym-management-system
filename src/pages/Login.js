import React from 'react';
import image from "../image/login photo.jpg";
import Navbar from '../components/Navbar';

const Login = () => {
  return (
    <>
    <div className='mx-0 '>
    <Navbar />
    <div className='w-full h-screen relative '>
        <img src={image} alt="Background" className="absolute top-0 left-10 w-cover h-auto" />
        <div className='flex justify-center items-center h-full'>
            <form className='bg-black p-10 rounded-lg shadow-md w-full max-w-md relative z-10 opacity-60'>
                <h2 className='text-2xl font-bold mb-6 text-center text-white opacity-100'>Login to GMS</h2>
                <div className='mb-4'>
                    <label className='block text-gray-200 mb-2' htmlFor='username'>Username</label>
                    <input className='w-full px-3 py-2 border border-gray-300 rounded' type='text' id='username' name='username' required />
                </div>
                <div className='mb-6'>
                    <label className='block text-gray-200 mb-2' htmlFor='password'>Password</label>
                    <input className='w-full px-3 py-2 border border-gray-300 rounded' type='password' id='password' name='password' required />
                </div>
                <div className='mb-6 flex items-center'>
                    <input className='mr-2 leading-tight' type='checkbox' id='remember' name='remember' />
                    <label className='text-gray-200' htmlFor='remember'>Remember me</label>
                </div>
                <div className='mb-6'>
                    <a className='text-orange-500 hover:underline' href='#'>Forgot Password?</a>
                    <a className='text-orange-400 hover:underline' href='#'>Create an Account</a>
                </div>

                <button className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300' style={{backgroundColor:"#190630ff",opacity:'100%'}} type='submit'>Login</button>
            </form>
         </div>
       </div>
    </div>
    </>
  )
}

export default Login;