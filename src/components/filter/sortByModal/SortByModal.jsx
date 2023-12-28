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
    <>
      <div onClick={sortByModal} className="mx-4">
        {!sortModalVisible ? <AngleDown /> : <AngleUp />}
      </div>
      <span className="capitalize text-lg">{label}</span>
    </>
  );
}
