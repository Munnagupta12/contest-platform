import Link from "next/link";

export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "15px 40px",
        background: "#111",
        color: "white"
      }}
    >
      <Link href="/" style={{ color: "white", textDecoration: "none" }}>
        Home
      </Link>

      <Link href="/problems" style={{ color: "white", textDecoration: "none" }}>
        Problems
      </Link>
    </div>
  );
}