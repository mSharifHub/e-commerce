export default function ToogleButtonComponent({ inStock }) {
  return (
    <div className=" relative flex justify-center items-center cursor-pointer ">
      <div
        className={`w-[60px] h-[25px] ${
          inStock ? "bg-slate-900" : " bg-white"
        } transition duration-300 border-2 border-slate-200  mx-4 text-slate-400 shadow-md  rounded-full `}
      />
      <div
        className={`absolute right-0 bg-slate-200 border-[0.5px] border-black shadow-md  rounded-full w-[30px] h-[25px] ${
          inStock ? "-translate-x-4 " : " -translate-x-12"
        } transition duration-300`}
      />
    </div>
  );
}
