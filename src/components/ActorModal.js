import axios from 'axios';
import Modal from 'react-modal';
import { useState, useEffect } from "react";
// import { VscChromeClose } from "react-icons/vsc"
import { VscChromeClose } from "react-icons/vsc"
import { IoIosStar } from "react-icons/io"




const ActorModal = ({ isActorModalOpen, closeActorModal, actorId }) => {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [person, setPerson] = useState()

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
      boxShadow: '0 0 20px #0000006f'
    },
    overlay: {
      backgroundColor: '#282828b2',
      backdropFilter: 'blur(0.3rem)',
    }
  };

  useEffect(() => {
    axios(`https://api.themoviedb.org/3/person/${actorId}?api_key=75f15351c6119a96302b866663e596b0&language=en-US`)
      .then((response) => setPerson(response.data))
      .finally(() => {
        setLoading(false)
      })
// nulstiller statet som er en cleanup
// bruger det til at man kan se i milisekunder at hvis man skifter fra person til person, så kan man stadig nå at se den anden person man var på før.
      
  }, [actorId])

  const handleCloseRequest = () => {
    setPerson(null);
    closeActorModal();
  }

  return (


    <Modal isOpen={isActorModalOpen} onRequestClose={handleCloseRequest} style={customStyles} contentLabel="Example Modal">
      <button onClick={closeActorModal}><VscChromeClose className="text-white text-3xl hover:text-cyan-400 transition" /></button>
      <div className=" w-[60vw] h-[70vh]">
        {loading && <p>Loading...</p>}
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
                <p className='text-neutral-200 pt-2 gap-x-1 flex'><IoIosStar className="text-yellow-400 text-xl" />{person.popularity.toFixed(1)}%/100</p>
                {person.deathday ? (
                  <p className='text-neutral-200 pt-2'>Decease: {person.deathday}</p>
                ) : null}
              </div>
            </div>
            <div className=' h-0.5 bg-neutral-800 mt-7 mx-4'></div>
            <p className='text-neutral-200 p-4 '>{person.biography}</p>
            <div className=' h-0.5 bg-neutral-800 mb-7 mx-4'></div>
          </>
        )}
      </div>
    </Modal>

  );
}

export default ActorModal;

