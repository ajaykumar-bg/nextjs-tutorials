import React from "react";

async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return (
    <div>
      <h1>Details about product - {productId}</h1>
    </div>
  );
}

export default ProductDetails;
