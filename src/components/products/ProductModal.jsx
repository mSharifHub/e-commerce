import React, { useState } from "react";
import ReviewList from "./components/ReviewList";
import ProductPopUpMenu from "./components/ProductPopUpMenu";
import WriteReview from "./components/WriteReview";

export default function ProductModal({ product, setOnClose }) {
  const [reviews, setReviews] = useState(product.reviews || []);

  const addReview = (newReview) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  return (
    <>
      {/* model frame */}
      <div className="fixed inset-0  flex justify-center items-center bg-black bg-opacity-50 z-50 ">
        {/* inner content frame */}
        <div className=" relative w-[95%] h-[95%] grid  grid-cols-1   xl:grid-cols-[1fr_0.5fr] bg-white rounded-xl ">
          {/* column left */}
          <div className=" relative flex flex-col flex-1  col-start-1 col-p-1 justify-center items-center">
            {/* product frame */}
            <div className=" w-[400px] h-[400px] sm:w-[600px] sm:h-[600px]  bg-white grid grid-cols-1 rounded-lg shadow-lg transition-all duration-100 ease-out">
              <div className=" flex justify-center items-center ">image</div>
            </div>
            {/* end product frame */}
          </div>
          {/* end column left */}

          {/* column right */}
          <div className="col-start-1 xl:col-start-2 col-p-1 overflow-y-auto scroll-smooth  max-h-[90%] w-full">
            {/* inner content */}
            <div className="h-full grid grid-cols-1 xl:grid-rows-[1fr_0.5fr_1fr_0.25fr]">
              {/* Product details */}
              <div className="h-full col-span-1 col-start-1 xl:row-start-1 xl:row-span-1 mt-4 mx-4 whitespace-normal">
                <div className="flex flex-col justify-between ">
                  <div className="flex  flex-col justify-start items-center font-thin font-sans tracking-wider ">
                    <span className="text-xl">{product.name}</span>
                    <span className="text-xl uppercase font-medium text-neutral-600 ">{`"${product.color}"`}</span>
                    <span className="text-md  font-semibold text-neutral-500">
                      {product.category}
                    </span>
                    <span className="mt-4 font-bold text-md text-neutral-500">
                      {product.price}
                    </span>
                  </div>

                  <p className="font-thin text-lg flex text-justify xl:text-left p-4 text-balance">
                    {product.description}
                  </p>
                </div>
              </div>
              {/* End Product details  */}

              {/* shopping cart and favorites */}
              <div className=" flex flex-col mt-8 justify-center items-center col-span-1 col-start-1   xl:row-start-2  xl:row-span-1 space-y-10">
                <button
                  type="button"
                  className=" w-[20rem] h-[4rem] bg-black text-white rounded-xl text-lg font-thin  capitalize transition-all duration-100 hover:scale-105"
                  onClick={setOnClose}
                >
                  Add To cart
                </button>
                <button
                  type="button"
                  className=" w-[20rem] h-[4rem] border-2 rounded-xl text-lg font-thin  capitalize transition-all duration-100 hover:scale-105"
                  onClick={setOnClose}
                >
                  Add To Favorites
                </button>

                {/* shopping cart and favorites  end */}
              </div>
              <div className="w-full flex flex-col justify-center  col-span-1 col-start-1  xl:row-start-3 xl:row-span-1">
                <ProductPopUpMenu
                  label="see reviews"
                  Component={ReviewList}
                  componentProps={{ reviews }}
                  count={reviews.length}
                />

                <ProductPopUpMenu
                  label="write a review"
                  Component={WriteReview}
                  componentProps={{ addReview }}
                />
              </div>
              <div className="flex justify-center items-center col-span-1 col-start-1 xl:row-start-4 xl:row-span-1">
                <button
                  type="button"
                  className=" w-[8rem] h-[4rem] border-2 rounded-xl text-lg font-thin  capitalize transition-all duration-100 hover:scale-105"
                  onClick={setOnClose}
                >
                  return
                </button>
              </div>
            </div>
            {/* inner content end */}
          </div>
          {/* end column right */}
        </div>
        {/* inner content frame */}
      </div>
      {/* end model frame */}
    </>
  );
}
