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
        <header className="bg-neutral-900 w-64 h-130 rounded-r-3xl">
            <h1 className="text-cyan-400 text-4xl font-['oswald'] text-center pt-4 text-shadow">MOVIBES</h1>
            <Navigation />
            <PlayMovieQuizes />
        </header>
     );
}
 
export default Header;