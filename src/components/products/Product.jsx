export const Product = ({ product }) => {
    return (
        <>
            <div className="grid bg-slate-200 w-[200px] h-[200px] min rounded-md shadow-md">
                <div className="grid grid-rows-[1fr_0.2fr_0.2fr_0.2fr] m-1 rounded-md bg-slate-100">
                    <div className=" flex justify-center items-center "></div>
                    <div className=" flex justify-center items-center "></div>
                    <div className=" flex justify-center items-center "></div>
                    <div className=" flex justify-center items-center"></div>
                </div>
            </div>
        </>
    );
};
