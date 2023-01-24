// /** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
import ticket from "../ticket.svg"

// const styleTicket = css`
//     background-color: #3dd2cd66;
//     width: 3.75rem;
//     height: 3.75rem;
//     border-radius: 2.5rem;
//     margin: 0 auto;
//     position: relative;
//     top: 1.5rem;
// `

// const styleArticle = css`
//     background-color: #191919;
//     width: 10.6rem;
//     height: 13.1rem;
//     margin: 0 auto;
//     border-radius: 1.2rem;
// `

// const styleTicketIcon = css`
//     margin: 0.7rem 0 0 0.7rem ;
// `

// const styleTicketText = css`
//     color: #E8E8E8;
//     font-family: "Poppin", sans-serif;
//     font-weight: 600;
//     width: 9rem;
//     line-height: 2rem;
//     padding: 0.2rem 1.2rem ;
//     font-size: 0.95rem;
// `

// const styleText = css`
//     color: #666666;
//     font-family: "Poppin", sans-serif;
//     font-weight: 400;
//     padding: 0 0 0 1.2rem;
//     font-size: 0.85rem;
   
// `

// const styleBtn = css`
//     color: #3DD2CC;
//     background-color: #3dd2cd5d;
//     border: none;
//     width: 7rem;
//     height: 1.9rem;
//     border-radius: 1.9rem;
//     margin-left: 1.8rem;
//     font-family: "poppins", sans-serif;
//     font-weight: 400;
// `

{/*  */}

const PlayMovieQuizes = () => {
    return (
        <>
            <div className="bg-cyan-400 bg-opacity-40 w-12 h-12 rounded-full m-auto relative top-6"> <img src={ticket} alt="" className="m-auto pt-1" /></div>
            <article className="bg-black w-40 h-52 rounded-2xl m-auto">
                <p className="text-stone-400 pl-2 pt-6 font-semibold font-['Poppins']">Play movie quizes and earn free tickets</p>
                <p className="text-stone-600 pl-2 pt-3 font-semibold font-['Poppins']">50k people are playing now</p>
                <button className="bg-cyan-400 text-cyan-400 w-36 bg-opacity-40 rounded-lg ml-2 mt-4 font-semibold font-['Poppins']">Start Playing</button>
            </article>
        </>
    );
}

export default PlayMovieQuizes;