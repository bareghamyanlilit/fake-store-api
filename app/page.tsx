import { Products } from "@/components/Products";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Error");
  const data = await res.json();

  return (
    <div>
      <Products products={data} />
    </div>
  );
}
