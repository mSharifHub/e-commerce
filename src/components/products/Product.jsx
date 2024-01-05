export default function Product() {
  return (
    <div className="grid  bg-slate-50 transition-all duration-500 ease-out  cursor-pointer h-[400px] w-[400px] xl:h-[300px]   2xl:h-[400px] ">
      <div className="grid grid-rows-[1fr_0.2fr_0.2fr_0.2fr] m-1 ">
        <div className=" flex justify-center items-center ">image</div>
        <div className=" flex justify-center items-center ">name</div>
        <div className=" flex justify-center items-center ">price</div>
        <div className=" flex justify-center items-center ">rating</div>
      </div>
    </div>
  );
}
