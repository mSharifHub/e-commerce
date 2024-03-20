import { faHammer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div className=" flex   justify-center  h-screen w-screen">
      <div className=" flex flex-col justify-center items-center h-[50rem] w-[50rem] rounded-lg  text-8xl">
        <FontAwesomeIcon icon={faHammer} size="2xl" />
      </div>
    </div>
  );
}
