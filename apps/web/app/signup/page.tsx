"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {

  const router = useRouter();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");



  async function handleSignup() {

    const res = await fetch(
      "/api/signup",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );



    const data =
      await res.json();



    if (data.success) {

      alert("Signup Successful");

      router.push("/login");

    } else {

      alert(data.message);

    }

  }



  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-[#111] border border-gray-800 rounded-3xl p-10">

        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Sign Up
        </h1>



        {/* NAME */}
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 mb-5 outline-none focus:border-blue-500 text-white"
        />



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
          onClick={handleSignup}
          className="w-full bg-green-600 hover:bg-green-700 transition-all py-4 rounded-xl font-semibold text-lg"
        >
          Create Account
        </button>

      </div>

    </main>
  );
}