"use client";

import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import Simple_Loading_Page from "@/components/Loading/Simple_Loading";

// Next Auth
import { signIn, useSession } from "next-auth/react";

const Register = () => {
  const router = useRouter();

  const handleGitHubSignIn = () => {
    signIn("github").then(() => {
      // Redirect to dashboard after successful authentication
      router.push("/dashboard");
    });
  };
  const { data: session } = useSession();
  console.log(session?.user.id);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      let response = await fetch("/api/auth/register", {
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

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="shadow-lg p-10 sm:rounded-xl">
        {/* Line separetor */}
        <div className="flex justify-center px-10 mb-10 flex-col">
          <div
            className="flex gap-6 cursor-pointer border-2 rounded px-5 py-3 border-gray-300"
            onClick={handleGitHubSignIn}
          >
            <svg
              height="32"
              aria-hidden="true"
              viewBox="0 0 24 24"
              version="1.1"
              width="32"
              data-view-component="true"
              className="octicon octicon-mark-github v-align-middle"
            >
              <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
            </svg>
            <button>Continue with Github</button>
          </div>
          <div className="w-full h-[1px] bg-zinc-300 my-5"></div>
        </div>
        <div>
          <h2 className="font-bold">Create Your Account</h2>
          <p className="font-light text-sm mt-1 text-balance">
            Make it yours. Create your account and get started today
          </p>
        </div>
        {/* Line separetor */}
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

export default Register;
