import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function CartIcon() {
  return (
    <>
      <FontAwesomeIcon icon={faCartShopping} size="lg" />
      <div className="ml-2" />
    </>
  );
}
