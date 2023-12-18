import { CategoryDisplay } from "../categoryDisplay/CategoryDisplay";
import { Filter } from "../filter/Filter";

export function Home() {
  return (
    <div className="h-screen  mx-[100px] grid sm:grid-cols-[350px_1fr] ">
      <div className="hidden sm:inline-flex">
        <Filter />
      </div>
      <div className="p-4 h-full w-full overflow-x-scroll  scroll whitespace-nowrap  scrollbar-hide">
        <CategoryDisplay />
      </div>
    </div>
  );
}
