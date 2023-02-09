import useAxios from "../customHooks/useAxios";
import { useParams } from "react-router-dom";
import TextStyle from "./TextStyle";
import { BsListUl } from "react-icons/bs";
import { useState, useEffect } from "react";


const CrewDetails = () => {

    const [writers, setWriters] = useState();
    const [director, setDirector] = useState();
    const [members, setMembers] = useState();

    const {id} = useParams()

    const {data: movie, loading, error} = useAxios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=75f15351c6119a96302b866663e596b0&language=en-US`)
    console.log(movie?.crew)

  

    useEffect(() => {
        if (movie) {
            setDirector(movie.crew.find(
                (member) => member.job.toLowerCase().includes("director") 
            ))

            setWriters(movie.crew.filter(
                (member) => member.job.toLowerCase().includes("writer")
            ))
        }

    }, [movie]);

    writers && console.log(writers)

    return (
        <>
        <article className="flex w-[75rem] gap-x-4 ml-6">
        {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
{/* optional chaining = movie? - ? - optional chaining */}
        {movie?.crew.map((member, index) => (
            index < 1 ?
                <div className="w-[72%]">
                <div className="border-y border-neutral-700 py-3">
                    <p className="text-neutral-200">Director: <span className="text-cyan-500">{director?.name}</span></p>
                </div>
            
                <div className=" border-b border-neutral-700 py-3">
                {writers?.length ? (
                    <p className="text-neutral-200">Writer{writers.length > 1 && "s"}: {" "}
                    {writers?.map((writer) => (
                        <span className="text-cyan-500">{index === 0 ? null : ", "}{writer.name}</span>
                    ))} 
                    </p>
                   ) : null}       
                </div>
                <div className=" border-b border-neutral-700 py-3">
                    <p className="text-neutral-200">Stars: {movie?.crew.map((member, index) => {if (index < 4) return (<span className="text-cyan-500">{member.name}, </span>)})} </p>
                </div>
                </div> 
            : null
            ))}
        <div className="m-auto">
            <button className="bg-black w-80 h-14 rounded-2xl text-white flex justify-center items-center gap-x-1 mb-20 mr-2"><BsListUl className="text-xl"/>More watch options</button>        
        </div>
            </article>
        </>
    );
}

export default CrewDetails;