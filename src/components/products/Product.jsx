import { productSizeHelper } from "../../helpers/filter_helpers/filterHelpers";

export default function Product({ productsLen }) {
  return (
    <>
      {/* content outside */}
      <div className={productSizeHelper(productsLen)}>
        {/* content inside structured as grid */}
        <div className="grid grid-rows-[1fr_0.2fr_0.2fr_0.2fr] m-1 ">
          <div className=" flex justify-center items-center ">image</div>
          <div className=" flex justify-center items-center ">name</div>
          <div className=" flex justify-center items-center ">price</div>
          <div className=" flex justify-center items-center ">rating</div>
        </div>
      </div>
    </>
  );
}
