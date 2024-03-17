import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../../../providers/contexts/userContext";

export default function CartIcon() {
  const {
    state: { shoppingCart },
  } = useUser();

  return (
    <div className=" transition-color duration-200 hover:scale-125 cursor-pointer">
      <div className=" relative flex justify-between items-center space-x-4">
        <FontAwesomeIcon icon={faCartShopping} size="lg" />
        {shoppingCart.length > 0 ? (
          <div className="absolute -top-4 -left-1/2 translate-x-1/3 bg-black w-8 h-4 rounded-full flex items-center justify-center whitespace-nowrap">
            <span className=" text-white text-sm font-bold">
              {shoppingCart.length}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
