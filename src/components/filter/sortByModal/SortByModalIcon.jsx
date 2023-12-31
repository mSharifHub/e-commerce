/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
export default function SortByModalIcon({
  sortModalVisible,
  sortByModal,
  AngleDown,
  AngleUp,
  label,
}) {
  return (
    <div onClick={sortByModal} className="cursor-pointer">
      {!sortModalVisible ? <AngleDown /> : <AngleUp />}
      <span className="capitalize text-lg mx-2">{label}</span>
    </div>
  );
}
