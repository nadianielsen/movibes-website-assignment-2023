import { Link, NavLink } from "react-router-dom";
// /** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
import {FaHome} from "react-icons/fa"
import {FaFilm} from "react-icons/fa"
import {FaTv} from "react-icons/fa"
import {FaCalendarAlt} from "react-icons/fa"



// const styleNav = css`
//     display: grid;
//     gap: 2.4rem;
//     margin-top: 4.5rem;
//     `

// const styleLink = css`
//   height: 5.4rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: #666666;
//   text-decoration: none;
//   font-family: 'Poppins', sans-serif;
//   font-weight: 600;
// `

const Navigation = () => {

  // let activeStyle = {
  //     backgroundColor: "#3dd2cd55",
  //     borderRight: "4px solid #3DD2CC" ,
  //     color: "#3DD2CC"
  //   };

  // let activeClassName = "underline";

  const activeLink = "bg-cyan-400 text-cyan-400 p-6 bg-opacity-60 flex items-center justify-center border-r-4 border-cyan-400 font-['Poppins'] font-semibold pr-10"
  const normalLink = "p-6 font-semibold m-auto text-neutral-700 pr-10"

  return (
    <nav className="grid mt-10 text-center">
        <NavLink to={"/"} className={({ isActive }) => (isActive ? activeLink : normalLink)}>
          <span className="flex gap-2">
            <FaHome  className="mt-0.5"/>
            Home
          </span>
        </NavLink>
      <NavLink to={"/movies"} className={({ isActive }) => (isActive ? activeLink : normalLink)}>
        <span className="flex gap-2 ">
        <FaFilm className="mt-0.5"/>
        Movies
        </span>
        </NavLink>
      <NavLink to={"/tvseries"} className={({ isActive }) => (isActive ? activeLink : normalLink)}>
        <span className="flex gap-2 ">
        <FaTv className="mt-0.5"/>
        TV Series
        </span>
        </NavLink>
      <NavLink to={"/upcoming"} className={({ isActive }) => (isActive ? activeLink : normalLink)}>
        <span className="flex gap-2 ">
        <FaCalendarAlt className="mt-0.5"/>
        Upcoming
        </span>
        </NavLink>
    </nav>
  );
}

export default Navigation;