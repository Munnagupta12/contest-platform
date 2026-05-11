"use client";

import { useState } from "react";

import Editor from "@monaco-editor/react";

export default function CodeEditor() {

  const [language, setLanguage] =
    useState("javascript");

  const [code, setCode] =
    useState(
`function solve() {

  console.log("Hello World");

}`
    );

  const [output, setOutput] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [submissions, setSubmissions] =
    useState<any[]>([]);




  async function runCode() {

    setLoading(true);

    const res = await fetch("/api/run", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        code,
        language,
      }),
    });

    const data = await res.json();

    setOutput(data.output);

    setLoading(false);



    /*
      FAKE VERDICT
    */

    const accepted =
      code.includes("function") ||
      code.includes("def");



    const newSubmission = {

      status:
        accepted
          ? "Accepted"
          : "Wrong Answer",

      runtime:
        Math.floor(
          Math.random() * 20
        ) + " ms",

      memory:
        Math.floor(
          Math.random() * 50
        ) + " MB",

      language,

      time:
        new Date()
          .toLocaleTimeString(),
    };



    setSubmissions((prev) => [
      newSubmission,
      ...prev,
    ]);
  }




  return (
    <div className="h-screen flex flex-col bg-black">

      {/* TOP BAR */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800 bg-[#111]">

        {/* LANGUAGE */}
        <select
          value={language}
          onChange={(e) =>
            setLanguage(e.target.value)
          }
          className="bg-black border border-gray-700 rounded-lg px-4 py-2 text-white"
        >

          <option value="javascript">
            JavaScript
          </option>

          <option value="python">
            Python
          </option>

          <option value="java">
            Java
          </option>

          <option value="cpp">
            C++
          </option>

        </select>



        {/* BUTTONS */}
        <div className="flex gap-4">

          <button
            onClick={runCode}
            className="bg-blue-600 hover:bg-blue-700 transition-all px-6 py-2 rounded-lg font-semibold"
          >

            {loading
              ? "Running..."
              : "Run Code"}

          </button>



          <button
            className="bg-green-600 hover:bg-green-700 transition-all px-6 py-2 rounded-lg font-semibold"
          >
            Submit
          </button>

        </div>

      </div>



      {/* EDITOR */}
      <div className="flex-1">

        <Editor
          height="100%"
          theme="vs-dark"
          language={language}
          value={code}
          onChange={(value) =>
            setCode(value || "")
          }
        />

      </div>



      {/* OUTPUT */}
      <div className="bg-[#111] border-t border-gray-800 p-5 h-60 overflow-y-auto">

        <h2 className="text-xl font-bold mb-4">
          Output
        </h2>

        <pre className="text-green-400 whitespace-pre-wrap mb-6">
          {output}
        </pre>



        {/* SUBMISSION HISTORY */}
        <div>

          <h2 className="text-xl font-bold mb-4">
            Recent Submissions
          </h2>



          {submissions.length === 0 && (

            <p className="text-gray-500">
              No submissions yet
            </p>

          )}



          <div className="space-y-4">

            {submissions.map(
              (submission, index) => (

                <div
                  key={index}
                  className="bg-black border border-gray-800 rounded-xl p-4 flex items-center justify-between"
                >

                  {/* STATUS */}
                  <div>

                    <p
                      className={`font-bold
                      ${
                        submission.status ===
                        "Accepted"

                          ? "text-green-400"

                          : "text-red-400"
                      }`}
                    >
                      {submission.status}
                    </p>

                    <p className="text-gray-500 text-sm">
                      {submission.language}
                    </p>

                  </div>



                  {/* STATS */}
                  <div className="text-right">

                    <p className="text-blue-400">
                      {submission.runtime}
                    </p>

                    <p className="text-purple-400">
                      {submission.memory}
                    </p>

                    <p className="text-gray-500 text-sm">
                      {submission.time}
                    </p>

                  </div>

                </div>

              )
            )}

          </div>

        </div>

      </div>

    </div>
  );
}