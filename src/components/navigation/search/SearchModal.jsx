/* eslint-disable react/self-closing-comp */
export default function SearchModal({ setIsModalHovered }) {
  return (
    <div
      onMouseEnter={() => setIsModalHovered(true)}
      onMouseLeave={() => setIsModalHovered(false)}
      className=" absolute top-0 flex justify-end items-center animate-expandModalRightToLeft h-1/2  bg-white z-20 "
    ></div>
  );
}
