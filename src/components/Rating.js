import TextStyle from "./TextStyle";
import {IoIosStar} from "react-icons/io"


const Rating = ({vote_average}) => {
    console.log(vote_average)


    return (
        <>
            <div className="flex gap-x-2">
                <IoIosStar className="text-yellow-400 text-2xl" />
                <TextStyle text={vote_average?.toFixed(1)}/>
                <p className="text-[#666666] ">| 350K</p>
            </div>
        </>
    );
}

export default Rating;