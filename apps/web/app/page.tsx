import Link from "next/link";

import AIAssistant from "../components/AIAssistant";

export default function HomePage() {

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">

        <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">

          Online Coding Contest Platform

        </h1>



        <p className="text-gray-400 text-xl max-w-3xl mb-10 leading-9">

          Solve coding problems, participate in contests,
          improve your DSA skills, get AI coding help,
          and climb the leaderboard.

        </p>



        {/* BUTTONS */}
        <div className="flex gap-6">

          <Link
            href="/problems"
            className="bg-blue-600 hover:bg-blue-700 transition-all px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg"
          >
            Solve Problems
          </Link>



          <Link
            href="/leaderboard"
            className="border border-gray-700 hover:border-white transition-all px-8 py-4 rounded-2xl text-lg"
          >
            Leaderboard
          </Link>

        </div>

      </section>



      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-8 px-10 pb-20">

        {/* FEATURE 1 */}
        <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 hover:scale-105 transition-all">

          <h2 className="text-2xl font-bold mb-4">
            Coding Problems
          </h2>

          <p className="text-gray-400 leading-8">

            Practice easy, medium and hard DSA problems
            with real coding experience.

          </p>

        </div>



        {/* FEATURE 2 */}
        <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 hover:scale-105 transition-all">

          <h2 className="text-2xl font-bold mb-4">
            AI Assistant
          </h2>

          <p className="text-gray-400 leading-8">

            Get coding hints, debugging help and optimization suggestions.

          </p>

        </div>



        {/* FEATURE 3 */}
        <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 hover:scale-105 transition-all">

          <h2 className="text-2xl font-bold mb-4">
            Live Contests
          </h2>

          <p className="text-gray-400 leading-8">

            Participate in coding contests and improve your ranking.

          </p>

        </div>

      </section>



      {/* AI SECTION */}
      <section className="px-10 pb-24">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-5xl font-bold mb-10 text-center">

            AI Coding Assistant

          </h2>



          <AIAssistant />

        </div>

      </section>

    </main>
  );
}