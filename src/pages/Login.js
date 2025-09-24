import React from 'react';
import image from "../image/login.jpg";

const Login = () => {
  return (
    <div className='mx-10 pt-10 w-full h-screen'>
        <img src={image} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover opacity-100" />
        
    </div>
  )
}

export default Login