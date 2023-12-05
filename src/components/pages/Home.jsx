import { CategoryDisplay } from "../categoryDisplay/CategoryDisplay";
import { Filter } from "../filter/Filter";

export const Home = () => {
    return (
        <>
            <div className="h-screen  w-screen grid grid-cols-[300px_1fr]">
                <div className=" bg-green-300">
                    <Filter />
                </div>
                <div className="h-full w-full overflow-x-scroll  scroll whitespace-nowrap">
                    <CategoryDisplay />
                </div>
            </div>
        </>
    );
};
