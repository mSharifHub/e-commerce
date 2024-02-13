import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../../../providers/contexts/userContext";

export default function CartIcon() {
  const { state } = useUser();
  const { shoppingCart } = state;
  return (
    <div className="cursor-pointer transition-color duration-200 hover:text-slate-400">
      <div className=" flex justify-between items-center space-x-4">
        <FontAwesomeIcon icon={faCartShopping} size="lg" />
        {shoppingCart.length > 0 ? <span>{shoppingCart.length}</span> : null}
      </div>
    </div>
  );
}
