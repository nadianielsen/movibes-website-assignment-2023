import {IoIosStar} from "react-icons/io"

const MovieCards = () => {
    return (
        <div className="bg-white w-48 h-72 rounded-3xl m-5">
            <div className="bg-neutral-300 bg-opacity-20 w-20 h-7 rounded-tr-3xl rounded-bl-3xl ml-[7.05rem] flex justify-evenly">
                <IoIosStar className="text-yellow-400 text-2xl"/>
                <h3 className="text-xl text-white">1.2</h3>
                <div className="bg-neutral-100 bg-opacity-20 w-20 h-7 rounded-tr-3xl rounded-bl-3xl ml-[7.05rem] blur-sm"></div>
            </div>
        </div>
     );
     
}
 
export default MovieCards;