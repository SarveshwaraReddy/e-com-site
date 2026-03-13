import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setvisible] = useState(false);
  const { setshowSearch, getCartCount } = useContext(ShopContext);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} className="w-50 cursor-pointer" alt="Logo" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm" style={{color: '#45413E', letterSpacing: '0.1rem', fontSize: '0.85rem', fontWeight: '500'}}>
        <NavLink to="/" className="flex flex-col items-center gap-1 transition-all duration-600">
          <p>HOME</p>
          <hr className="w-3/4 border-none h-[1.5px]" style={{backgroundColor: '#9C9B7A'}} />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1 transition-all duration-600">
          <p>COLLECTION</p>
          <hr className="w-3/4 border-none h-[1.5px]" style={{backgroundColor: '#9C9B7A'}} />
        </NavLink>  
        <NavLink to="/about" className="flex flex-col items-center gap-1 transition-all duration-600">
          <p>ABOUT</p>
          <hr className="w-3/4 border-none h-[1.5px]" style={{backgroundColor: '#9C9B7A'}} />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1 transition-all duration-600">
          <p>CONTACT</p>
          <hr className="w-3/4 border-none h-[1.5px]" style={{backgroundColor: '#9C9B7A'}} />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          onClick={() => setshowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer transition-all duration-600 hover:opacity-60"
        />

        <div className="group relative">
          <Link to={'/login'}>
            <img
              className="w-5 cursor-pointer transition-all duration-600 hover:opacity-60"
              src={assets.profile_icon}
              alt=""
            />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 text-white rounded-full" style={{backgroundColor: '#9C9B7A'}}>
              <p className="cursor-pointer hover:opacity-80 transition-all duration-600">My Profile</p>
              <p className="cursor-pointer hover:opacity-80 transition-all duration-600">Orders</p>
              <p className="cursor-pointer hover:opacity-80 transition-all duration-600">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative transition-all duration-600">
          <img src={assets.cart_icon} className="w-5 min-w-5 hover:opacity-60 transition-all duration-600" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 text-white aspect-square rounded-full text-[8px]" style={{backgroundColor: '#9C9B7A'}}>
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setvisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden transition-all duration-600 hover:opacity-60"
          alt=""
        />
      </div>
      {/* Sidebar menu for small screen */}
      <div
        className={`absolute top-0 bottom-0 right-0 overflow-hidden transition-all duration-600`}
        style={{backgroundColor: '#FDF9F3', width: visible ? '100%' : '0'}}
      >
        <div className="flex flex-col" style={{color: '#45413E'}}>
          <div
            onClick={() => setvisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer transition-all duration-600 hover:bg-[#F5F0E8]"
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setvisible(false)}
            className="py-2 pl-6 border-b transition-all duration-600 hover:bg-[#F5F0E8]"
            style={{borderColor: '#E8DFD5'}}
            to="/"
          >
            {" "}
            Home
          </NavLink>
          <NavLink
            onClick={() => setvisible(false)}
            className="py-2 pl-6 border-b transition-all duration-600 hover:bg-[#F5F0E8]"
            style={{borderColor: '#E8DFD5'}}
            to="/collection"
          >
            {" "}
            Collection
          </NavLink>
          <NavLink
            onClick={() => setvisible(false)}
            className="py-2 pl-6 border-b transition-all duration-600 hover:bg-[#F5F0E8]"
            style={{borderColor: '#E8DFD5'}}
            to="/about"
          >
            {" "}
            About
          </NavLink>
          <NavLink
            onClick={() => setvisible(false)}
            className="py-2 pl-6 border-b transition-all duration-600 hover:bg-[#F5F0E8]"
            style={{borderColor: '#E8DFD5'}}
            to="/contact"
          >
            {" "}
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
