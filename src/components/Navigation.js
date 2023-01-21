import { NavLink } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import {GrHomeRounded} from "react-icons/gr"


const styleNav = css`
    display: grid;
    gap: 2.4rem;
    margin-top: 4.5rem;
    `

const styleLink = css`
  height: 5.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666666;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
`

const Navigation = () => {

    let activeStyle = {
        backgroundColor: "#3dd2cd55",
        borderRight: "4px solid #3DD2CC" ,
        color: "#3DD2CC"
      };
    
      let activeClassName = "underline";

    return ( 
        <nav css={styleNav}>
            <NavLink to={"/"} css={styleLink} style={({ isActive }) =>
              isActive ? activeStyle : undefined}>Home</NavLink>
            <NavLink to={"/movies"} css={styleLink} style={({ isActive }) =>
              isActive ? activeStyle : undefined}>Movies</NavLink>
            <NavLink to={"/tvseries"} css={styleLink}  style={({ isActive }) =>
              isActive ? activeStyle : undefined}>TV Series</NavLink>
            <NavLink to={"/upcoming"} css={styleLink}  style={({ isActive }) =>
              isActive ? activeStyle : undefined}>Upcoming</NavLink>
        </nav>
     );
}
 
export default Navigation;