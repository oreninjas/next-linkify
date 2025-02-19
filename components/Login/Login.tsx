"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Simple_Loading_Page from "@/components/Loading/Simple_Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/login", {
        body: JSON.stringify({ email, password }),
        method: "POST",
      });
      setIsLoading(true);

      if (!response.ok) {
        return router.refresh();
      }

      setIsLoading(false);
      return router.push("/dashboard");
    } catch (error) {
      setIsLoading(false);
      return router.refresh();
    }
  };

  if (isLoading) {
    return <Simple_Loading_Page />;
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="shadow-lg p-10 sm:rounded-xl">
        <div>
          <h2 className="font-bold">Log In to Continue</h2>
          <p className="font-light text-sm mt-1 text-balance">
            Welcome back. Let's pick up where you left off!
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
