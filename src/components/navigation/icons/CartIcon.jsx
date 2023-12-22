import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function CartIcon() {
  return (
    <div className="cursor-pointer transition-color duration-200 hover:text-slate-400">
      <FontAwesomeIcon icon={faCartShopping} size="lg" />
    </div>
  );
}
