"use client";

import Link from "next/link";

export default function Navbar() {

  return (

    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          CodeArena
        </Link>



        {/* NAV LINKS */}
        <div className="flex gap-8 text-lg items-center">

          <Link
            href="/"
            className="hover:text-blue-400 transition-all duration-300"
          >
            Home
          </Link>



          <Link
            href="/problems"
            className="hover:text-blue-400 transition-all duration-300"
          >
            Problems
          </Link>



          <Link
            href="/leaderboard"
            className="hover:text-blue-400 transition-all duration-300"
          >
            Leaderboard
          </Link>



          <Link
            href="/contests"
            className="hover:text-blue-400 transition-all duration-300"
          >
            Contests
          </Link>



          <Link
            href="/profile"
            className="hover:text-blue-400 transition-all duration-300"
          >
            Profile
          </Link>



          {/* AUTH BUTTONS */}
          <Link
            href="/login"
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg transition-all"
          >
            Login
          </Link>



          <Link
            href="/signup"
            className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg transition-all"
          >
            Sign Up
          </Link>

        </div>

      </div>

    </nav>

  );
}