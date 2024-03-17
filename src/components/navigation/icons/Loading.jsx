/* eslint-disable react/self-closing-comp */
export default function Loading() {
  return (
    <span className="flex space-x-5">
      <span className="dot w-2 h-2 bg-black rounded-full mx-1 "></span>
      <span className="dot w-2 h-2 bg-black rounded-full mx-1 animation-delay-200"></span>
      <span className="dot w-2 h-2 bg-black rounded-full mx-1 animation-delay-400"></span>
      <span className="dot w-2 h-2 bg-black rounded-full mx-1 animation-delay-600"></span>
      <span className="dot w-2 h-2 bg-black rounded-full mx-1 animation-delay-800"></span>
    </span>
  );
}
