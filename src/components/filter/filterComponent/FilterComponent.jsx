import { useFilter } from "../../../providers/contexts/filterContext";
import { useCart } from "../../../providers/contexts/cartContext";

export default function FilterComponent() {
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
    <div className="flex flex-col bg-yellow-400 mt-12  p-4 ">
      <span className="font-bold text-center bg-red-500 mb-4">
        Sort By Catergory
      </span>
      <div className=" flex flex-col  bg-blue-300">
        {listCategories.map((category) => (
          <label
            key={category}
            htmlFor={category}
            className="flex mt-10  bg-green-300 justify-between w-full"
          >
            <span className="font-semibold">
              {category}
              {"\t"}({numItemsPerCategory(category)})
            </span>

            <input
              type="checkbox"
              id={category}
              name={category}
              className="w-5 h-5 text-blue-600 bg-gray-200 border-gray-300 rounded focus:ring-blue-500"
            />
          </label>
        ))}
      </div>
    </div>
  );
}
