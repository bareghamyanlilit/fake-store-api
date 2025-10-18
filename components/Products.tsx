"use client";

import { Product } from "@/lib/type";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Pagination from "./Pagination";

export function ProductsPage({ products }: { products: Product[] }) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsCount = 8;
  const totalPages = products.length / productsCount;

  const productsSliced = products.slice(
    currentPage * productsCount - productsCount,
    currentPage * productsCount
  );
  const handleClick = (buttonName: "prev" | "next") => {
    buttonName === "prev"
      ? setCurrentPage((prev) => prev - 1)
      : setCurrentPage((prev) => prev + 1);
  };

  return (
    <div>
      <h1 className=" text-center text-4xl font-bold py-8 text-gray-600">
        Products
      </h1>

      <div className="container gap-4 lg:gap-8 xl:gap-12 m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {productsSliced.map((product) => (
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
              {product.title.length > 70
                ? product.title.slice(0, 70) + "..."
                : product.title}
            </h2>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        handleClick={handleClick}
        totalPages={totalPages}
      />
    </div>
  );
}
