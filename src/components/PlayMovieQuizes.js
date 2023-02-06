import ticket from "./ticket.svg"

const PlayMovieQuizes = () => {
    return (
        <>
            <div className="bg-cyan-400 bg-opacity-40 w-12 h-12 rounded-full m-auto relative top-6"> <img src={ticket} alt="" className="m-auto pt-1" /></div>
            <article className="bg-black w-40 h-52 rounded-2xl m-auto">
                <p className="text-stone-400 pl-0.5 pt-6 font-semibold font-['Poppins']">Play movie quizes and earn free tickets</p>
                <p className="text-stone-600 pl-0.5 pt-3 font-semibold font-['Poppins']">50k people are playing now</p>
                <button className="bg-cyan-400 text-cyan-400 w-36 bg-opacity-40 rounded-lg ml-0.5 mt-4 font-semibold font-['Poppins']">Start Playing</button>
            </article>
        </>
    );
}

export default PlayMovieQuizes;