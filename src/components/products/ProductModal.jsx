import React from "react";
import ProductMenu from "./components/ProductMenu";

export default function ProductModal({ product, setOnClose }) {
  // TODO add blur

  return (
    <>
      {/* model frame */}
      <div className="fixed inset-0  flex justify-center items-center bg-black bg-opacity-50 z-50 ">
        {/* inner content frame */}
        <div className=" relative w-[95%] h-[95%] grid  grid-cols-1   xl:grid-cols-[1fr_0.5fr] bg-white rounded-xl ">
          {/* column left */}
          <div className=" relative flex flex-1 col-start-1 col-span-1 justify-center items-center">
            {/* product frame */}
            <div className=" w-[400px] h-[400px] sm:w-[800px] sm:h-[800px]  bg-white grid grid-rows-[1fr_0.2fr_0.2fr_0.1fr] rounded-lg shadow-lg transition-all duration-100 ease-out">
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
          {/* column right */}
          <div className="relative flex flex-1 col-start-2 col-span-1 justify-center items-center">
            <ProductMenu />
          </div>
          {/* endcolumn right */}
          {/* button close Modal */}
          <div className="absolute  bottom-8  left-1/2  transform -translate-x-1/2 lg:left-24   flex justify-center items-center transition-all duration-175 ease-in-out ">
            <button
              type="button"
              className=" w-[10rem] h-[3rem] border-2 rounded-xl text-lg font-thin font-mono capitalize transition-all duration-100 hover:scale-105"
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
