import React from "react";

const ProductDisplayCard = ({title,img}) => {
  return (
    <div>
      <div className="border-[1px] border-gray-400 overflow-hidden hover:underline">
        <div className="w-full h-[270px] overflow-hidden">
          <img
            src={img}
            alt=""
            className="w-full h-full hover:scale-[1.03] object-center object-cover transition-transform duration-500 ease-in-out"
          />
        </div>
        <div className="py-3 text-xl text-center">
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplayCard;
