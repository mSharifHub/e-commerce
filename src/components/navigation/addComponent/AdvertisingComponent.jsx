export default function AdvertisingComponent({ title, message }) {
  return (
    <div className="flex flex-col justify-center items-center capitalize">
      <span className="text-xl font-thin">{title}</span>
      <span className="text-sm">{message}</span>
    </div>
  );
}
