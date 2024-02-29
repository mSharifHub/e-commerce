/* eslint-disable react-hooks/exhaustive-deps */

import { useUser } from "../../../providers/contexts/userContext";

export default function Message({ actionType, product, messageClass }) {
  const {
    state: { shoppingCart },
  } = useUser();

  return (
    <>
      {/* outter container */}
      <div
        className={`absolute  top-10  inset-x-1/2 -translate-x-1/2   h-[250px] w-[400px] flex justify-center items-center bg-white shadow-lg rounded-lg  z-50  ${messageClass}
        `}
      >
        {/* container holding content */}
        <div className="flex flex-col  h-full m-2">
          {/* Main action  header */}
          <div className="flex justify-center items-center mt-2 text-lg capitalize">
            <span className="flex justify-center items-center">
              added to {actionType}
            </span>
          </div>
          {/* inner container holding product image and name */}
          <div className="grid grid-cols-2 h-full my-2 mx-2">
            {/* place holder for product image */}
            <div className="col-start-1 col-span-1 flex justify-start items-center">
              <div className=" flex justify-center items-center h-[80%] w-[80%] rounded-md bg-slate-100 whitespace-nowrap text-sm">
                image placeholder
              </div>
            </div>
            {/* end of place holder for product image */}
            {/* place holder for product name */}
            <div className="col-start-2 col-span-1 flex justify-start items-start mt-4">
              <div className=" flex flex-col">
                <span className="flex whitespace-normal text-sm text-neutral-600 font-semibold">
                  {product.name}
                </span>
                <span className="flex whitespace-normal text-sm text-neutral-600 font-semibold">
                  {product.category} section
                </span>
                {product.size !== null && product.size !== undefined ? (
                  <span className="flex whitespace-normal capitalize text-sm text-neutral-600 font-semibold">
                    {`size ${product.size}`}
                  </span>
                ) : null}

                <span className="flex whitespace-normal capitalize text-sm text-neutral-600 font-semibold">
                  {product.price}
                </span>
              </div>
            </div>
            {/* end place holder for product name */}
          </div>
          {/* end of inner container for name and image   */}
          <div className="flex justify-between w-full ">
            <button
              type="button"
              className="flex justify-center items-center w-[40%] h-[50px] mb-4 mx-2  border-2 rounded-xl  font-thin  capitalize transition-all duration-100 hover:scale-105"
            >
              view bag
              {shoppingCart.length > 0 ? ` (${shoppingCart.length})` : null}
            </button>
            <button
              type="button"
              className="flex justify-center items-center w-[40%] h-[50px] mb-4 mx-2  border-2 rounded-xl  font-thin  capitalize  text-white bg-black transition-all duration-100 hover:scale-105"
            >
              checkout
            </button>
          </div>
        </div>
        {/* end of container holding content */}
      </div>
    </>
  );
}
