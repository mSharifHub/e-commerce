/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
export default function HideFilterComponent({
  toggle,
  isFilterVisible,
  HideFiler,
}) {
  return (
    <div onClick={toggle}>
      <div className="flex justify-center items-center">
        <div className="capitalize text-lg mx-4">
          {!isFilterVisible ? "show filter" : "hide filter"}
        </div>
        <div>
          <HideFiler />
        </div>
      </div>
    </div>
  );
}
