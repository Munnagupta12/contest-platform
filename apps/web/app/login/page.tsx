"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");



  async function handleLogin() {

    const res = await fetch(
      "/api/login",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          email,
          password,
        }),
      }
    );



    const data =
      await res.json();



    if (data.success) {

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      alert("Login Successful");

      router.push("/");

    } else {

      alert(data.message);

    }

  }



  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-[#111] border border-gray-800 rounded-3xl p-10">

        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Login
        </h1>



        {/* EMAIL */}
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 mb-5 outline-none focus:border-blue-500 text-white"
        />



        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 mb-8 outline-none focus:border-blue-500 text-white"
        />



        {/* BUTTON */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 transition-all py-4 rounded-xl font-semibold text-lg"
        >
          Login
        </button>

      </div>

    </main>
  );
}