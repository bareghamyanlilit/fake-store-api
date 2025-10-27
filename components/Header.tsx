import { Basket } from "./Basket";

export function Header() {
  return (
    <header className=" sticky bg-blue-600">
      <div className="Header container m-auto p-5 flex justify-between text-white">
        <h1 className="text-2xl">Amio</h1>
        <Basket />
      </div>
    </header>
  );
}
