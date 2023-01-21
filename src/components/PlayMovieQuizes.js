/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ticket from "./ticket.svg"

const styleTicket = css`
    background-color: #3dd2cd66;
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 2.5rem;
    margin: 0 auto;
    position: relative;
    top: 1.5rem;
`

const styleArticle = css`
    background-color: #191919;
    width: 10.6rem;
    height: 13.1rem;
    margin: 0 auto;
    border-radius: 1.2rem;
`

const styleTicketIcon = css`
    margin: 0.7rem 0 0 0.7rem ;
`

const styleTicketText = css`
    color: #E8E8E8;
    font-family: "Poppin", sans-serif;
    font-weight: 600;
    width: 9rem;
    line-height: 2rem;
    padding: 0.2rem 1.2rem ;
    font-size: 0.95rem;
`

const styleText = css`
    color: #666666;
    font-family: "Poppin", sans-serif;
    font-weight: 400;
    padding: 0 0 0 1.2rem;
    font-size: 0.85rem;
   
`

const styleBtn = css`
    color: #3DD2CC;
    background-color: #3dd2cd5d;
    border: none;
    width: 7rem;
    height: 1.9rem;
    border-radius: 1.9rem;
    margin-left: 1.8rem;
    font-family: "poppins", sans-serif;
    font-weight: 400;
`

const PlayMovieQuizes = () => {
    return (
        <>
            <div css={styleTicket}><img src={ticket} alt="" css={styleTicketIcon} /></div>
            <article css={styleArticle}>
                <p css={styleTicketText}>Play movie quizes and earn free tickets</p>
                <p css={styleText}>50k people are playing now</p>
                <button css={styleBtn}>Start Playing</button>
            </article>
        </>
    );
}

export default PlayMovieQuizes;