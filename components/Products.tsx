import { Product } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function ProductsPage({ products }: { products: Product[] }) {
  return (
    <div>
      <h1 className=" text-center text-4xl font-bold py-8 text-gray-600">Products</h1>

      <div className="container gap-4 lg:gap-8 xl:gap-12 m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 w-[300px] h-[400px] rounded shadow-xl cursor-pointer hover:shadow-2xl"
          >
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className="h-[300px] object-contain place-self-center"
              />
            </Link>
            <h2>
              {product.title. length > 70
                ? product.title.slice(0, 70)+'...'
                : product.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
