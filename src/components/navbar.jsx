import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MediaQuery from "react-responsive";
import { IoMdClose } from "react-icons/io";
import { RiMenuFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import useCollapse from "react-collapsed";
const Navbar = () => {
  const [on, setOn] = useState(false);
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({});

  return (
    <div className="navbar justify-content-end position-fixed w-100">
      <div className="row w-100 ">
        <div className="col-12 pe-0 justify-content-between  justify-content-lg-around align-items-center d-flex">
          <div className="logo ">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
              <g fill="none" fillRule="evenodd">
                <circle cx="24" cy="24" r="24" fill="#FFF" />
                <path
                  fill="#0B0D17"
                  d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
                />
              </g>
            </svg>
          </div>
          <hr />
          <div className="navBtn">
            <MediaQuery minWidth={500}>
              <ul className="list-group list-group-horizontal align-items-center">
                <li className="list-group-item h-100 d-flex align-items-center ">
                  <NavLink
                    to={"/"}
                    style={({ isActive }) => {
                      return {
                        borderBottom: isActive ? "3px solid white" : "",
                      };
                    }}
                  >
                    <span className="num ">00</span>
                    <span className="text">Home</span>
                  </NavLink>
                </li>
                <li className="list-group-item  h-100 d-flex align-items-center ">
                  <NavLink
                    to={"/destination"}
                    style={({ isActive }) => {
                      return {
                        borderBottom: isActive ? "3px solid white" : "",
                      };
                    }}
                  >
                    <span className="num">01</span>
                    <span className="text">Destination</span>
                  </NavLink>
                </li>
                <li className="list-group-item  h-100 d-flex align-items-center ">
                  <NavLink
                    to={"/crew"}
                    style={({ isActive }) => {
                      return {
                        borderBottom: isActive ? "3px solid white" : "",
                      };
                    }}
                  >
                    <span className="num">02</span>
                    <span className="text">Crew</span>
                  </NavLink>
                </li>
                <li className="list-group-item  h-100 d-flex align-items-center ">
                  <NavLink
                    to={"/technology"}
                    style={({ isActive }) => {
                      return {
                        borderBottom: isActive ? "3px solid white" : "",
                      };
                    }}
                  >
                    <span className="num">03</span>
                    <span className="text">Technology</span>
                  </NavLink>
                </li>
              </ul>
            </MediaQuery>
            <MediaQuery maxWidth={500}>
              {/* {on && (
                <div onClick={() => setOn(!on)} className="close"  {...getToggleProps()}>
                  <IconContext.Provider
                    value={{ color: "white", size: "50px" }}
                  >
                    <IoMdClose />
                  </IconContext.Provider>
                </div>
              )}
              {!on && (
                <div onClick={() => setOn(!on)} className="open">
                  <IconContext.Provider
                    value={{ color: "white", size: "50px" }}
                  >
                    <RiMenuFill />
                  </IconContext.Provider>
                </div>
              )} */}
              <button {...getToggleProps()}>
                {isExpanded ? (
                  <div className="close">
                    <IconContext.Provider
                      value={{ color: "white", size: "40px" }}
                    >
                      <IoMdClose />
                    </IconContext.Provider>
                  </div>
                ) : (
                  <div className="open">
                    <IconContext.Provider
                      value={{ color: "white", size: "40px" }}
                    >
                      <RiMenuFill />
                    </IconContext.Provider>
                  </div>
                )}
              </button>
            </MediaQuery>
          </div>
          <MediaQuery maxWidth={500}>
            <div className="menu position-fixed " {...getCollapseProps()}>
              <ul>
                <li>
                  <NavLink
                    to={"/"}
                    style={({ isActive }) => {
                      return {
                        borderBottom: isActive ? "3px solid white" : "",
                      };
                    }}
                  >
                    <span className="num ">00</span>
                    <span className="text">Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/destination"}
                    style={({ isActive }) => {
                      return {
                        borderBottom: isActive ? "3px solid white" : "",
                      };
                    }}
                  >
                    <span className="num ">01</span>
                    <span className="text">Destination</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/crew"}
                    style={({ isActive }) => {
                      return {
                        borderBottom: isActive ? "3px solid white" : "",
                      };
                    }}
                  >
                    <span className="num ">02</span>
                    <span className="text">Crew</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/technology"}
                    style={({ isActive }) => {
                      return {
                        borderBottom: isActive ? "3px solid white" : "",
                      };
                    }}
                  >
                    <span className="num ">03</span>
                    <span className="text">Technology</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </MediaQuery>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
