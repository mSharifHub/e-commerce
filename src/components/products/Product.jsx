export default function Product() {
  return (
    <div className="grid  bg-slate-50 w-[500px] h-[500px]  cursor-pointer">
      <div className="grid grid-rows-[1fr_0.2fr_0.2fr_0.2fr] m-1 ">
        <div className=" flex justify-center items-center ">image</div>
        <div className=" flex justify-center items-center ">name</div>
        <div className=" flex justify-center items-center ">price</div>
        <div className=" flex justify-center items-center ">rating</div>
      </div>
    </div>
  );
}
