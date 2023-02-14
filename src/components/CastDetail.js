import { Link, useParams } from "react-router-dom"
import useAxios from "../customHooks/useAxios"
import { MdArrowForwardIos } from "react-icons/md"
import Cast from "./Cast"



const CastDetail = () => {

    const { id } = useParams()

    const { data: movie, loading, error } = useAxios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=75f15351c6119a96302b866663e596b0&language=en-US`)

    return (
        <>
            <article className="mt-6 grid grid-cols-2">
                <article className="w-[55rem] bg-black rounded-2xl h-14 flex justify-between">
                    <button className="bg-cyan-400 text-neutral-200 w-64 h-14 rounded-2xl">Top Rated Movie #</button>
                    <p className="text-white m-auto">Awards</p>
                    <select name="awards" id="awards" className="text-white bg-transparent mr-10"></select>
                </article>
            </article>
            <article className="m-6 w-[49rem]">
                <div className="flex">
                    <h2 className="text-neutral-200 text-2xl flex gap-x-4">Top Cast<MdArrowForwardIos className="mt-1.5" /></h2>
                    <Cast id="287" />
                </div>
                <div className="grid grid-cols-4 mt-6 gap-16">
                    {loading && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                    {movie?.cast?.map((actors, index) => {
                        if (index < 4) return (
                            <div className="justify-self-center">
                                <div className="w-36 h-36 rounded-full relative">
                                    <img src={`https://image.tmdb.org/t/p/original${actors.profile_path}`} alt="" className="absolute object-cover w-full h-full rounded-full" />
                                </div>
                                <h2 className="text-neutral-200 text-center">{actors.name}</h2>
                                <p className="text-neutral-200 text-opacity-40 text-center">{actors.character}</p>
                            </div>
                        )
                    })}
                </div>
            </article>
            <article className="border-y-2 w-[55rem] mt-6 h-16 border-neutral-700 flex justify-between">
                <h2 className="text-neutral-200 flex items-center pl-6">All Cast & Crew</h2>
                <select name="crewcast" id="crewcast" className="bg-transparent text-white mr-10"></select>
            </article>
        </>
    );
}

export default CastDetail;