import { CategoryDisplay } from "../categoryDisplay/CategoryDisplay";
import { Filter } from "../filter/Filter";

export function Home() {
  return (
    <div className="h-screen  w-screen grid grid-cols-[350px_1fr]">
      <div className="">
        <Filter />
      </div>
      <div className="p-4 h-full w-full overflow-x-scroll  scroll whitespace-nowrap">
        <CategoryDisplay />
      </div>
    </div>
  );
}
