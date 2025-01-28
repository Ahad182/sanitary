import React, { useState } from 'react'
import logo from "../assets/images/logoMain.png"
import { NavLink, useLocation } from 'react-router-dom'
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
const Header = () => {
  const location=useLocation()
  console.log(location.pathname)
  const [showSubMenu,SetShowSubMenu] = useState(false)
  const [SubMenu, SetSubMenu] = useState(false);
  const [toggle, SetToggle] = useState(false);
  return (
    <>
    <div className={`w-full  ${location.pathname==="/collection" || location.pathname==="/contact"  ?"bg-gray-300":"bg-[#FFDBAC]"} relative h-[15vh]`}>
      <div className="w-[90%] mx-auto  py-5 relative">
        <nav className='w-full flex items-center justify-between relative  z-[100] text-green-700 font-bold  text-center'>
          <div className="logo flex items-center">
            {/* <img src={logo} alt="" className='w-14 md:w-20'/> */}
            Brand LOGO
          </div>
          <ul className='lg:flex items-center    font-light font-serif hidden lg:mr-20 '>
              <li className='p-3 '> <NavLink to="/">Home</NavLink></li>
              <li onClick={()=>SetShowSubMenu(!showSubMenu)}  className=' p-3 relative'> <NavLink to="" className="flex items-center gap-2 ">Kitchen  <span> {showSubMenu?<FaAngleUp/>: <FaAngleDown/>}</span></NavLink>
                <ul className={`absolute  left-0 top-[33px] bg-[#FFDBAC] ${showSubMenu? "flex":" hidden"} flex-col gap-3 mt-4 w-[200px] p-2 shadow-2xl shadow-gray-950 transition-all duration-1000 ease-in-out`}>
                  <li className='px-3 py-1  '>Cuttalary </li>
                  <li className='px-3 py-1'>Knife </li>
                  <li className='px-3 py-1'>Spones </li>
                  <li className='px-3 py-1'>Some </li>
                </ul>
              </li>
              <li className='p-3'> <NavLink to="/">Home Hardware</NavLink></li>
              <li className='p-3'> <NavLink to="/">Bathroom</NavLink></li>
              <li className='p-3'> <NavLink to="/">Wardrobe Accessories</NavLink></li>
              <li className='p-3'> <NavLink to="/">Contact</NavLink></li>
          </ul>
          <div className="lg:hidden">
            <HiMenu onClick={()=>SetToggle(!toggle)}/>
          </div>
        </nav>
      </div>
      
    </div>




      {/* small screen menu  */}

    <div className={`w-full h-screen overflow-y-auto  bg-[#FFDBAC]  px-4 text-green-900  fixed  top-0 left-0 ${toggle?"translate-x-0":" translate-x-[-100%]"} transition-transform duration-1000 ease-in-out z-[500]`}>
        <div className=" flex flex-col  w-full">
          <div className="flex w-full items-center justify-between pt-6">
            <NavLink to="/">
            {/* <img
              src={logo}
              alt=""
              className="w-[80px] "
            /> */} Brand Logo
            </NavLink>
            
            <div className="p-2 border border-black cursor-pointer text-xl font-semibold" onClick={()=>SetToggle(!toggle)}>
              Close
            </div>
          </div>
          <div className=" w-full links-container mt-6 font-semibold text-[17px]">
            <ul className="flex flex-col gap-5 cursor-pointer">
              <li className="border-b-[1px] border-black pb-2">
                Home
              </li>

              <li className="border-b-[1px] border-green-700 ">
                <div
                  className="flex items-center justify-between"
                  onClick={() => SetSubMenu(!SubMenu)}
                >
                  Shop By Industry <span > {SubMenu?<FaAngleDown  />:<FaAngleRight />} </span>
                </div>
                <ul
                  className={`transition-all duration-1000 ease-in-out overflow-hidden ${
                    SubMenu
                      ? "opacity-100 flex flex-col gap-4"
                      : "max-h-0 opacity-0"
                  } mt-4 font-normal`}
                >
                  <li>Food Packaging</li>
                  <li>Pharmaceutical Packaging</li>
                  <li>Vape Packaging</li>
                  <li>Apparel and Fashion Packaging</li>
                  <li>Coffee and Tea Packaging</li>
                </ul>
              </li>
              <li className="border-b-[1px] border-green-700 ">
                <div
                  className="flex items-center justify-between"
                  onClick={() => SetSubMenu(!SubMenu)}
                >
                  Shop By Industry <span > {SubMenu?<FaAngleDown  />:<FaAngleRight />} </span>
                </div>
                <ul
                  className={`transition-all duration-1000 ease-in-out overflow-hidden ${
                    SubMenu
                      ? "opacity-100 flex flex-col gap-4"
                      : "max-h-0 opacity-0"
                  } mt-4 font-normal`}
                >
                  <li>Food Packaging</li>
                  <li>Pharmaceutical Packaging</li>
                  <li>Vape Packaging</li>
                  <li>Apparel and Fashion Packaging</li>
                  <li>Coffee and Tea Packaging</li>
                </ul>
              </li>
              <li className="border-b-[1px] border-green-700 ">
                <div
                  className="flex items-center justify-between"
                  onClick={() => SetSubMenu(!SubMenu)}
                >
                  Shop By Industry <span > {SubMenu?<FaAngleDown  />:<FaAngleRight />} </span>
                </div>
                <ul
                  className={`transition-all duration-1000 ease-in-out overflow-hidden ${
                    SubMenu
                      ? "opacity-100 flex flex-col gap-4"
                      : "max-h-0 opacity-0"
                  } mt-4 font-normal`}
                >
                  <li>Food Packaging</li>
                  <li>Pharmaceutical Packaging</li>
                  <li>Vape Packaging</li>
                  <li>Apparel and Fashion Packaging</li>
                  <li>Coffee and Tea Packaging</li>
                </ul>
              </li>
              <li className="border-b-[1px] border-green-700 ">
                <div
                  className="flex items-center justify-between"
                  onClick={() => SetSubMenu(!SubMenu)}
                >
                  Shop By Industry <span > {SubMenu?<FaAngleDown  />:<FaAngleRight />} </span>
                </div>
                <ul
                  className={`transition-all duration-1000 ease-in-out overflow-hidden ${
                    SubMenu
                      ? "opacity-100 flex flex-col gap-4"
                      : "max-h-0 opacity-0"
                  } mt-4 font-normal`}
                >
                  <li>Food Packaging</li>
                  <li>Pharmaceutical Packaging</li>
                  <li>Vape Packaging</li>
                  <li>Apparel and Fashion Packaging</li>
                  <li>Coffee and Tea Packaging</li>
                </ul>
              </li>
              <li className="border-b-[1px] border-green-700 ">
                <div
                  className="flex items-center justify-between"
                  onClick={() => SetSubMenu(!SubMenu)}
                >
                  Shop By Industry <span > {SubMenu?<FaAngleDown  />:<FaAngleRight />} </span>
                </div>
                <ul
                  className={`transition-all duration-1000 ease-in-out overflow-hidden ${
                    SubMenu
                      ? "opacity-100 flex flex-col gap-4"
                      : "max-h-0 opacity-0"
                  } mt-4 font-normal`}
                >
                  <li>Food Packaging</li>
                  <li>Pharmaceutical Packaging</li>
                  <li>Vape Packaging</li>
                  <li>Apparel and Fashion Packaging</li>
                  <li>Coffee and Tea Packaging</li>
                </ul>
              </li>
              <li className="border-b-[1px] border-green-700 ">
                <div
                  className="flex items-center justify-between"
                  onClick={() => SetSubMenu(!SubMenu)}
                >
                  Shop By Industry <span > {SubMenu?<FaAngleDown  />:<FaAngleRight />} </span>
                </div>
                <ul
                  className={`transition-all duration-1000 ease-in-out overflow-hidden ${
                    SubMenu
                      ? "opacity-100 flex flex-col gap-4"
                      : "max-h-0 opacity-0"
                  } mt-4 font-normal`}
                >
                  <li>Food Packaging</li>
                  <li>Pharmaceutical Packaging</li>
                  <li>Vape Packaging</li>
                  <li>Apparel and Fashion Packaging</li>
                  <li>Coffee and Tea Packaging</li>
                </ul>
              </li>
              <li className="border-b-[1px] border-green-700 ">
                <div
                  className="flex items-center justify-between"
                  onClick={() => SetSubMenu(!SubMenu)}
                >
                  Shop By Industry <span > {SubMenu?<FaAngleDown  />:<FaAngleRight />} </span>
                </div>
                <ul
                  className={`transition-all duration-1000 ease-in-out overflow-hidden ${
                    SubMenu
                      ? "opacity-100 flex flex-col gap-4"
                      : "max-h-0 opacity-0"
                  } mt-4 font-normal`}
                >
                  <li>Food Packaging</li>
                  <li>Pharmaceutical Packaging</li>
                  <li>Vape Packaging</li>
                  <li>Apparel and Fashion Packaging</li>
                  <li>Coffee and Tea Packaging</li>
                </ul>
              </li>
             
              
            </ul>
          </div>

          <div className="address-container mt-5">
            <h3 className="my-3 text-2xl uppercase">Office:</h3>
            <div className="flex flex-col gap-4">
              <h2>10816 Fallstone Rd #500 Houston,
              TX 77099, USA</h2>

              <h2>+1 (346) 246-1639
              Support@print247.us</h2>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default Header
