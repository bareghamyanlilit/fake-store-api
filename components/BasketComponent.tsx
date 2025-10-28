"use client";
import { useProducts } from "@/context/ProductsContext";
import Image from "next/image";
import React from "react";

export default function BasketComponent() {
  const { orders, handleIncr, handleDecr, handleDelete, totalPrice } =
    useProducts();
  return (
    <div className="max-w-[1200px] m-auto py-10">
      <h1 className=" text-center text-4xl font-bold py-8 text-blue-950">
        Basket
      </h1>
      <ul>
        {orders.length > 0
          ? orders.map((order) => (
              <li
                key={order.id}
                className="flex justify-between items-center mb-5 py-2 border-b"
              >
                <Image
                  src={order.image}
                  alt={order.title}
                  width={500}
                  height={500}
                  className="h-[200px] w-[150px] object-contain place-self-center"
                />
                <h2 className="text-2xl">{order.title}</h2>
                <div className="flex items-center gap-3">
                  <button
                    className="cursor-pointer text-2xl"
                    onClick={() => handleDecr(order.id)}
                  >
                    -
                  </button>
                  <span className=" text-2xl">{order.quantity}</span>
                  <button
                    className="cursor-pointer  text-2xl"
                    onClick={() => handleIncr(order.id)}
                  >
                    +
                  </button>
                </div>
                <h2 className="text-2xl"> Price: {(order.quantity * order.price).toFixed(2)} $</h2>
                <button
                  onClick={() => handleDelete(order.id)}
                  className="bg-red-950 p-3 cursor-pointer  text-2xl text-white rounded"
                >
                  X
                </button>
              </li>
            ))
          : "Is empty"}
      </ul>

      <h2 className="text-2xl">Total price: {totalPrice(orders)} $</h2>
    </div>
  );
}
