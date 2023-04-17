import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { auth } from "../firebase-config";

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-black fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1920px] m-auto flex justify-between items-center p-4 text-white px-10">
        <Link to="/">
          <h1 className="font-bold lg:text-4xl md:text-3xl text-2xl cursor-pointer">
            Simple-Auth
          </h1>
        </Link>

        <ul className="hidden sm:flex flex-wrap">
          {loggedIn ? (
            <>
              <div className="flex flex-col">
                <Link
                  to="/"
                  className="p-4 hover:scale-110 bg-white text-black rounded-md font-bold md:p-3 md:text-xl lg:p-4 lg:text-2xl"
                  onClick={() => auth.signOut()}
                >
                  Logout
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col">
                <Link
                  to="/login"
                  className="p-4 hover:scale-110 bg-white text-black rounded-md font-bold md:p-3 md:text-xl lg:p-4 lg:text-2xl"
                >
                  Login
                </Link>
              </div>
            </>
          )}
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 flex-col"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 flex-col"
          }
        >
          <ul>
            <li onClick={handleNav} className="p-4 text-4xl flex flex-col">
              <Link to="/">Home</Link>
            </li>
          </ul>
          {loggedIn ? (
            <>
              <Link
                to="/"
                className="p-4 text-4xl"
                onClick={() => auth.signOut()}
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="p-4 text-4xl">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
