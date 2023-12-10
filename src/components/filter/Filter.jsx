import { useState } from "react";
import { useCart } from "../../providers/contexts/cartContext";

export function Filter() {
  const [selected, setSelected] = useState(null);

  const {
    state: { products },
  } = useCart();

  const handleSelection = (e) => {
    setSelected(e.target.id);
  };

  const numItemsPerCategory = (category) => {
    let numOfItems = 0;

    switch (category) {
      case "":
        numOfItems = products.length;
        break;
      default:
        numOfItems = products.filter(
          (product) => product.category === category,
        ).length;
        break;
    }

    return numOfItems;
  };

  return (
    <div className="h-full w-full relative flex flex-col bg-slate-400">
      <form>
        <div className="flex flex-col p-4  mt-10 bg-green-300">
          <span className="font-bold text-center bg-red-600 mb-4">
            Sort By Price
          </span>
          <div className="flex justify-around ">
            <label
              htmlFor="pricing-filter-h"
              className={`  cursor-pointer ${
                selected === "pricing-filter-h"
                  ? "bg-slate-300 rounded-md "
                  : ""
              } p-2 `}
            >
              Highest price
              <input
                type="radio"
                name="group-1"
                id="pricing-filter-h"
                onChange={handleSelection}
              />
            </label>

            <label
              htmlFor="pricing-filter-l"
              className={`cursor-pointer ${
                selected === "pricing-filter-l"
                  ? "bg-slate-300 rounded-md "
                  : ""
              } p-2 `}
            >
              Lowest price
              <input
                type="radio"
                name="group-1"
                id="pricing-filter-l"
                onChange={handleSelection}
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col bg-yellow-400  p-4 ">
          <span className="font-bold text-center bg-red-500 mb-4">
            Sort By Catergory
          </span>
          <div className="flex flex-col justify-start items-start  bg-red-200">
            <div className="bg-blue-300 w-full">
              <label htmlFor="all-categories">
                All Categories ({numItemsPerCategory("")})
                <div className="inline-block ml-4">
                  <input type="checkbox" id="all-categories" defaultChecked />
                </div>
              </label>
            </div>
            <div className="bg-blue-100 w-full mt-4">
              <label htmlFor="lighting-category">
                Lighting ({numItemsPerCategory("Lighting")})
                <div className="inline-block ml-4">
                  <input type="checkbox" id="ighting-category" />
                </div>
              </label>
            </div>
            <div className="bg-blue-100 w-full mt-4">
              <label htmlFor="furniture-category">
                Furniture ({numItemsPerCategory("Furniture")})
                <div className="inline-block ml-4">
                  <input type="checkbox" id="furniture-category" />
                </div>
              </label>
            </div>
            <div className="bg-blue-100 w-full mt-4">
              <label htmlFor="decor-category">
                Decor ({numItemsPerCategory("Decor")})
                <div className="inline-block ml-4">
                  <input type="checkbox" id="decor-category" />
                </div>
              </label>
            </div>
            <div className="bg-blue-100 w-full mt-4">
              <label htmlFor="electronics-category">
                Electronics ({numItemsPerCategory("Electronics")})
                <div className="inline-block ml-4">
                  <input type="checkbox" id="electronics-category" />
                </div>
              </label>
            </div>
            <div className="bg-blue-100 w-full mt-4">
              <label htmlFor="garden&outdoor-category">
                Garden & Outdoor ({numItemsPerCategory("Garden & Outdoor")})
                <div className="inline-block ml-4">
                  <input type="checkbox" id="garden&outdoor-category" />
                </div>
              </label>
            </div>
            <div className="bg-blue-100 w-full mt-4">
              <label htmlFor="kitchen-category">
                Kitchen Accessories (
                {numItemsPerCategory("Kitchen Accessories")})
                <div className="inline-block ml-4">
                  <input type="checkbox" id="kitchen-category" />
                </div>
              </label>
            </div>
            <div className="bg-blue-100 w-full mt-4">
              <label htmlFor="fitness-category">
                Fitness ({numItemsPerCategory("Fitness")})
                <div className="inline-block ml-4">
                  <input type="checkbox" id="fitness-category" />
                </div>
              </label>
            </div>
            <div className="bg-blue-100 w-full mt-4">
              <label htmlFor="accessories-category">
                Accessories ({numItemsPerCategory("Accessories")})
                <div className="inline-block ml-4">
                  <input type="checkbox" id="accessories-category" />
                </div>
              </label>
            </div>
            <div className="bg-blue-100 w-full mt-4">
              <label htmlFor="arts&crafts-category">
                Arts & Crafts ({numItemsPerCategory("Arts & Crafts")})
                <div className="inline-block ml-4">
                  <input type="checkbox" id="arts&crafts-category" />
                </div>
              </label>
            </div>
            <div className="bg-blue-100 w-full mt-4">
              <label htmlFor="fashion-category">
                Fashion ({numItemsPerCategory("Fashion")})
                <div className="inline-block ml-4">
                  <input type="checkbox" id="fashion-categoryy" />
                </div>
              </label>
            </div>
            <div className="bg-blue-100 w-full mt-4">
              <label htmlFor="food&beverage-category">
                Food & Beverage ({numItemsPerCategory("Food & Beverage")})
                <div className="inline-block ml-4">
                  <input type="checkbox" id="food&beverage-categoryy" />
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-purple-200 p-4  ">
          <span className="font-bold text-center bg-red-500 mb-4">
            Sort By Availability
          </span>
          <div className="flex justify-around  bg-red-200">
            <label htmlFor="include-on-stock-only">
              include on stock only
              <div className="inline-block ml-4">
                <input type="checkbox" id="include-on-stock-only" />
              </div>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
