"use client";

import { useEffect, useState } from "react";

export default function ContestPage() {

  /*
    CONTEST END TIME
    2 HOURS FROM NOW
  */

  const contestEnd =
    new Date().getTime() +
    2 * 60 * 60 * 1000;



  const [timeLeft, setTimeLeft] =
    useState(contestEnd - Date.now());



  useEffect(() => {

    const timer = setInterval(() => {

      setTimeLeft(
        contestEnd - Date.now()
      );

    }, 1000);



    return () => clearInterval(timer);

  }, [contestEnd]);



  /*
    FORMAT TIME
  */

  const hours =
    Math.max(
      Math.floor(
        timeLeft / (1000 * 60 * 60)
      ),
      0
    );



  const minutes =
    Math.max(
      Math.floor(
        (timeLeft %
          (1000 * 60 * 60)) /
          (1000 * 60)
      ),
      0
    );



  const seconds =
    Math.max(
      Math.floor(
        (timeLeft %
          (1000 * 60)) /
          1000
      ),
      0
    );



  const contests = [

    {
      id: 1,
      title: "Weekly Contest 101",
      difficulty: "Easy",
      participants: 1520,
      status:
        timeLeft > 0
          ? "Live"
          : "Ended",
    },

    {
      id: 2,
      title: "Biweekly Contest 45",
      difficulty: "Medium",
      participants: 980,
      status: "Upcoming",
    },

    {
      id: 3,
      title: "DSA Championship",
      difficulty: "Hard",
      participants: 3200,
      status: "Upcoming",
    },

  ];



  return (
    <main className="min-h-screen bg-black text-white px-8 py-10">

      {/* TITLE */}
      <div className="flex items-center justify-between mb-12">

        <h1 className="text-5xl font-bold">
          Contests
        </h1>



        {/* LIVE TIMER */}
        <div className="bg-[#111] border border-red-500 rounded-2xl px-8 py-4">

          <p className="text-red-400 text-sm mb-1">
            Live Contest Ends In
          </p>

          <h2 className="text-3xl font-bold text-white">

            {hours}h :
            {minutes}m :
            {seconds}s

          </h2>

        </div>

      </div>



      {/* CONTESTS */}
      <div className="grid md:grid-cols-2 gap-8">

        {contests.map((contest) => (

          <div
            key={contest.id}
            className="bg-[#111] border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300 hover:scale-[1.02]"
          >

            {/* TITLE */}
            <div className="flex items-center justify-between mb-6">

              <h2 className="text-3xl font-bold">
                {contest.title}
              </h2>



              <span
                className={`px-4 py-1 rounded-full text-sm font-semibold

                ${
                  contest.status === "Live"

                    ? "bg-red-500/20 text-red-400"

                    : contest.status ===
                      "Upcoming"

                    ? "bg-yellow-500/20 text-yellow-400"

                    : "bg-gray-500/20 text-gray-400"
                }`}
              >
                {contest.status}
              </span>

            </div>



            {/* DETAILS */}
            <div className="space-y-4 mb-8">

              <p className="text-gray-400">

                Difficulty:

                <span
                  className={`ml-2 font-semibold

                  ${
                    contest.difficulty === "Easy"

                      ? "text-green-400"

                      : contest.difficulty ===
                        "Medium"

                      ? "text-yellow-400"

                      : "text-red-400"
                  }`}
                >
                  {contest.difficulty}
                </span>

              </p>



              <p className="text-gray-400">

                Participants:

                <span className="text-blue-400 ml-2 font-semibold">
                  {contest.participants}
                </span>

              </p>

            </div>



            {/* BUTTON */}
            <button
              className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all

              ${
                contest.status === "Live"

                  ? "bg-red-600 hover:bg-red-700"

                  : contest.status ===
                    "Upcoming"

                  ? "bg-blue-600 hover:bg-blue-700"

                  : "bg-gray-700"
              }`}
            >

              {contest.status === "Live"
                ? "Join Live Contest"

                : contest.status ===
                  "Upcoming"

                ? "Register"

                : "Contest Ended"}

            </button>

          </div>

        ))}

      </div>

    </main>
  );
}