import CodeEditor from "../../../components/CodeEditor";

export default function ProblemDetail({ params }: any) {
  return (
    <div
      style={{
        display: "flex",
        height: "90vh"
      }}
    >
      {/* LEFT PANEL (Problem Description) */}
      <div
        style={{
          width: "40%",
          padding: "20px",
          borderRight: "1px solid #ccc",
          overflowY: "auto"
        }}
      >
        <h2>Problem {params.id}</h2>

        <p>
          Given an array of integers and a target value, return the indices of
          the two numbers such that they add up to the target.
        </p>

        <h3>Example</h3>

        <pre>
Input: nums = [2,7,11,15], target = 9  
Output: [0,1]
        </pre>
      </div>

      {/* RIGHT PANEL (Editor) */}
      <div
        style={{
          width: "60%",
          padding: "20px"
        }}
      >
        <CodeEditor />
      </div>
    </div>
  );
}