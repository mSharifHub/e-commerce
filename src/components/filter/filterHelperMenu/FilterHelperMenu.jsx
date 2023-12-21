/* eslint-disable jsx-a11y/no-static-element-interactions */
import UseVisibility from "../../../helpers/hooks/UseVisibility";

export default function FilterHelpMenu({ label, Component }) {
  const [isVisible, setIsVisible] = UseVisibility();

  const toogle = () => setIsVisible((prev) => !prev);

  return (
    <>
      <div onMouseOver={toogle} onFocus={toogle}>
        <div>
          <span className="hover:border-b-2 cursor-pointer">{label}</span>
        </div>
      </div>
      <div>{isVisible && Component}</div>
    </>
  );
}
