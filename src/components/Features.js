import React from 'react';
import image1 from "../image/member.jpg";
import image2 from "../image/payment.jpg";
import image3 from "../image/trainer.jpg";

const Features = () => {
  return (
    <div className='mx-10 p-10  bg-gray-100 '>
         <div className='text-4xl font-semibold text-blue-950 '>Our Services</div>
        <div className="grid grid-cols-1 gap-5 bg-gray-100 p-2 sm:grid-cols-2 sm:p-10 lg:grid-cols-3">
  <div className="max-w-md rounded-xl border bg-white p-6 pb-10 text-gray-900">
    <p className="text-lg font-medium">Member Management</p>
    <img src={image1} alt="Member Management" className="my-4 h-40 w-full rounded-lg object-cover" />'
    <p className="text-sm text-gray-500">Effortlessly manage member profiles, track attendance, and handle subscriptions with our intuitive member management system.</p>
    <div className="mt-4 flex items-center text-sm text-gray-500">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span className="ml-2">Updated 2 days ago</span>
    </div>
  </div>

  <div className="max-w-md rounded-xl border bg-white p-6 pb-10 text-gray-900">
    <p className="text-lg font-medium">Online Payments</p>
    <img src={image2} alt="Online Payments" className="my-4 h-40 w-full rounded-lg object-cover" />
    <p className="text-sm text-gray-500">Simplify your billing process with secure online payment options, automated invoicing, and real-time transaction tracking.</p>
    <div className="mt-4 flex items-center text-sm text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span className="ml-2">Updated 5 days ago</span>
    </div>
  </div>

  <div className="max-w-md rounded-xl border bg-white p-6 pb-10 text-gray-900">
    <p className="text-lg font-medium">Trainer & Class Scheduling</p>
    <img src={image3} alt="Trainer & Class Scheduling" className="my-4 h-40 w-full rounded-lg object-cover" />
    <p className="text-sm text-gray-500">Easily schedule trainers and classes, manage bookings, and send automated reminders to keep your members engaged and informed.</p>
    <div className="mt-4 flex items-center text-sm text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="ml-2">Updated 1 week ago</span>
    </div>
   
  </div>
</div>
</div>
  );
}

export default Features