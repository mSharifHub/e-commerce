export default function AdvertisingComponent({ title, message }) {
  return (
    <div className="flex flex-col justify-center items-center capitalize">
      <span className="text-md font-thin">{title}</span>
      <span className="text-xs">{message}</span>
    </div>
  );
}
