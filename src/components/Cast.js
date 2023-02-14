import Modal from 'react-modal';
import { useState, useEffect } from "react";
import { VscChromeClose } from "react-icons/vsc"
import axios from 'axios';
import {IoIosStar} from "react-icons/io"


const Cast = ({id}) => {

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#212121',
          border: 'none',
        },
        overlay: {
            backgroundColor: '#282828b2',
            backdropFilter: 'blur(0.3rem)',
        }
      };

      const [modalIsOpen, setModalIsOpen] = useState(false);

      const openModal = () => {
        setModalIsOpen(true)
      }

      const closeModal = () => {
        setModalIsOpen(false)
      }

      const [loading, setLoading] = useState(true)
      const [error, setError] = useState()
      const [person, setPerson] = useState()

      useEffect(() => {
        axios(`https://api.themoviedb.org/3/person/${id}?api_key=75f15351c6119a96302b866663e596b0&language=en-US`)
        .then((response) => setPerson(response.data))
        .catch(() => setError("Something went wrong"))
        .finally(() => setLoading(false))
      }, [])

      person && console.log(person)
   
    return (
       <article className=''>
        <button onClick={openModal} className="text-neutral-200">Open Modal</button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
            <button onClick={closeModal}><VscChromeClose className="text-white text-3xl hover:text-cyan-400 transition"/></button>
            <div className=" w-[60vw] h-[70vh]">
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {person && (
                    <>
                    <div className='flex gap-x-4'>
                      <div className=' w-[12rem] h-[12rem] aspect-video relative'>
                        <img src={`https://image.tmdb.org/t/p/original${person.profile_path}`} alt="" className='absolute w-full h-full object-cover rounded-full m-[0.15rem]' />
                        <div className='w-[12.3rem] h-[12.3rem] bg-gradient-to-l from-cyan-400 rounded-full'></div>
                      </div>
                      <div className='pt-10'>
                        <h2 className='text-neutral-200 pt-2 font-semibold'>{person.name}</h2>
                        <p className='text-neutral-200 pt-2'>Born: {person.birthday}</p>
                        <p className='text-neutral-200 pt-2'>Job/Department: {person.known_for_department}</p>
                        <p className='text-neutral-200 pt-2 gap-x-1 flex'><IoIosStar className="text-yellow-400 text-xl"/>{person.popularity}</p>
                        {person.deathday ? (
                          <p className='text-neutral-200 pt-2'>Decease: {person.deathday}</p>
                        ) : null } 
                      </div>
                    </div>
                    <div className=' h-0.5 bg-neutral-800 mt-7 mx-4'></div>
                        <p className='text-neutral-200 p-4 '>{person.biography}</p>
                        <div className=' h-0.5 bg-neutral-800 mb-7 mx-4'></div>
                    </>
                )}
            </div>
        </Modal>
       </article>
    );
}

export default Cast;

//functioner og state er inde på detail og laver modalopen, closemodal props. 