import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export const CartIcon = () => {
	return (
		<>
			<FontAwesomeIcon
				icon={faCartShopping}
				size="lg"
				style={{ color: `white` }}
			/>
			<div className="ml-2 text-white">{0}</div>
		</>
	);
};
