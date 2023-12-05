import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

export const ChangeThemeIcon = () => {
    return (
        <>
            <FontAwesomeIcon
                icon={faCircleHalfStroke}
                size="xl"
                className="text-slate-500 hover:text-slate-700 duration-100 ease-in-out"
            />
        </>
    );
};
