import React from "react";
import CustomButton from "../components/CustomButton";

const ProductCard = ({ product }) => {
  const { id, title, image, description, price, category } = product;
  return (
    <div className="relative max-w-[300px] flex flex-col justify-between m-5 bg-white rounded-md shadow-md hover:shadow-lg p-10">
      <p className="absolute top-2 right-2 text-xs">{category}</p>
      <img src={image} className="h-[200px] w-[200px] object-contain" />

      <h4 className="my-3 break-normal font-bold">{title}</h4>
      <p className="text-xs truncate my-2">{description}</p>
      <p className="my-2">${price}</p>
      <CustomButton text="Add to cart" />
    </div>
  );
};

export default ProductCard;
