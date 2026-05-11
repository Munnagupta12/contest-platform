"use client";

export default function ProfilePage() {

  const user = {
    name: "Munna Raj",
    email: "munna@gmail.com",
    rank: 152,
    solved: 45,
    streak: 12,
  };



  const badges = [

    {
      title: "100 Days Streak",
      color: "from-orange-500 to-red-500",
      icon: "🔥",
    },

    {
      title: "Problem Solver",
      color: "from-green-500 to-emerald-500",
      icon: "✅",
    },

    {
      title: "Contest Master",
      color: "from-blue-500 to-purple-500",
      icon: "🏆",
    },

    {
      title: "Top Coder",
      color: "from-pink-500 to-purple-500",
      icon: "🚀",
    },

  ];



  return (
    <main className="min-h-screen bg-black text-white px-8 py-10">

      {/* PROFILE HEADER */}
      <div className="flex items-center gap-6 mb-14">

        {/* AVATAR */}
        <div className="w-28 h-28 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-5xl font-bold shadow-lg">

          M

        </div>



        {/* USER INFO */}
        <div>

          <h1 className="text-5xl font-bold mb-3">
            {user.name}
          </h1>

          <p className="text-gray-400 text-lg">
            {user.email}
          </p>

        </div>

      </div>



      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">

        {/* SOLVED */}
        <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 hover:border-green-500 transition-all">

          <h2 className="text-gray-400 mb-4">
            Problems Solved
          </h2>

          <p className="text-5xl font-bold text-green-400">
            {user.solved}
          </p>

        </div>



        {/* RANK */}
        <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition-all">

          <h2 className="text-gray-400 mb-4">
            Global Rank
          </h2>

          <p className="text-5xl font-bold text-blue-400">
            #{user.rank}
          </p>

        </div>



        {/* STREAK */}
        <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 hover:border-orange-500 transition-all">

          <h2 className="text-gray-400 mb-4">
            Daily Streak
          </h2>

          <p className="text-5xl font-bold text-orange-400">
            {user.streak}
          </p>

        </div>

      </div>



      {/* BADGES */}
      <div className="mb-16">

        <h2 className="text-4xl font-bold mb-8">
          Achievements & Badges
        </h2>



        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {badges.map((badge, index) => (

            <div
              key={index}
              className={`bg-gradient-to-r ${badge.color} rounded-3xl p-8 shadow-lg hover:scale-105 transition-all duration-300`}
            >

              <div className="text-5xl mb-5">
                {badge.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {badge.title}
              </h3>

            </div>

          ))}

        </div>

      </div>



      {/* RECENT ACTIVITY */}
      <div className="bg-[#111] border border-gray-800 rounded-3xl p-8">

        <h2 className="text-3xl font-bold mb-8">
          Recent Activity
        </h2>



        <div className="space-y-6">

          <div className="flex items-center justify-between border-b border-gray-800 pb-4">

            <div>

              <p className="font-semibold">
                Solved Two Sum
              </p>

              <p className="text-gray-500">
                Easy Problem
              </p>

            </div>

            <span className="text-green-400">
              Accepted
            </span>

          </div>



          <div className="flex items-center justify-between border-b border-gray-800 pb-4">

            <div>

              <p className="font-semibold">
                Solved Maximum Subarray
              </p>

              <p className="text-gray-500">
                Medium Problem
              </p>

            </div>

            <span className="text-green-400">
              Accepted
            </span>

          </div>



          <div className="flex items-center justify-between pb-4">

            <div>

              <p className="font-semibold">
                Attempted Merge Intervals
              </p>

              <p className="text-gray-500">
                Medium Problem
              </p>

            </div>

            <span className="text-red-400">
              Wrong Answer
            </span>

          </div>

        </div>

      </div>

    </main>
  );
}