'use client'
import { useProducts } from "@/context/ProductsContext";
import { ProductType } from "@/lib/type";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Product({ product }: { product: ProductType }) {
  const { handleAddToBasket } = useProducts();
  return (
    <div className="py-10">
      <h1 className=" text-center text-4xl font-bold py-8 text-blue-950">
        Product Page
      </h1>
      <div className=" w-[80%] m-auto grid grid-cols-2 h-[700px] p-6 shadow-2xl">
        <div className="prevBtn absolute ">
          <Link href="/">
            <ArrowLeft size={40} className="text-gray-600 cursor-pointer" />
          </Link>
        </div>
        <div className="img h-[600px] ">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className=" w-full h-full object-contain place-self-center"
          />
        </div>
        <div className="info flex flex-col justify-between px-4">
          <div className="title">
            <h2 className="font-bold text-2xl">{product.title}</h2>
            <p className="font-serif text-xl">{product.category}</p>
          </div>
          <p className="text-lg text-blue-950 font-mono">
            {product.description}
          </p>
          <span>Rate {product.rating.rate}</span>

          <button
            className="bg-blue-400 text-white w-full p-5 rounded cursor-pointer hover:bg-blue-500"
            onClick={() => handleAddToBasket(product)}
          >
            Add to basket - {product.price}$
          </button>
        </div>
      </div>
    </div>
  );
}
