import { NavLink } from "react-router-dom";
import {FaHome} from "react-icons/fa"
import {FaFilm} from "react-icons/fa"
import {FaTv} from "react-icons/fa"
import {FaCalendarAlt} from "react-icons/fa"

const Navigation = () => {

  const activeLink = "bg-cyan-400 text-cyan-400 p-6 bg-opacity-60 flex items-center justify-center border-r-4 border-cyan-400 font-['Poppins'] font-semibold pr-10"
  const normalLink = "p-6 font-semibold m-auto text-neutral-700 pr-10"

  return (
    <nav className="grid mt-10 text-center">
        <NavLink to={"/"} className={({ isActive }) => (isActive ? activeLink : normalLink)}>
          <span className="flex gap-2">
            <FaHome  className="mt-1"/>
            Home
          </span>
        </NavLink>
      <NavLink to={"/movies"} className={({ isActive }) => (isActive ? activeLink : normalLink)}>
        <span className="flex gap-2 ">
        <FaFilm className="mt-1"/>
        Movies
        </span>
        </NavLink>
      <NavLink to={"/tvseries"} className={({ isActive }) => (isActive ? activeLink : normalLink)}>
        <span className="flex gap-2 ">
        <FaTv className="mt-1"/>
        TV Series
        </span>
        </NavLink>
      <NavLink to={"/upcoming"} className={({ isActive }) => (isActive ? activeLink : normalLink)}>
        <span className="flex gap-2 ">
        <FaCalendarAlt className="mt-1"/>
        Upcoming
        </span>
        </NavLink>
    </nav>
  );
}

export default Navigation;