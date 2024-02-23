import React, { useEffect, useState } from "react";
import ReviewList from "./components/ReviewList";
import ProductPopUpMenu from "./components/ProductPopUpMenu";
import WriteReview from "./components/WriteReview";
import { useUser } from "../../providers/contexts/userContext";
import { reusePort } from "../../helpers/modal_helpers/reusePort";
import Message from "./components/Message";
import ProductSizes from "./components/ProductSizes";

export default function ProductModal({ product, setOnClose }) {
  const { state, dispatch } = useUser();
  const [itemAdded, setItemAdded] = useState(false);
  const [lastAction, setLastAction] = useState(null);
  const [messageClass, setMessageClass] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);
  const [lastItemAdded, setLastItemAdded] = useState(null);

  const handleSizeSelect = (size) => {
    setSelectedSize((prevSize) => (prevSize === size ? null : size));
  };

  const onAddItem = (actionType) => {
    setItemAdded(true);
    setLastAction(actionType);
  };

  const addReview = (newReview) => {
    dispatch({
      type: "ADD_REVIEW",
      payload: newReview,
    });
  };

  const selectItem = (productItem) => {
    const price = productItem.price.slice(1);
    const parsedPrice = parseFloat(price);

    const itemToAdd = {
      id: productItem.id,
      name: productItem.name,
      price: productItem.price,
      image: productItem.image,
      size: selectedSize,
    };

    setLastItemAdded(itemToAdd);

    dispatch({
      type: "ADD_ITEM",
      payload: itemToAdd,
    });

    dispatch({
      type: "UPDATE_BALANCE",
      payload: parsedPrice,
    });

    onAddItem("cart");
  };

  const addToFavorites = (item) => {
    dispatch({
      type: "ADD_FAVORITES",
      payload: item,
    });
    onAddItem("favorites");
  };

  const productReviews = state.reviews.filter(
    (review) => review.productId === product.id,
  );

  useEffect(() => {
    let fadeOutTimer;
    if (itemAdded) {
      setMessageClass("messageFade-in");
      const timer = setTimeout(() => {
        // time spam of message display
        setMessageClass("messageFade-out");
        fadeOutTimer = setTimeout(() => {
          // reset item added so user can add again
          setItemAdded(false);
          // reset item action
          setLastAction(null);
        }, 3000);
      }, 3000);
      return () => {
        clearTimeout(timer);
        clearTimeout(fadeOutTimer);
      };
    }
  }, [itemAdded]);

  return (
    <>
      {/* model frame */}
      <div className="fixed inset-0  flex justify-center items-center bg-black bg-opacity-50 z-50 ">
        {/* inner content frame */}
        <div className=" relative w-[95%] h-[95%] grid grid-cols-1 overflow-y-auto  scroll-smooth  xl:grid-cols-[1fr_0.5fr] bg-white rounded-xl ">
          {/* column left */}
          <div className=" relative flex flex-col flex-1  col-start-1 col-p-1 justify-center items-center">
            {/* product frame */}
            <div className=" w-[400px] h-[400px] mt-4 sm:w-[600px] sm:h-[600px]  bg-white grid grid-cols-1 rounded-lg shadow-lg transition-all duration-100 ease-out">
              <div className=" flex justify-center items-center ">image</div>
            </div>
            {/* end product frame */}
          </div>
          {/* end column left */}

          {/* column right */}
          <div className="col-start-1  xl:col-start-2 col-span-1 xl:overflow-y-auto xl:scroll-smooth  max-h-[90%] w-full">
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
                <span
                  className={`${
                    selectedSize
                      ? "opacity-0 "
                      : " text-md capitalize  text-neutral-900 font-semibold"
                  }`}
                >
                  select a size to proceed
                </span>

                <ProductSizes
                  sizes={product.sizes}
                  onSizeSelect={handleSizeSelect}
                  selectedSize={selectedSize}
                />

                <button
                  type="button"
                  className={` w-[20rem] h-[4rem] bg-black text-white rounded-xl text-lg font-thin  capitalize ${
                    selectedSize === null
                      ? "opacity-10"
                      : " transition-all duration-100 opacity-100 hover:scale-105"
                  } `}
                  onClick={() =>
                    selectItem({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                    })
                  }
                  disabled={selectedSize === null}
                >
                  Add To cart
                </button>
                <button
                  type="button"
                  className="w-[20rem] h-[4rem] border-2 rounded-xl text-lg font-thin  capitalize  
                  transition-all duration-100 hover:scale-105"
                  onClick={() => addToFavorites(product)}
                >
                  Add To Favorites
                </button>

                {/* shopping cart and favorites  end */}
              </div>
              <div className="w-full  mb-4 flex flex-col justify-center  col-span-1 col-start-1  xl:row-start-3 xl:row-span-1">
                <ProductPopUpMenu
                  label="see reviews"
                  Component={ReviewList}
                  componentProps={{ reviews: productReviews }}
                  count={productReviews.length}
                />

                <ProductPopUpMenu
                  label="write a review"
                  Component={WriteReview}
                  componentProps={{
                    addReview,
                    productId: product.id,
                  }}
                />
              </div>
              <div className="flex justify-center items-center  col-span-1 col-start-1 xl:row-start-4 xl:row-span-1">
                <button
                  type="button"
                  className="  w-[8rem] h-[3rem]  border-2 rounded-xl text-lg font-thin  capitalize transition-all duration-100 hover:scale-105"
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

      {itemAdded &&
        lastItemAdded &&
        reusePort(
          <Message
            actionType={lastAction}
            product={lastItemAdded}
            messageClass={messageClass}
          />,
        )}
    </>
  );
}
