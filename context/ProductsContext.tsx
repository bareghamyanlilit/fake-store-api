"use client";
import { Order, ProductType, ProductsContextType } from "@/lib/type";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export const ProductsContext = createContext<ProductsContextType>({
  products: [],
  orders: [],
  handleAddToBasket: () => {},
  handleIncr: () => {},
  handleDecr: () => {},
  handleDelete: () => {},
  totalPrice: () => 0,
});

export default function ProductsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  const handleAddToBasket = (product: ProductType) => {
    const existingOrder = orders.find(
      (order: Order) => order.id === product.id
    );

    if (existingOrder) {
      setOrders((prev: Order[]) =>
        prev.map((order: Order) =>
          order.id === product.id
            ? { ...order, quantity: order.quantity + 1 }
            : order
        )
      );
    } else {
      setOrders((prev: Order[]) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const handleIncr = (id: number) => {
    setOrders((prev: Order[]) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecr = (id: number) => {
    setOrders((prev: Order[]) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity <= 1 ? 1 : item.quantity - 1 }
          : item
      )
    );
  };

  const handleDelete = (id: number) => {
    setOrders((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = (orders: Order[]) => {
    return parseFloat(
      orders
        .reduce((total, order) => total + order.price * order.quantity, 0)
        .toFixed(2)
    );
  };

  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Error");
    const data: ProductType[] = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext
      value={{
        products,
        orders,
        handleAddToBasket,
        handleIncr,
        handleDecr,
        handleDelete,
        totalPrice,
      }}
    >
      {children}
    </ProductsContext>
  );
}

export function useProducts(): ProductsContextType {
  const context = useContext(ProductsContext);
  if (!context)
    throw new Error("useProducts must be used within a ProductProvider");
  return context;
}
