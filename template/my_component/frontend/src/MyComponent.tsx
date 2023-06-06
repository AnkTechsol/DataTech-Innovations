import React, { useEffect } from "react";

import './style.css';
import Cards from "./Cards";
import Welcome from "./Welcome";
import Contact from "./Contact";
import About from "./About";

import { Link } from "react-scroll";


const MyComponent = () => {


  const menuItems = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Services",
    },
    {
      id: 3,
      title: "Contact Us",
    },
    {
      id: 4,
      title: "About us",
    },
  ];




  return (
    <>
        <>
          <nav>
            <div className='logo'><h2>DataTech Innovations</h2></div>


            <div className='item-cont'>
              {menuItems.map((menu) => (
                <a>
                  <Link
                    to={menu.title}
                    smooth={true}
                    offset={-430}
                    duration={500}
                  >
                    {menu.title}
                  </Link>
                </a>
              ))}
            </div>
          </nav>
          <Welcome/>
          <div id='Services'><Cards/></div>
          <div id="Contact us"></div><Contact/>
          <div id="About us"></div><About/>
        </>
    </>







  );
};

export default MyComponent;