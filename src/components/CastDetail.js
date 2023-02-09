import MovieBoxDetailSite from "./MovieBoxDetailSite";
import TextStyle from "./TextStyle";


const CastDetail = () => {

    return (
        <>
        <article className="m-6 flex">
            <article className="w-[53.5rem] bg-black rounded-2xl h-14 flex justify-between">
            <button className="bg-cyan-400 text-neutral-200 w-64 h-14 rounded-2xl">Top Rated Movie #</button>
                <p className="text-white m-auto">Awards</p>
            <select name="awards" id="awards" className="text-white bg-transparent"></select>
            </article>
            <MovieBoxDetailSite />
        </article>
        <article>
            <h2>Top Cast</h2>
        </article>
        </>
    );
}

export default CastDetail;