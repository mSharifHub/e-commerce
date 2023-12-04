export const Product = ({ id, name, price, image, rating }) => {
    return (
        <>
            <div className="grid  bg-slate-200 w-[250px] h-[300px]  rounded-md shadow-md cursor-pointer" key={id}>
                <div className="grid grid-rows-[1fr_0.2fr_0.2fr_0.2fr] m-1 rounded-md bg-slate-100">
                    <div className=" flex justify-center items-center ">image</div>
                    <div className=" flex justify-center items-center ">name</div>
                    <div className=" flex justify-center items-center ">price</div>
                    <div className=" flex justify-center items-center ">rating</div>
                </div>
            </div>
        </>
    );
};
