import { Product } from "@/lib/type";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function ProductPage({ product }: { product: Product }) {
  return (
    <div>
      <h1 className=" text-center text-4xl font-bold py-8 text-gray-600">
        Product Page
      </h1>
      <div className=" w-[80%] m-auto grid grid-cols-2 h-[700px] p-6 shadow-2xl">
        <div className="prevBtn absolute ">
          <Link href='/'>
            <ArrowLeft size={40} className="text-gray-600 cursor-pointer" />
          </Link>
        </div>
        <div className="img h-[600px] ">
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
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
          <span>{product.rating.rate}</span>
        </div>
      </div>
    </div>
  );
}
