"use client";

import { redirect } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("/api/auth/register", {
      body: JSON.stringify({ email, password }),
      method: "POST",
    });

    redirect("/dashboard");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="shadow-lg p-10 sm:rounded-xl">
        <div>
          <h2 className="font-bold">Create Your Account</h2>
          <p className="font-light text-sm mt-1 text-balance">
            Make it yours. Create your account and get started today
          </p>
        </div>
        <div className="w-full h-[1px] bg-zinc-300 my-5"></div>
        <form className="flex flex-col gap-6" onSubmit={submitHandler}>
          <input
            className="w-full px-5 py-3 !important"
            type="email"
            name="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <input
            className="w-full px-5 py-3"
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <input
            className="bg-[#2f3037] text-white px-5 py-3 sm:rounded cursor-pointer"
            type="submit"
            value="continue"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
