"use client";

import { use } from "react";

import { problems } from "../../../data/problems";

import CodeEditor from "../../../components/CodeEditor";

import AIAssistant from "../../../components/AIAssistant";



export default function ProblemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = use(params);

  const problem =
    problems.find(
      (p) => p.id === id
    );



  if (!problem) {

    return (
      <div className="text-white p-10">
        Problem not found
      </div>
    );

  }



  return (
    <main className="min-h-screen bg-black text-white">

      <div className="grid md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="border-r border-gray-800 p-8 overflow-y-auto h-screen">

          {/* TITLE */}
          <h1 className="text-5xl font-bold mb-4">

            {problem.title}

          </h1>



          {/* DIFFICULTY */}
          <div className="mb-8">

            <span
              className={`px-4 py-1 rounded-full text-sm font-semibold

              ${
                problem.difficulty ===
                "Easy"

                  ? "bg-green-500/20 text-green-400"

                  : problem.difficulty ===
                    "Medium"

                  ? "bg-yellow-500/20 text-yellow-400"

                  : "bg-red-500/20 text-red-400"
              }`}
            >

              {problem.difficulty}

            </span>

          </div>



          {/* DESCRIPTION */}
          <p className="text-gray-300 text-lg leading-8 mb-10">

            {problem.description}

          </p>



          {/* EXAMPLES */}
          <div className="mb-10">

            <h2 className="text-2xl font-bold mb-5">
              Examples
            </h2>



            {problem.examples.map(
              (example, index) => (

                <div
                  key={index}
                  className="bg-[#111] border border-gray-800 rounded-2xl p-6 mb-6"
                >

                  <p className="mb-4">

                    <span className="font-bold text-blue-400">
                      Input:
                    </span>

                    <br />

                    {example.input}

                  </p>



                  <p>

                    <span className="font-bold text-green-400">
                      Output:
                    </span>

                    <br />

                    {example.output}

                  </p>

                </div>

              )
            )}

          </div>



          {/* TESTCASES */}
          <div>

            <h2 className="text-2xl font-bold mb-5">
              Testcases
            </h2>



            {problem.testcases.map(
              (testcase, index) => (

                <div
                  key={index}
                  className="bg-[#111] border border-gray-800 rounded-2xl p-6 mb-6"
                >

                  <p className="mb-4">

                    <span className="font-bold text-blue-400">
                      Input:
                    </span>

                    <br />

                    {testcase.input}

                  </p>



                  <p>

                    <span className="font-bold text-green-400">
                      Expected Output:
                    </span>

                    <br />

                    {testcase.output}

                  </p>

                </div>

              )
            )}

          </div>

        </div>



        {/* RIGHT SIDE */}
        <div className="grid grid-rows-2 h-screen">

          {/* CODE EDITOR */}
          <div className="overflow-hidden border-b border-gray-800">

            <CodeEditor />

          </div>



          {/* AI ASSISTANT */}
          <div className="p-5 bg-black overflow-hidden">

            <AIAssistant />

          </div>

        </div>

      </div>

    </main>
  );
}