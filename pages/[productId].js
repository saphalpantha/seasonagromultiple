import React, {useContext, useEffect, useState } from "react";
import ProductDetails from "../components/Products/ProductDetail";
import { useRouter } from "next/router";
import CartContext from "../context/cartContext";

const ProductDetail = () => {
  const ctx = useContext(CartContext)
  const router = useRouter();
  const id = router.query.productId;
  const product = ctx.products.find((item) => item.id === id);
  
  return (
    <div>
      <ProductDetails products={product} />
    </div>
  );
};


export default ProductDetail;


