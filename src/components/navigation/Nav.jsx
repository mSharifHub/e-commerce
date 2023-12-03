import { BurgerIcon } from "./BurgerIcon";
import { NavMenu } from "./NavMenu";
import { useEffect, useState } from "react";
import { CloseNav } from "./CloseNav";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toogle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 639) {
                setIsOpen(true);
            }
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isOpen]);

    return (
        <>
            <div className="m-4">
                {isOpen ? (
                    <div className="relative">
                        <NavMenu />
                        <div className={`absolute top-0 right-0 m-4 ${isOpen ? " " : "hidden"} sm:hidden`}>
                            <button onClick={toogle}>{<CloseNav />}</button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <button onClick={toogle}>
                            <BurgerIcon />
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};
export default Nav;
