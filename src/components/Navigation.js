import { NavLink } from "react-router-dom";
// /** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
// import {GrHomeRounded} from "react-icons/gr"


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

    const activeLink = "bg-cyan-400 text-cyan-400 bg-opacity-40 h-20 flex items-center justify-center border-r-4 border-cyan-400"
    const normalLink = ""

    return ( 
        <nav className="grid gap-10 mt-16 text-neutral-700 text-center">
            <NavLink to={"/"} className={({ isActive}) => (isActive ? activeLink : normalLink)}>Home</NavLink>
            <NavLink to={"/movies"} className={({ isActive}) => (isActive ? activeLink : normalLink)}>Movies</NavLink>
            <NavLink to={"/tvseries"} className={({ isActive}) => (isActive ? activeLink : normalLink)}>TV Series</NavLink>
            <NavLink to={"/upcoming"} className={({ isActive}) => (isActive ? activeLink : normalLink)}>Upcoming</NavLink>
        </nav>
     );
}
 
export default Navigation;