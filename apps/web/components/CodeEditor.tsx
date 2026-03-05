"use client";

import Editor from "@monaco-editor/react";
import { useState } from "react";

export default function CodeEditor() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [languageId, setLanguageId] = useState(63);
  const [output, setOutput] = useState("");

  const languages: any = {
    javascript: 63,
    python: 71,
    cpp: 54,
    java: 62,
    c: 50
  };

  async function runCode() {
    const res = await fetch("/api/run", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        code,
        language: languageId
      })
    });

    const data = await res.json();
    setOutput(data.output);
  }

  function handleLanguageChange(e: any) {
    const lang = e.target.value;
    setLanguage(lang);
    setLanguageId(languages[lang]);
  }

  return (
    <div>
      {/* Language Selector */}
      <select
        onChange={handleLanguageChange}
        style={{ marginBottom: "10px", padding: "5px" }}
      >
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="cpp">C++</option>
        <option value="java">Java</option>
        <option value="c">C</option>
      </select>

      {/* Code Editor */}
      <Editor
        height="400px"
        theme="vs-dark"
        language={language}
        value={code}
        onChange={(value) => setCode(value || "")}
      />

      {/* Run Button */}
      <button
        onClick={runCode}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          background: "green",
          color: "white",
          borderRadius: "6px"
        }}
      >
        Run Code
      </button>

      {/* Output Console */}
      <div
        style={{
          marginTop: "20px",
          background: "#111",
          color: "#0f0",
          padding: "10px",
          borderRadius: "6px"
        }}
      >
        Output:
        <pre>{output}</pre>
      </div>
    </div>
  );
}