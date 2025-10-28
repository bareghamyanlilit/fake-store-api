"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function LogIn() {
  const [logIn, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const rout = useRouter();

  const FetchUser = async (user: { username: string; password: string }) => {
    try {
      const res = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      setLogin(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    FetchUser({ username, password });
    localStorage.setItem("logIn", `${logIn}`);

    if (localStorage.getItem("logIn") == "true") {
      rout.push("/user-page");
    }
    console.log(logIn);
    rout.refresh();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="grid gap-10 m-auto mt-20 w-[600px] p-20 bg-blue-100 text-blue-950 rounded"
      >
        <h1 className="text-2xl text-center font-bold">Log In</h1>
        <label>
          <h2 className="mb-3 ">Username</h2>
          <input
            className="w-full h-[40px] border-1 rounded"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          <h2 className="mb-3">Password</h2>
          <input
            className="w-full h-[40px] border-1 rounded"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          className="w-full  h-[40px] bg-blue-700 cursor-pointer rounded text-white"
          type="submit"
        >
          Log in
        </button>
      </form>
    </div>
  );
}
