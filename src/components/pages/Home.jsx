import { CategoryDisplay } from "../categoryDisplay/CategoryDisplay";
import { Filter } from "../filter/Filter";

export const Home = () => {
    return (
        <>
            <div className=" relative w-screen  h-screen  grid grid-cols-[300px_1fr]">
                <div className="z-0 bg-green-300">
                    <Filter />
                </div>
                <div className="h-full w-full overflow-x-scroll z-10 scroll whitespace-nowrap">
                    <div className="z-20 ">
                        <CategoryDisplay />
                    </div>
                </div>
            </div>
        </>
    );
};
