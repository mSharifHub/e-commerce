export default function Product({ productsLen }) {
  return (
    <>
      {/* content outside */}
      <div
        className={` grid ${
          productsLen > 1
            ? "h-[400px] w-[400px] 2xl:h-[400px]"
            : "h-[800px] w-[800px] "
        } bg-slate-50 transition-all duration-500 ease-out  cursor-pointer`}
      >
        {/* content inside structured as grid */}
        <div className="grid grid-rows-[1fr_0.2fr_0.2fr_0.2fr] m-1 ">
          <div className=" flex justify-center items-center ">image</div>
          <div className=" flex justify-center items-center ">name</div>
          <div className=" flex justify-center items-center ">price</div>
          <div className=" flex justify-center items-center ">rating</div>
        </div>
      </div>
    </>
  );
}
