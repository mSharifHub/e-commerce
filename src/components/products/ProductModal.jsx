import React from "react";
import FilterPopUpMenu from "../filter/filterPopUpMenu/FilterPopUpMenu";

export default function ProductModal({ product, setOnClose }) {
  return (
    <>
      {/* model frame */}
      <div className="fixed inset-0  flex justify-center items-center bg-black bg-opacity-50 z-50 ">
        {/* inner content frame */}
        <div className=" relative w-[95%] h-[95%] grid  grid-cols-1   xl:grid-cols-[1fr_0.5fr] bg-white rounded-xl ">
          {/* column left */}
          <div className=" relative flex flex-col flex-1  col-start-1 col-span-1 justify-center items-center">
            {/* product frame */}
            <div className=" w-[400px] h-[400px] sm:w-[600px] sm:h-[600px]  bg-white grid grid-cols-1 rounded-lg shadow-lg transition-all duration-100 ease-out">
              <div className=" flex justify-center items-center ">image</div>
            </div>
            {/* end product frame */}
          </div>
          {/* end column left */}

          {/* column right */}
          <div className="col-start-1 xl:col-start-2 col-span-1 overflow-y-auto scroll-smooth whitespace-nowrap max-h-[90%] w-full">
            {/* inner content */}
            <div className="h-full grid grid-rows-1 xl:grid-rows-[1fr_0.5fr_1fr]">
              {/* Product details */}
              <div className="flex  flex-col justify-start items-center row-start-1 row-span-1 mt-4 ">
                <span> {product.name}</span>
                <span> {product.color}</span>
                <span> {product.category}</span>
                <span>{product.price}</span>
              </div>
              {/* End Product details  */}

              {/* shopping cart and favorites */}
              <div className=" flex flex-col justify-center items-center row-start-1 xl:row-start-2  row-span-1 space-y-10">
                <button
                  type="button"
                  className=" w-[20rem] h-[4rem] bg-black text-white rounded-xl text-lg font-thin font-mono capitalize transition-all duration-100 hover:scale-105"
                  onClick={setOnClose}
                >
                  Add To cart
                </button>
                <button
                  type="button"
                  className=" w-[20rem] h-[4rem] border-2 rounded-xl text-lg font-thin font-mono capitalize transition-all duration-100 hover:scale-105"
                  onClick={setOnClose}
                >
                  Add To Favorites
                </button>
                {/* shopping cart and favorites  end */}
              </div>
              <div className="w-full flex flex-col justify-center  row-start-1 xl:row-start-3 row-span-1">
                <FilterPopUpMenu label="product rating" Component={() => {}} />
                <FilterPopUpMenu label="see reviews" Component={() => {}} />
                <FilterPopUpMenu label="write a review" Component={() => {}} />
              </div>
            </div>
            {/* inner content end */}
          </div>
          {/* end column right */}

          {/* button close Modal */}
          <div className="absolute  bottom-8 hidden  left-4 xl:flex justify-center items-center transition-all duration-175 ease-in-out ">
            <button
              type="button"
              className=" w-[8rem] h-[4rem] border-2 rounded-xl text-lg font-thin font-mono capitalize transition-all duration-100 hover:scale-105"
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
