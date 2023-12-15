import { useFilter } from "../../../providers/contexts/filterContext";
import { useCart } from "../../../providers/contexts/cartContext";

export default function CategoryComponent() {
  const { state, dispatch } = useFilter();

  const { listCategories } = state;
  const {
    state: { products },
  } = useCart();

  const onCategoryChange = (category) => {
    dispatch({ type: "SET_CATEGORY", payload: category });
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
    <div className="flex  w-full flex-col p-4  bg-yellow-300 border-b-2 ">
      <span className="font-light text-lg  text-center mb-4 py-2 bg-orange-300 ">
        Sort By Catergory
      </span>
      <div className=" flex sm:flex-col bg-red-300">
        {listCategories.map((category) => (
          <label
            key={category}
            htmlFor={category}
            className="flex   justify-between items-center w-full mt-8 bg-purple-300"
          >
            <span className="font-light py-2  w-full">
              {category}
              {"\t"}({numItemsPerCategory(category)})
            </span>

            <input
              type="checkbox"
              id={category}
              name={category}
              onClick={() => onCategoryChange(category)}
              className="w-5 h-5 mr-4 text-blue-600  border-gray-300 rounded focus:ring-blue-500"
            />
          </label>
        ))}
      </div>
    </div>
  );
}
