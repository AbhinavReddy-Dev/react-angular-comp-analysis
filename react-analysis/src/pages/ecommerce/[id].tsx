import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const params = useParams<{ id: string }>();
  return <div>ProductPage: {params.id}</div>;
};

export default ProductPage;
