export default function ProductModal({ product, setOnClose }) {
  return (
    <>
      {/* model frame */}
      <div className="fixed inset-0  flex justify-center items-center bg-black bg-opacity-50 z-50">
        {/* inner content frame */}
        <div className=" relative w-[95%] h-[95%] grid grid-cols-[1fr_0.5fr] bg-white rounded-xl">
          {/* column left */}
          <div className=" relative col-start-1 col-span-1 flex justify-center items-center">
            {/* product frame */}
            <div className=" w-[80%] h-[80%] bg-white grid grid-rows-[1fr_0.2fr_0.2fr_0.1fr] rounded-lg shadow-lg">
              <div className=" flex justify-center items-center ">image</div>
              <div className=" flex justify-center items-center ">
                {product.name}
              </div>
              <div className=" flex justify-center items-center ">
                {product.price}
              </div>
              <div className=" flex justify-center items-center ">
                {product.rating}
              </div>
            </div>
            {/* end product frame */}
          </div>
          {/* end column left */}
          {/* button close Modal */}
          <div className="absolute  bottom-4 left-24   flex justify-center items-center ">
            <button
              type="button"
              className=" w-[10rem] h-[3rem] border-2 rounded-xl text-lg font-thin font-mono capitalize transition-all duration-100 hover:scale-110"
              onClick={setOnClose}
            >
              return
            </button>
          </div>
          {/* end button close Modal */}
        </div>
        {/* inner content frame */}
      </div>
      {/* end model frame */}
    </>
  );
}
