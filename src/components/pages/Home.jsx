import { CategoryDisplay } from "../categoryDisplay/CategoryDisplay";
import { Filter } from "../filter/Filter";

export function Home() {
  return (
    <div className="h-screen  w-screen flex">
      <div className=" flex flex-none  -ml-[300px] transition-all  duration-500 ease-in-out md:ml-0  ">
        <Filter />
      </div>
      <div className=" flex grow flex-col p-4  overflow-x-scroll  scroll whitespace-nowrap  scrollbar-hide">
        <CategoryDisplay />
      </div>
    </div>
  );
}
