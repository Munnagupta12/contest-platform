"use client";

import Link from "next/link";
import { useState } from "react";

import { problems } from "../../data/problems";

export default function ProblemsPage() {

  const [search, setSearch] = useState("");

  const [difficulty, setDifficulty] =
    useState("All");



  /*
    FILTER LOGIC
  */

  const filteredProblems = problems.filter(
    (problem) => {

      const matchesSearch =
        problem.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesDifficulty =
        difficulty === "All"
          ? true
          : problem.difficulty === difficulty;

      return (
        matchesSearch &&
        matchesDifficulty
      );
    }
  );



  return (
    <main className="min-h-screen bg-black text-white px-10 py-10">

      {/* TITLE */}
      <h1 className="text-5xl font-bold mb-10">
        Problems
      </h1>



      {/* SEARCH + FILTER */}
      <div className="flex flex-col md:flex-row gap-5 mb-10">

        {/* SEARCH BAR */}
        <input
          type="text"
          placeholder="Search problems..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="flex-1 bg-[#111] border border-gray-800 rounded-xl px-5 py-4 outline-none text-white focus:border-blue-500"
        />



        {/* FILTER */}
        <select
          value={difficulty}
          onChange={(e) =>
            setDifficulty(e.target.value)
          }
          className="bg-[#111] border border-gray-800 rounded-xl px-5 py-4 outline-none text-white focus:border-blue-500"
        >

          <option value="All">
            All Difficulties
          </option>

          <option value="Easy">
            Easy
          </option>

          <option value="Medium">
            Medium
          </option>

          <option value="Hard">
            Hard
          </option>

        </select>

      </div>



      {/* PROBLEMS GRID */}
      <div className="grid md:grid-cols-2 gap-8">

        {filteredProblems.map((problem) => (

          <Link
            key={problem.id}
            href={`/problems/${problem.id}`}
            className="bg-[#111] border border-gray-800 rounded-2xl p-8 hover:border-blue-500 hover:scale-[1.02] transition-all duration-300"
          >

            <div className="flex items-center justify-between mb-4">

              <h2 className="text-2xl font-bold">
                {problem.title}
              </h2>

              <span
                className={`px-4 py-1 rounded-full text-sm font-semibold
                ${
                  problem.difficulty === "Easy"
                    ? "bg-green-500/20 text-green-400"

                    : problem.difficulty === "Medium"
                    ? "bg-yellow-500/20 text-yellow-400"

                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {problem.difficulty}
              </span>

            </div>

            <p className="text-gray-400 leading-7">
              {problem.description}
            </p>

          </Link>

        ))}

      </div>

    </main>
  );
}