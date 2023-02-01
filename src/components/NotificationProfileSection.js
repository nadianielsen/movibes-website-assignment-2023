import notification from "../components/notification.svg"
import { BsFillPersonFill } from "react-icons/bs"


const NotificationProfileSection = () => {
    return ( 
        <section className="flex gap-x-6 justify-end mt-6 mr-6">
         <button className="w-16 h-16 bg-[#262626] rounded-full">
                <img src={notification} alt="" className="m-auto pt-1" />
            </button>
            <div className="w-16 h-16 bg-[#262626] rounded-full">
            <BsFillPersonFill className="text-4xl text-neutral-500 m-auto mt-3 "/>
            </div>
        </section>
     );
}
 
export default NotificationProfileSection;