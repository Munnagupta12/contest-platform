"use client";

import { useState } from "react";

export default function AIAssistant() {

  const [question, setQuestion] =
    useState("");

  const [response, setResponse] =
    useState("");

  const [loading, setLoading] =
    useState(false);



  async function askAI() {

    setLoading(true);



    /*
      FAKE AI RESPONSE
    */

    setTimeout(() => {

      let answer = "";



      if (
        question
          .toLowerCase()
          .includes("two sum")
      ) {

        answer =
`Hint:
Use a HashMap to store visited numbers.

Time Complexity:
O(n)`;

      }

      else if (
        question
          .toLowerCase()
          .includes("dp")
      ) {

        answer =
`Dynamic Programming Tip:
Break problem into subproblems and store results.`;

      }

      else {

        answer =
`AI Suggestion:
Try optimizing your solution using better data structures.`;

      }



      setResponse(answer);

      setLoading(false);

    }, 1000);

  }



  return (
    <div className="bg-[#111] border border-gray-800 rounded-3xl p-6 h-full flex flex-col">

      {/* TITLE */}
      <h2 className="text-2xl font-bold mb-6">
        AI Code Assistant
      </h2>



      {/* INPUT */}
      <textarea
        placeholder="Ask coding doubts..."
        value={question}
        onChange={(e) =>
          setQuestion(e.target.value)
        }
        className="bg-black border border-gray-700 rounded-2xl p-4 outline-none text-white h-40 resize-none mb-5"
      />



      {/* BUTTON */}
      <button
        onClick={askAI}
        className="bg-purple-600 hover:bg-purple-700 transition-all py-3 rounded-2xl font-semibold mb-6"
      >

        {loading
          ? "Thinking..."
          : "Ask AI"}

      </button>



      {/* RESPONSE */}
      <div className="bg-black border border-gray-800 rounded-2xl p-5 flex-1 overflow-y-auto">

        <pre className="text-green-400 whitespace-pre-wrap">
          {response}
        </pre>

      </div>

    </div>
  );
}