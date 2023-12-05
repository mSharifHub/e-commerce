import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";


export const HomeIcon = () =>{
    return(
        <>
        <FontAwesomeIcon  icon={faHouse} size="2xl" className="text-slate-500 hover:text-slate-700 duration-100 ease-in-out"  />
        </>
    )
}