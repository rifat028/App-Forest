import React from "react";
import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm md:px-15">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/apps">Apps</NavLink>
            </li>
            <li>
              <NavLink to="/installation">Installation</NavLink>
            </li>
          </ul>
        </div>
        <a
          className="btn btn-ghost text-lg md:text-2xl font-bold text-blue-600 px-0"
          href="/"
        >
          <img className="h-full" src={logo} />
          AppForest
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">
              <span className="font-semibold text-md">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/apps">
              <span className="font-semibold text-md">Apps</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/installation">
              <span className="font-semibold text-md">Installation</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]"
          href="https://github.com/rifat028"
          target="blank"
        >
          <FaGithub className="text-md font-semibold text-white" />
          <span className="text-md font-bold text-white">Contribute</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
