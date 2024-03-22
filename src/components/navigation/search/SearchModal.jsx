/* eslint-disable react/self-closing-comp */
export default function SearchModal({ setIsModalHovered, isModalHovered }) {
  return (
    <div
      onMouseEnter={() => setIsModalHovered(true)}
      onMouseLeave={() => setIsModalHovered(false)}
      className=" absolute top-0 flex justify-end items-center animate-expandModalRightToLeft h-[30rem]  bg-white z-20"
    >
      <div className="relative w-full h-full border-2"></div>
    </div>
  );
}
