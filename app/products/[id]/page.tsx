import {  Product } from "@/components/Product";
import { ProductType } from "@/lib/type";
import React from "react";

type Params = {
  params: { id: string };
};
export default async function page({ params }: Params) {
  const { id } = await params;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Error");
  const data: ProductType = await res.json();

  console.log(data);
  return (
    <div>
      <Product product={data}/>
    </div>
  );
}
