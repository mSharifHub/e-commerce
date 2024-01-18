import { modalStyles } from "../../../helpers/navigation_helpers/modalStyle";
import FilterHelperModal from "../../filter/filterHelperMenu/FilterHelperMenu";
import CartIcon from "../icons/CartIcon";
import HeartIcon from "../icons/HeartIcon";
import { SearchBar } from "../search/SearchBar";
import DiscountModal from "./navigation_helpers_modals/DiscountModal";
import NewProductModal from "./navigation_helpers_modals/NewProductModal";
import OpenBoxProductModal from "./navigation_helpers_modals/OpenBoxProductModal";

const { full } = modalStyles;

export default function NavHelper() {
  return (
    <div className=" grid  grid-cols-1  md:grid-cols-[1fr_0.2fr] ">
      <div className="flex justify-center items-center space-x-12  col-start-1 capitalize  whitespace-nowrap transition-transform duration-500 sm:translate-x-0 -translate-x-full">
        <FilterHelperModal
          label="50% off"
          Component={DiscountModal}
          modalStyle={full}
        />
        <FilterHelperModal
          label="new products"
          Component={NewProductModal}
          modalStyle={full}
        />
        <FilterHelperModal
          label="open box"
          Component={OpenBoxProductModal}
          modalStyle={full}
        />
      </div>
      <div className="flex -translate-y-1/2 mt-2 mr-4 justify-center md:justify-end items-center  space-x-5 col-start-1 md:col-start-2  transition-all duration-500 sm:translate-y-0">
        <SearchBar />
        <HeartIcon />
        <CartIcon />
      </div>
    </div>
  );
}
