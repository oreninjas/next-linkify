"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Login = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (provider: "google" | "github") => {
    toast.loading(`Redirecting to ${provider}...`);

    try {
      await signIn(provider);
      toast.dismiss();
      toast.success(`Signed in with ${provider}!`);
    } catch (error) {
      toast.dismiss();
      toast.error(`Failed to sign in with ${provider}`);
    }
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn("credentials", {
      email,
      password,
    }).then((cb) => {
      if (cb?.error) {
        toast.error(cb.error);
      }

      if (cb?.ok && !cb?.error) {
        toast.success("Logged in successfully!");
      }
    });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="shadow-lg p-10 sm:rounded-xl">
        <div>
          <h2 className="font-bold">Log In to Continue</h2>
          <p className="font-light text-sm mt-1 text-balance">
            Welcome back. Let's pick up where you left off!
          </p>
        </div>
        {/* Auth providers */}
        <div className="my-5 flex flex-col gap-3">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => handleSignIn("google")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                fill="currentColor"
              />
            </svg>
            Continue with Google
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => handleSignIn("github")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                fill="currentColor"
              />
            </svg>
            Continue with GitHub
          </Button>
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
