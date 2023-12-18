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
    <div className=" relative flex h-full w-full flex-col  justify-start p-4  ">
      <div className="flex-col ">
        {listCategories.map((category) => (
          <label
            key={category}
            htmlFor={category}
            className="flex w-full mt-10 mr-4 justify-center items-center sm:justify-between   "
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
              className="w-5 h-5 mx-5 text-blue-600  border-gray-300 rounded focus:ring-blue-500"
            />
          </label>
        ))}
      </div>
    </div>
  );
}
