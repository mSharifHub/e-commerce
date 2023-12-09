import { CategoryDisplay } from "../categoryDisplay/CategoryDisplay";
import { Filter } from "../filter/Filter";

export function Home() {
  return (
    <div className="h-screen  w-screen grid grid-cols-[300px_1fr]">
      <Filter />
      <div className="p-4 h-full w-full overflow-x-scroll  scroll whitespace-nowrap">
        <CategoryDisplay />
      </div>
    </div>
  );
}
