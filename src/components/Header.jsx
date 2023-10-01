import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll"

const Header = () => {
  const [nav, setNav] = useState(false);


  const links = [
    {
      id: 1,
      link: "HOME",
    },
    {
      id: 2,
      link: "PORTFOLIO",
    },
    {
      id: 3,
      link: "ABOUT ME",
    },
    {
      id: 4,
      link: "SKILLS",
    },
    {
      id: 5,
      link: "CONTACT",
    },
  ];

  return (
    
    <header className="bg-white  text-gray-700 ">

      <nav className="flex justify-between items-center p-2 fixed w-full top-0 bg-white">

        <div
          className="container mx-auto py-5 flex items-center justify-between relative"
        
        >

          <ul className="hidden text-gray-600  font-bold text-sm uppercase mx-auto md:flex space-x-10">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-gray-400 hover:scale-105 duration-200"
              >
                 <Link to={link} smooth duration={500}>{link}</Link>
              </li>
            ))}
          </ul>      

          {nav && (
            <ul className=" bg-indigo-800 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6 text-2xl"
                >
                  <Link to={link} smooth duration={500}>{link}</Link>
                </li>
              ))}
            </ul>
          )}

          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer md:hidden pr-4 z-10 text-gray-500 absolute right-0"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
