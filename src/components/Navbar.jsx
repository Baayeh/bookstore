import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CiUser } from 'react-icons/ci';

const Navbar = () => (
  <nav className="p-3 md:px-16 md:py-5 bg-white border-b flex justify-between items-center">
    <div className="flex items-center gap-5">
      <Link to="/" className="logo text-blue-600 font-bold text-xl">
        BookStore CMS
      </Link>
      <div className="nav-links hidden md:flex md:gap-5">
        <NavLink
          to="/"
          className={`uppercase text-[0.813rem] tracking-[1.9px] ${(isActive) => (isActive ? 'active' : '')}`}
        >
          Books
        </NavLink>
        <NavLink
          to="/categories"
          className={`uppercase text-[0.813rem] tracking-[1.9px] ${(isActive) => (isActive ? 'active' : '')}`}
        >
          Categories
        </NavLink>
      </div>
    </div>
    <div className="nav-actions">
      <button
        type="button"
        className="border-2 border-blue-600 rounded-full p-2"
      >
        <CiUser className="text-2xl text-blue-600" />
      </button>
    </div>
  </nav>
);

export default Navbar;
