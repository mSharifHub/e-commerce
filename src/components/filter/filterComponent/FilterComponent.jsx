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
    <div className="flex flex-col mt-12  p-4 ">
      <span className="font-light text-lg  text-center mb-4 py-2 border-t-2 ">
        Sort By Catergory
      </span>
      <div className=" flex flex-col  ">
        {listCategories.map((category) => (
          <label
            key={category}
            htmlFor={category}
            className="flex mt-10  justify-between w-full "
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
