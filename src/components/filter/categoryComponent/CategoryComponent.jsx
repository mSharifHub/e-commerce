import { useFilter } from "../../../providers/contexts/filterContext";

export default function CategoryComponent() {
  const { state, dispatch } = useFilter();

  const { listCategories } = state;

  const onCategoryChange = (category) => {
    dispatch({ type: "SET_CATEGORY", payload: category });
  };

  const isChecked = (category) => {
    return state.category.some((selectedRanges) => selectedRanges === category);
  };

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
              onChange={() => onCategoryChange(category)}
              checked={isChecked(category)}
              className=" w-5 h-5 mr-4 text-slate-400  border-gray-300 rounded focus:ring-slate-400 cursor-pointer"
            />
            <span className="font-light py-2  w-full">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
