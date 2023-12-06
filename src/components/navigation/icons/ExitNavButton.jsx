import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export const ExitNavButton = () => {
	return (
		<FontAwesomeIcon
			icon={faXmark}
			style={{ color: `grey`, fontSize: `30px` }}
		/>
	);
};
