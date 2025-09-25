import React from 'react'
import Navbar from '../components/Navbar'

const Main = () => {
  return (
    <div className=''>
        <Navbar />
        <div className="h-screen px-10">
  <div className="flex h-5/6 w-80 flex-col  bg-purple-100">
    <ul className="flex flex-col">
      <li className="relative transition">
        <input className="peer hidden" type="checkbox" id="menu-1" checked />
        <div className="relative m-2 flex items-center rounded-xl border-b-4 border-gray-300 bg-gray-200 py-3 pl-5 text-sm text-gray-500">
          <span className="mr-5 flex w-5 text-gray-500">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      className="h-6 w-6"
      
    >
      <path
        fill="currentColor"
        d="M19 5v2h-4V5zM9 5v6H5V5zm10 8v6h-4v-6zM9 17v2H5v-2zM21 3h-8v6h8zM11 3H3v10h8zm10 8h-8v10h8zm-10 4H3v6h8z"
      ></path>
    </svg>
</span>
          Dashboard
          <label for="menu-1" className="absolute inset-0 h-full w-full cursor-pointer"></label>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="peer-checked:rotate-180 absolute right-0 top-6 mr-5 ml-auto h-4 text-gray-500 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <ul className="duration-400 peer-checked:max-h-96 m-2 flex max-h-0 flex-col overflow-hidden rounded-2xl bg-gray-100 transition-all duration-300">
          <li className="m-2 flex cursor-pointer rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-white">
            <span className="mr-5">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2048 2048"
      width="1em"
      height="1em"
      className='h-5 w-5'
    >
      <path
        fill="currentColor"
        d="M1792 1280h256v768H1024v-768h256v-256h512zm-384-128v128h256v-128zm512 768v-256h-128v128h-128v-128h-256v128h-128v-128h-128v256zm0-384v-128h-768v128zm-768-512v128H896v256H640v-128h128v-128H512v256H0V640h128V128h1536v768h-128V256H256v384h256v384zm-768 256V768H128v512z"
      ></path>
    </svg>
  </span>
           Management
          </li>
          <li className="m-2 flex cursor-pointer rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-white">
            <span className="mr-5">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      className='h-5 w-5'
    >
      <path
        fill="currentColor"
        d="M3.5 7a5 5 0 1 1 10 0a5 5 0 0 1-10 0M5 14a5 5 0 0 0-5 5v2h17v-2a5 5 0 0 0-5-5zm19 7h-5v-2c0-1.959-.804-3.73-2.1-5H19a5 5 0 0 1 5 5zm-8.5-9a5 5 0 0 1-1.786-.329A6.97 6.97 0 0 0 15.5 7a6.97 6.97 0 0 0-1.787-4.671A5 5 0 1 1 15.5 12"
      ></path>
    </svg>
  
</span>
            Members
          </li>
          <li className="m-2 flex cursor-pointer rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-white">
            <span className="mr-5"
              >
 
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="1em"
      height="1em"
      className='h-7 w-7'
    >
      <g fill="currentColor">
        <path
          fillRule="evenodd"
          d="M34 16c0 5.523-4.477 10-10 10s-10-4.477-10-10S18.477 6 24 6s10 4.477 10 10m-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0"
          clipRule="evenodd"
        ></path>
        <path d="M30.5 28a.48.48 0 0 0-.54.262L26 39.572V36l-.575-4.021a1 1 0 0 0 .764-.736l.5-2A1 1 0 0 0 25.72 28h-3.438a1 1 0 0 0-.97 1.242l.5 2a1 1 0 0 0 .764.737L22 36v2.696l-3.96-10.434A.48.48 0 0 0 17.5 28a139 139 0 0 1-1.148.272c-2.262.53-5.058 1.184-6.544 2.16C8.045 31.589 7 32.953 7 34.5V41h34v-6.5c0-1.547-1.045-2.91-2.808-4.068c-1.486-.976-4.282-1.63-6.544-2.16c-.403-.094-.79-.184-1.148-.272"></path>
      </g>
    </svg>
  </span>
            Trainers
          </li>
          <li className="m-2 flex cursor-pointer rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-white">
            <span className="mr-5">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      width="1em"
      height="1em"
      className='h-5 w-5'
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 7.5v-2a1 1 0 0 0-1-1H1.5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1H11a1 1 0 0 0 1-1V10M3.84 2L9.51.52a.49.49 0 0 1 .61.36L10.4 2"></path>
        <rect width="3.5" height="2.5" x="10" y="7.5" rx=".5"></rect>
      </g>
    </svg>
  </span>
           Finance
          </li>
          <li className="m-2 flex cursor-pointer rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-white">
            <span className="mr-5"
              >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      className='h-7 w-7'
    >
      <path
        fill="currentColor"
        d="M12 4a8 8 0 1 0 8 8a8.003 8.003 0 0 0-8-8m-6 8a6 6 0 0 1 .105-1.095L9.6 14.4v.8a1.605 1.605 0 0 0 1.6 1.6v1.14A6.004 6.004 0 0 1 6 12m9.2 3.2h-.8v-2.4a.8.8 0 0 0-.8-.8H8.8v-1.6h1.6a.8.8 0 0 0 .8-.8V8h1.6a1.6 1.6 0 0 0 1.59-1.5a5.985 5.985 0 0 1 2.137 9.426A1.57 1.57 0 0 0 15.2 15.2M13 1a1 1 0 1 1-1-1a1 1 0 0 1 1 1m5 1a1 1 0 1 1-1-1a1 1 0 0 1 1 1m4 4a1 1 0 1 1-1-1a1 1 0 0 1 1 1m2 6a1 1 0 1 1-1-1a1 1 0 0 1 1 1m-2 6a1 1 0 1 1-1-1a1 1 0 0 1 1 1m-4 4a1 1 0 1 1-1-1a1 1 0 0 1 1 1m-5 1a1 1 0 1 1-1-1a1 1 0 0 1 1 1m-5-1a1 1 0 1 1-1-1a1 1 0 0 1 1 1m-4-4a1 1 0 1 1-1-1a1 1 0 0 1 1 1m-2-6a1 1 0 1 1-1-1a1 1 0 0 1 1 1m2-6a1 1 0 1 1-1-1a1 1 0 0 1 1 1m4-4a1 1 0 1 1-1-1a1 1 0 0 1 1 1"
      ></path>
    </svg>
</span>
           Facilities
          </li>
        </ul>
      </li>

      <li className="relative transition">
        <input className="peer hidden" type="checkbox" id="menu-2" />
        <div className="relative m-2 flex items-center rounded-xl border-b-4 border-gray-300 bg-gray-50 py-3 pl-5 text-sm text-gray-500">
          <span className="mr-5 flex w-5 text-gray-500"
            >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="1em"
      height="1em"
      className='h-7 w-7 text-gray-800'
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M30.507 36.163h-13.01m0-4.025h13.006m10.054 4.649h.835c.613 0 1.108-.491 1.108-1.104v-3.152c0-.61-.494-1.104-1.104-1.104h-.835m-3.893 8.58h2.786a1.1 1.1 0 0 0 1.103-1.103v-9.59a1.104 1.104 0 0 0-1.1-1.107h-2.785m-1.104-2.355H31.61c-.61 0-1.104.494-1.104 1.104v14.302a1.1 1.1 0 0 0 1.104 1.104h3.957a1.1 1.1 0 0 0 1.104-1.104V26.96a1.104 1.104 0 0 0-1.1-1.108zM7.439 36.791h-.831a1.104 1.104 0 0 1-1.108-1.1v-3.16c0-.612.491-1.104 1.108-1.104h.831m3.893 8.58h-2.79a1.103 1.103 0 0 1-1.103-1.103v-9.59c0-.612.491-1.107 1.104-1.107h2.782m1.107-2.355h3.954c.616 0 1.107.491 1.107 1.108v14.298a1.1 1.1 0 0 1-1.107 1.104h-3.95c-.61 0-1.104-.494-1.104-1.104V26.96c0-.613.492-1.108 1.104-1.108zm8.701 2.82h9.37m-13.01-1.078l1.531-1.538m2.11-4.94h13.25m-20.625-.159l1.41 1.414l3.855-3.874m2.11-4.94h13.25m-20.625-.16l1.41 1.414l3.855-3.87m11.48 28.5H17.496M9.374 28.206V7.849c0-1.225.98-2.211 2.193-2.211h24.87c1.217 0 2.196.983 2.196 2.211v20.358"
      ></path>
    </svg>
</span>
         Workout & Diet Plans
          <label for="menu-2" className="absolute inset-0 h-full w-full cursor-pointer"></label>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="peer-checked:rotate-180 absolute right-0 top-6 mr-5 ml-auto h-4 text-gray-500 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <ul className="duration-400 peer-checked:max-h-96 m-2 flex max-h-0 flex-col overflow-hidden rounded-2xl bg-gray-100 transition-all duration-300">
          <li className="m-2 flex cursor-pointer rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-white">
            <span className="mr-5"
              >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      className='h-5 w-5'
    >
      <path
        fill="currentColor"
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
      ></path>
      <rect width="2" height="7" x="11" y="6" fill="currentColor" rx="1">
        <animateTransform
          attributeName="transform"
          dur="9s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        ></animateTransform>
      </rect>
      <rect width="2" height="9" x="11" y="11" fill="currentColor" rx="1">
        <animateTransform
          attributeName="transform"
          dur="0.75s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        ></animateTransform>
      </rect>
    </svg>
</span>
           Workout Routines
          </li>
          <li className="m-2 flex cursor-pointer rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-white">
            <span className="mr-5">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      className='h-7 w-7'
    >
      <path
        fill="currentColor"
        d="M12 3L4 9v12h16V9zm.5 9.5c0 .83-.67 1.5-1.5 1.5v4h-1v-4c-.83 0-1.5-.67-1.5-1.5v-3h1v3h.5v-3h1v3h.5v-3h1zM15 18h-1v-3.5h-1v-3c0-1.1.9-2 2-2z"
      ></path>
    </svg>
</span>
           Custom Diet Plans
           </li>
          <li className="m-2 flex cursor-pointer rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-white">
            <span className="mr-5"
              >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="2em"
      height="2em"

    >
      <path fill="#fff" d="M0 0h64v64H0z"></path>
      <path
        fill="#52c18e"
        d="M58.7 5.3h-5.6L37.3 25.5l-9.6-11.2L0 54.5V64h6.4l22.2-32.3l9.2 10.6l20.9-26.8z"
      ></path>
      <path
        fill="#d0d5d8"
        d="M64 0H0v50.7l3-4.3h-.9V33.1h10l1.5-2.1H2.1V17.6h13.3v10.7l2.1-3.1v-7.6h5.2l1.5-2.1h-6.7V2.1h13.3v12.7l2.4 2.8h7.5l1.7-2.1H33V2.1h13.3v8.3l2.1-2.7V2.1h13.3v13.3h-1.1v.8l-1 1.3h2.1v13.3H49.3l-2.9 3.8v11.7H33.1V40L31 37.5v8.7h-9.8l-1.5 2.1H31v13.3H17.6V51.5l-2.1 3.1v7.3h-5L9 64h55zM15.5 15.5H2.1V2.1h13.3c.1 0 .1 13.4.1 13.4m30.9 46.4H33.1V48.5h13.3zm15.5 0H48.5V48.5h13.3v13.4zm0-15.5H48.5V33.1h13.3v13.3z"
      ></path>
    </svg>
              </span>
            Progress tracking
          </li>
         
          <li className="m-2 flex cursor-pointer rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-white">
            <span className="mr-5">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="2em"
      height="2em"
     
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5.697M18 12V7a2 2 0 0 0-2-2h-2"></path>
        <path d="M8 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2m0 6h4m-4 4h3m3 2.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m4.5 2L21 22"></path>
      </g>
    </svg>
</span>
          Reports/Analytics
           </li>

        </ul>
      </li>

    {/* Other Sections */}
      <li className="relative transition">
        <input className="peer hidden" type="checkbox" id="menu-3" />
        <div className="relative m-2 flex items-center rounded-xl border-b-4 border-gray-300 bg-gray-50 py-3 pl-5 text-sm text-gray-500">
          <span className="mr-5 flex w-5 text-gray-500"
            >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="2em"
      height="2em"
      
    >
      <defs>
        <radialGradient
          id="vscodeIconsFolderTypeServicesOpened0"
          cx="20.365"
          cy="6.269"
          r="2.721"
          gradientTransform="matrix(-.148 .989 1.059 .158 11.812 -5.692)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#bedcdc"></stop>
          <stop offset=".5" stopColor="#8e9e9e" stopOpacity=".74"></stop>
          <stop offset="1" stopColor="#404f5c" stopOpacity=".84"></stop>
        </radialGradient>
        <radialGradient
          id="vscodeIconsFolderTypeServicesOpened1"
          cx="6.566"
          cy="14.644"
          r="3.9"
          gradientTransform="matrix(-.148 .989 1.059 .158 9.451 15.181)"
          href="#vscodeIconsFolderTypeServicesOpened0"
        ></radialGradient>
      </defs>
      <path
        fill="#7bbedb"
        d="M27.4 5.5h-9.2l-2.1 4.2H4.3v4H.5l3.8 12.8h25.2v-21Zm-7.2 2.1h7.1v2.1h-8.1Zm5.5 6.1H6.6v-1.9h20.8v7.626Z"
      ></path>
      <path
        fill="silver"
        d="m13.886 12.006l-1.803 1.803l-.901-1.803l.901-.901zm2.886-.094h-2.551L14.859 10h1.274zm2.105 1.974l-1.803-1.803l1.803-.901l.902.901zm.094 2.886v-2.551l1.912.638v1.274zm-1.974 2.105l1.803-1.803l.901 1.803l-.901.902zm-2.885.094h2.55l-.637 1.912H14.75zm-2.106-1.974l1.803 1.803l-1.803.901l-.901-.901zm-.094-2.885v2.55L10 16.025V14.75z"
      ></path>
      <path
        fill="silver"
        d="M11.663 15.442a3.778 3.778 0 1 1 1.107 2.672a3.78 3.78 0 0 1-1.107-2.672m3.779 1.425a1.425 1.425 0 1 0-1.008-.418a1.43 1.43 0 0 0 1.008.418"
      ></path>
      <path
        fill="#a9a9a9"
        d="M15.5 18.939a3.5 3.5 0 1 0-3.555-3.439a3.5 3.5 0 0 0 3.555 3.439m-.113-6.457a2.96 2.96 0 1 1-2.907 3.012a2.96 2.96 0 0 1 2.91-3.012Z"
      ></path>
      <path
        fill="url(#vscodeIconsFolderTypeServicesOpened0)"
        d="M15.489 18.162a2.721 2.721 0 1 0-2.767-2.673a2.72 2.72 0 0 0 2.767 2.673m-.075-4.275a1.555 1.555 0 1 1-1.528 1.583a1.555 1.555 0 0 1 1.528-1.583"
      ></path>
      <path
        fill="#a9a9a9"
        d="M15.47 17a1.555 1.555 0 1 0-1.583-1.526A1.555 1.555 0 0 0 15.47 17m-.051-2.87a1.316 1.316 0 1 1-1.292 1.339a1.316 1.316 0 0 1 1.292-1.337Z"
      ></path>
      <path
        fill="silver"
        d="m27.572 19.763l-1.706-.947l1.098-1.176l1.024.568zm1.636 2.356l-1.005-1.672l1.539-.47l.603 1.004zm.238 2.859l-.034-1.951l1.568.363l.02 1.17zm-1.223 2.594l.946-1.706l1.176 1.098l-.567 1.024zm-2.357 1.636l1.673-1.005l.469 1.539l-1.003.603zm-2.859.238l1.952-.034l-.363 1.568l-1.171.02zm-2.594-1.223l1.706.946l-1.098 1.176l-1.024-.567zm-1.636-2.357l1.005 1.673l-1.539.469l-.603-1.003zm-.238-2.859l.034 1.952l-1.567-.363l-.021-1.171zm1.224-2.594l-.947 1.706l-1.176-1.098l.568-1.024zm2.356-1.636l-1.672 1.005l-.47-1.539l1.004-.603zm2.859-.238l-1.951.034l.363-1.567l1.17-.021z"
      ></path>
      <path
        fill="silver"
        d="M23.9 18.372a5.626 5.626 0 1 1-3.946 1.716a5.63 5.63 0 0 1 3.946-1.716m-2.017 5.658a2.112 2.112 0 1 0 .592-1.5a2.1 2.1 0 0 0-.592 1.5"
      ></path>
      <path
        fill="#a9a9a9"
        d="M24.081 29.045a5.053 5.053 0 1 0-5.14-4.964a5.054 5.054 0 0 0 5.14 4.964m-.163-9.327a4.275 4.275 0 1 1-4.2 4.35a4.275 4.275 0 0 1 4.2-4.35"
      ></path>
      <path
        fill="url(#vscodeIconsFolderTypeServicesOpened1)"
        d="M24.061 27.893a3.9 3.9 0 1 0-3.967-3.832a3.9 3.9 0 0 0 3.967 3.832m-.105-6.027a2.128 2.128 0 1 1-2.09 2.164a2.127 2.127 0 0 1 2.089-2.164Z"
      ></path>
      <path
        fill="#a9a9a9"
        d="M24.033 26.324a2.331 2.331 0 1 0-2.372-2.291a2.33 2.33 0 0 0 2.372 2.291m-.075-4.3a1.973 1.973 0 1 1-1.938 2.007a1.97 1.97 0 0 1 1.938-2.007"
      ></path>
    </svg>
</span>
        Our Services
          <label for="menu-3" className="absolute inset-0 h-full w-full cursor-pointer"></label>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="peer-checked:rotate-180 absolute right-0 top-6 mr-5 ml-auto h-4 text-gray-500 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <ul className="duration-400 peer-checked:max-h-96 m-2 flex max-h-0 flex-col overflow-hidden rounded-2xl bg-gray-100 transition-all duration-300">
          <li className="m-2 flex cursor-pointer rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-white">
            <span className="mr-5"
              >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      className='h-5 w-5'
    >
      <path
        fill="currentColor"
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
      ></path>
      <rect width="2" height="7" x="11" y="6" fill="currentColor" rx="1">
        <animateTransform
          attributeName="transform"
          dur="9s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        ></animateTransform>
      </rect>
      <rect width="2" height="9" x="11" y="11" fill="currentColor" rx="1">
        <animateTransform
          attributeName="transform"
          dur="0.75s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        ></animateTransform>
      </rect>
    </svg>
</span>
          classes & schedule
          </li>
          <li className="m-2 flex cursor-pointer rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-white">
            <span className="mr-5">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      className='h-7 w-7'
    >
      <path
        fill="currentColor"
        d="M12 3L4 9v12h16V9zm.5 9.5c0 .83-.67 1.5-1.5 1.5v4h-1v-4c-.83 0-1.5-.67-1.5-1.5v-3h1v3h.5v-3h1v3h.5v-3h1zM15 18h-1v-3.5h-1v-3c0-1.1.9-2 2-2z"
      ></path>
    </svg>
</span>
           Courses
           </li>
          <li className="m-2 flex cursor-pointer rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-white">
            <span className="mr-5"
              >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="2em"
      height="2em"

    >
      <path fill="#fff" d="M0 0h64v64H0z"></path>
      <path
        fill="#52c18e"
        d="M58.7 5.3h-5.6L37.3 25.5l-9.6-11.2L0 54.5V64h6.4l22.2-32.3l9.2 10.6l20.9-26.8z"
      ></path>
      <path
        fill="#d0d5d8"
        d="M64 0H0v50.7l3-4.3h-.9V33.1h10l1.5-2.1H2.1V17.6h13.3v10.7l2.1-3.1v-7.6h5.2l1.5-2.1h-6.7V2.1h13.3v12.7l2.4 2.8h7.5l1.7-2.1H33V2.1h13.3v8.3l2.1-2.7V2.1h13.3v13.3h-1.1v.8l-1 1.3h2.1v13.3H49.3l-2.9 3.8v11.7H33.1V40L31 37.5v8.7h-9.8l-1.5 2.1H31v13.3H17.6V51.5l-2.1 3.1v7.3h-5L9 64h55zM15.5 15.5H2.1V2.1h13.3c.1 0 .1 13.4.1 13.4m30.9 46.4H33.1V48.5h13.3zm15.5 0H48.5V48.5h13.3v13.4zm0-15.5H48.5V33.1h13.3v13.3z"
      ></path>
    </svg>
              </span>
            Franchise & memberships
          </li>
         
          <li className="m-2 flex cursor-pointer rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-white">
            <span className="mr-5">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="2em"
      height="2em"
    
    >
      <path
        fill="currentColor"
        d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11z"
      ></path>
    </svg>

</span>
         Security
           </li>

        </ul>
      </li>
      <li className="relative transition">
        <div className="relative m-2 flex cursor-pointer items-center rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-gray-50">
          <span className="mr-5 flex w-5 text-gray-500"
            ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg
          ></span>
          Support Tickets
        </div>
      </li>
      <li className="relative transition">
        <div className="relative m-2 flex cursor-pointer items-center rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-gray-50">
          <span className="mr-5 flex w-5 text-gray-500"
            ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg
          ></span>
          Settings
        </div>
      </li>
    </ul>
  </div>
</div>

        
    </div>
  )
}

export default Main