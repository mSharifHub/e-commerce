export default function ProductModal({ productInfo }) {
  return (
    <div className="absolute top-0 inset-0 h-screen w-screen bg-red-500 z-50">
      {productInfo.name}
    </div>
  );
}
