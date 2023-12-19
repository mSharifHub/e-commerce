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

  const result = products.filter((product) =>
    state.category.includes(product.category),
  ).length;

  return (
    <div className=" relative m-2 flex w-full flex-col  justify-start  ">
      <div className="flex-col w-full ">
        {listCategories.map((category) => (
          <label
            key={category}
            htmlFor={category}
            className="flex w-full mt-8  justify-start items-center  "
          >
            <input
              type="checkbox"
              id={category}
              name={category}
              onClick={() => onCategoryChange(category)}
              className="w-5 h-5 mx-5 text-blue-600  border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="font-light py-2  w-full">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
