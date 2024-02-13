export default function Message() {
  return (
    <div className="absolute top-2 inset-x-1/2 -translate-x-1/2  h-[50px] w-[200px] flex justify-center items-center bg-white shadow-lg rounded-lg z-50">
      <div className="flex w-full justify-around items-center">
        <span className="capitalize font-normal text-xl text-">
          Adding to Cart
        </span>
        <svg className=" inline-block w-8 h-8 border-4 border-neutral-900 border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  );
}
