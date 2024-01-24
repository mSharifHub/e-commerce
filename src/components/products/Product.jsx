/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { productSizeHelper } from "../../helpers/filter_helpers/filterHelpers";
import { reusePort } from "../../helpers/ModalHelpers/reusePort";
import ProductModal from "./ProductModal";

export default function Product({ productsLen, product }) {
  const [modal, setModalVisible] = useState(false);

  const onModalVisible = () => {
    setModalVisible((prev) => !prev);
  };

  const setOnClose = () => {
    setModalVisible(false);
  };

  return (
    <>
      {/* content outside */}
      <div className={productSizeHelper(productsLen)} onClick={onModalVisible}>
        {/* content inside structured as grid */}
        <div className="grid grid-rows-[1fr_0.2fr_0.2fr] m-1 cursor-pointer ">
          <div className=" flex justify-center items-center ">image</div>
          <div className=" flex justify-center items-center ">
            {product.name}
          </div>
          <div className=" flex justify-center items-center ">
            {product.price}
          </div>
        </div>
      </div>

      {modal &&
        reusePort(<ProductModal product={product} setOnClose={setOnClose} />)}
    </>
  );
}
