export default function ProductModal({ product }) {
  return (
    <div className="fixed inset-0  flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="w-[95%] h-[95%] bg-white flex justify-center items-center rounded-lg shadow-lg">
        <span>{product.name}</span>
      </div>
    </div>
  );
}
