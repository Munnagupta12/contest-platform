import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { code } = body;

  const response = await fetch(
    "https://ce.judge0.com/submissions?base64_encoded=false&wait=true",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        source_code: code,
        language_id: 63
      })
    }
  );

  const data = await response.json();

  return NextResponse.json({
    output: data.stdout || data.stderr || "No Output"
  });
}