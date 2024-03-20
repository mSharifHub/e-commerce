/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import ReviewList from "./components/ReviewList";
import ProductPopUpMenu from "./components/ProductPopUpMenu";
import WriteReview from "./components/WriteReview";
import { useUser } from "../../providers/contexts/userContext";
import { useFilter } from "../../providers/contexts/filterContext";
import Message from "./components/Message";
import ProductSizes from "./components/ProductSizes";
import PaginationLeft from "./components/icons/PaginationLeft";
import PaginationRight from "./components/icons/PaginationRight";

export default function ProductModal({ product, setOnClose }) {
  const { state: userState, dispatch: userDispatch } = useUser();
  const { state: filterState, dispatch: filterDispatch } = useFilter();
  const [itemAdded, setItemAdded] = useState(false);
  const [lastAction, setLastAction] = useState(null);
  const [messageClass, setMessageClass] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);
  const [lastItemAdded, setLastItemAdded] = useState(null);
  const [selectedImage, setSelectedImage] = useState(
    product.image[0] || "no image",
  );

  const handleImagePagination = (direction) => {
    const numberOfImages = product.image.length;
    const { image } = product;
    const currentIndex = image.indexOf(selectedImage);

    let newIndex;

    switch (direction) {
      case "right":
        newIndex = (currentIndex + 1) % numberOfImages;
        break;

      case "left":
        newIndex = (currentIndex - 1 + numberOfImages) % numberOfImages;
        break;

      default:
        return null;
    }

    setSelectedImage(image[newIndex]);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize((prevSize) => (prevSize === size ? null : size));
  };

  const onAddItem = (actionType) => {
    setItemAdded(true);
    setLastAction(actionType);
  };

  const addReview = (newReview) => {
    userDispatch({
      type: "ADD_REVIEW",
      payload: newReview,
    });

    const newReviewId = {
      ...newReview,
      userId: userState.userId,
    };

    filterDispatch({
      type: "ADD_REVIEW",
      payload: newReviewId,
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

    userDispatch({
      type: "ADD_ITEM",
      payload: itemToAdd,
    });

    userDispatch({
      type: "UPDATE_BALANCE",
      payload: parsedPrice,
    });

    onAddItem("cart");
  };

  const addToFavorites = (item) => {
    userDispatch({
      type: "ADD_FAVORITES",
      payload: item,
    });
    onAddItem("favorites");
  };

  const productReviews = filterState.reviews.filter(
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
          setItemAdded(false);
          setLastAction(null);
          setLastItemAdded(null);
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
        <div className=" relative w-[98%] h-[98%] grid grid-cols-1 overflow-y-auto  scroll-smooth  xl:grid-cols-[1fr_0.5fr] bg-white rounded-xl ">
          {/* column left */}
          <div className=" relative flex flex-1  col-start-1 col-span-1 justify-center items-start mt-20">
            {/* product frame */}
            <div className="hidden md:grid grid-rows-5  h-[600px] w-[8rem]  mx-8 my-2 gap-4">
              {product.image.map((img, index) => (
                <div
                  key={`${img}-${index + 1}`}
                  className="relative  flex justify-center items-center rounded-md shadow-sm cursor-pointer"
                  onMouseEnter={() => setSelectedImage(img)}
                >
                  <div className=" absolute inset-0 bg-black opacity-0 hover:opacity-20 rounded-lg transition-opacity duration 200" />
                  <img src={img} alt={img} />
                </div>
              ))}
            </div>
            <div className=" relative w-[400px] h-[400px] sm:w-[600px] sm:h-[600px]  bg-white grid grid-cols-1 rounded-lg shadow-sm cursor-pointer transition-all duration-175">
              <div className=" flex justify-center items-center ">
                <img src={selectedImage} alt={selectedImage} />
              </div>

              <div
                onClick={() => handleImagePagination("left")}
                className="absolute bottom-8 right-20 bg-neutral-100 text-black rounded-full  flex items-center justify-center p-2 transition-transform duration-100 hover:scale-110 cursor-pointer"
              >
                <PaginationLeft />
              </div>
              <div
                onClick={() => handleImagePagination("right")}
                className="absolute bottom-8 right-8  bg-neutral-100  text-black rounded-full  flex items-center justify-center p-2 transition-transform duration-100 hover:scale-110 cursor-pointer"
              >
                <PaginationRight />
              </div>
            </div>

            {/* end product frame */}
          </div>
          {/* end column left */}

          {/* column right */}
          <div className=" relative col-start-1  xl:col-start-2 col-span-1 xl:overflow-y-auto xl:scroll-smooth  max-h-[90%] w-full mt-10 ">
            {/* inner content */}
            <div className=" h-full grid grid-cols-1 xl:grid-rows-[1fr_0.5fr_1fr_0.25fr]">
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
              <div className=" flex flex-col  justify-center items-center col-span-1 col-start-1   xl:row-start-2  xl:row-span-1 space-y-10">
                <span
                  className={`${
                    selectedSize
                      ? "opacity-0 "
                      : " text-md capitalize  text-neutral-900 font-semibold"
                  }`}
                >
                  select a size to checkout
                </span>

                <ProductSizes
                  sizes={product.sizes}
                  onSizeSelect={handleSizeSelect}
                  selectedSize={selectedSize}
                />

                <button
                  type="button"
                  className={` w-[20rem] h-[4rem] bg-black text-white rounded-full text-lg font-thin  capitalize ${
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
                  className="w-[20rem] h-[4rem] border-2 rounded-full text-lg font-thin  capitalize  
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
        {itemAdded && (
          <Message
            actionType={lastAction}
            product={lastItemAdded !== null ? lastItemAdded : product}
            messageClass={messageClass}
          />
        )}
      </div>
      {/* end model frame */}
    </>
  );
}
