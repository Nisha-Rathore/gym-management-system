import React from 'react'
import logo from "../image/logo11.jpeg";

const Navbar = () => {
  return (
    <>
    <header className="shadow " style={{backgroundColor:"#211e38"}}>
  <div className="relative flex max-w-screen-2xl flex-col overflow-hidden px-4 py-1 md:mx-auto md:flex-row md:items-center ">
    <a href="#" className="flex items-center whitespace-nowrap ">
        <div classNameName='flex'>
      <img src={logo} alt='logo' width={"120px"}/>
      </div>
    </a>
    <input type="checkbox" className="peer hidden" id="navbar-open" />
    <label className="absolute top-3 right-7 cursor-pointer md:hidden" for="navbar-open">
      <span className="sr-only">Toggle Navigation</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
    <nav aria-label="Header Navigation" className="peer-checked:mt-8 peer-checked:max-h-24 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
      <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
        <li className="text-orange-300 md:mr-12 hover:text-orange-400 font-semibold text-xl"><a href="#">Home</a></li>
        <li className="text-orange-300 md:mr-12 hover:text-orange-400 font-semibold text-xl"><a href="#">Services</a></li>
        <li className="text-orange-300 md:mr-12 hover:text-orange-400 font-semibold text-xl"><a href="#">Contact us</a></li>
        <li className="text-orange-300 md:mr-12 hover:text-orange-400 font-semibold text-xl"><a href="#">About us</a></li>
        <li className="text-orange-300 md:mr-12 hover:text-orange-400 font-semibold text-xl">
          <button className="rounded-md border-2 border-orange-300 px-6 py-1 font-medium text-orange-300 transition-colors hover:bg-orange-400 hover:text-white">Login</button>
        </li>
      </ul>
    </nav>
  </div>
</header>

    </>
  )
}

export default Navbar