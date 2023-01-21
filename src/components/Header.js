// /** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
import Navigation from "./Navigation";
import PlayMovieQuizes from "./PlayMovieQuizes";



const Header = () => {

//    const style = css`
//    background-color: #212121;
//    width: 14.1rem;
//    height: 61.4rem;
//    border-radius: 0 2.82rem 2.82rem 0;
//    `

    return ( 
        <header className="bg-gray-900 w-64 h-130">
            <h1 className="text-cyan-400 text-4xl font-['Poppins']">MOVIBES</h1>
            <Navigation />
            <PlayMovieQuizes />
        </header>
     );
}
 
export default Header;