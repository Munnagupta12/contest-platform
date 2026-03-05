import Link from "next/link";

export default function Page() {
  return (
    <div style={{ textAlign: "center", padding: "60px" }}>
      
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
        Online Coding Contest Platform
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        Solve coding problems and test your programming skills.
      </p>

      <Link
        href="/problems"
        style={{
          padding: "12px 20px",
          background: "#2563eb",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none"
        }}
      >
        View Problems
      </Link>

    </div>
  );
}