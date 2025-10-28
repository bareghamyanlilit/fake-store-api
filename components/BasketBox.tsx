"use client";
import { useProducts } from "@/context/ProductsContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiBasket } from "react-icons/bi";

export function BasketBox() {
  const [isOpen, setIsOpen] = useState(false);
  const { orders, handleIncr, handleDecr, handleDelete, totalPrice } =
    useProducts();

  return (
    <div className="relative">
      <BiBasket
        className="cursor-pointer"
        size={30}
        onClick={() => setIsOpen((prev) => !prev)}
      />

      <div
        className={`absolute w-[400px] right-[0%] p-5 bg-blue-500 ${
          isOpen ? "block" : "hidden"
        } `}
      >
        <ul>
          {orders.length > 0
            ? orders.map((order) => (
                <li
                  key={order.id}
                  className="flex justify-between items-center"
                >
                  <Image
                    src={order.image}
                    alt={order.title}
                    width={500}
                    height={500}
                    className=" w-[50px] h-[50px] object-contain place-self-center"
                  />
                  <h3>
                    {order.title.length > 20
                      ? order.title.slice(0, 20) + "..."
                      : order.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <button
                      className="cursor-pointer"
                      onClick={() => handleDecr(order.id)}
                    >
                      -
                    </button>
                    <span>{order.quantity}</span>
                    <button
                      className="cursor-pointer"
                      onClick={() => handleIncr(order.id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleDelete(order.id)}
                    className="bg-red-950 p-2 cursor-pointer"
                  >
                    X
                  </button>
                </li>
              ))
            : "Is empty"}
        </ul>

        <p>Total price: {totalPrice(orders)} $</p>
        <Link href="/basket">
          <button>See basket</button>
        </Link>
      </div>
    </div>
  );
}
