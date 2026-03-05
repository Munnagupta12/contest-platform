async function getProblems() {
  const res = await fetch("https://codeforces.com/api/problemset.problems");
  const data = await res.json();

  // Filter beginner problems (≤ 800 rating)
  const beginnerProblems = data.result.problems.filter(
    (p: any) => p.rating && p.rating <= 800
  );

  return beginnerProblems.slice(0, 20);
}

export default async function Problems() {
  const problems = await getProblems();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Beginner Problem List</h1>

      <ul>
        {problems.map((p: any, index: number) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <a
              href={`/problems/${p.contestId}-${p.index}`}
              style={{
                textDecoration: "none",
                fontSize: "18px",
                color: "#2563eb",
                fontWeight: "bold"
              }}
            >
              {p.name}
            </a>

            <span style={{ marginLeft: "10px", color: "gray" }}>
              Difficulty: {p.rating}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}