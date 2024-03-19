/* eslint-disable react/self-closing-comp */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../../../providers/contexts/userContext";

export default function CartIcon() {
  const {
    state: { shoppingCart },
  } = useUser();

  return (
    <div className=" flex justify-center items-centertransition-all duration-200 hover:scale-110 cursor-pointer w-10 h-10">
      <div className=" relative flex justify-between items-center space-x-4 z-20">
        <FontAwesomeIcon icon={faCartShopping} size="lg" />
        {shoppingCart.length > 0 ? (
          <div className="absolute -top-4 -left-1/2 translate-x-1/3 bg-black w-8 h-4 rounded-full flex items-center justify-center whitespace-nowrap">
            <span className=" text-white text-sm font-bold">
              {shoppingCart.length}
            </span>
          </div>
        ) : null}
        <span className=" md:hidden absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 rounded-full bg-slate-300 w-11 h-11  opacity-0 transition-opacity duration-100 hover:opacity-30"></span>
      </div>
    </div>
  );
}
