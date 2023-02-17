import useAxios from "../customHooks/useAxios";
import { useParams } from "react-router-dom";
import TextStyle from "./TextStyle";
import { BsListUl } from "react-icons/bs";
import { useState, useEffect } from "react";
import ActorModal from "./ActorModal";


const CrewDetails = ({crew}) => {

    const [writers, setWriters] = useState();
    const [director, setDirector] = useState();
    const [members, setMembers] = useState();
    const [actorId, setActorId] = useState();
    const [isActorModalOpen, setIsActorModalOpen] = useState(false);

    console.log(crew)

    const handleShowMember = (id) => {
        setActorId(id)
        setIsActorModalOpen(true)
    }

    const closeActorModal = () => setIsActorModalOpen(false)


    useEffect(() => {
        if (crew) {
            setDirector(crew.find(
                (member) => member.job.toLowerCase().includes("director") 
            ))

            setWriters(crew.filter(
                (member) => member.job.toLowerCase().includes("writer")
            ))
        }

    }, [crew]);

    // writers && console.log(writers)

    return (
        <>
        <article className="w-[75rem] gap-x-4">
{/* optional chaining = movie? - ? - optional chaining */}
        {crew?.map((member, index) => (
            index < 1 ?
                <div className="w-[55rem]">
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
                <div className=" border-b border-neutral-700 py-3" >
                    <p className="text-neutral-200">Stars: {crew?.map((member, index) => {if (index < 4) return (<span className="text-cyan-500" onClick={() => {handleShowMember(member.id)}}>{member.name}, </span>)})} </p>
                </div>
                </div> 
            : null
            ))}
            </article>
            <ActorModal 
            isActorModalOpen={isActorModalOpen}
            closeActorModal={closeActorModal}
            actorId={actorId}
            />
        </>
    );
}

export default CrewDetails;