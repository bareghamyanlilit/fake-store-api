"use client";
import Link from "next/link";
import { Basket } from "./Basket";
import { useRouter } from "next/navigation";

export function Header() {
  const route = useRouter();
  const logOut = () => {
    localStorage.setItem("logIn", "false");
    route.push('/');
    route.refresh()
  };
  return (
    <header className=" sticky bg-blue-600">
      <div className="Header container m-auto p-5 flex justify-between text-white">
        <Link href="/">
          <h1 className="text-2xl">Amio</h1>
        </Link>
        <Basket />
        {localStorage.getItem("logIn") === "true" ? (
          <button onClick={logOut} className="cursor-pointer">
            Log Out
          </button>
        ) : (
          <Link href="/log-in">
            <button className="cursor-pointer">Log In</button>
          </Link>
        )}
      </div>
    </header>
  );
}
