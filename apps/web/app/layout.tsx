import "./globals.css";

import Navbar from "../components/Navbar";

export const metadata = {
  title: "Contest Platform",
  description: "DSA Coding Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">

      <body
        style={{
          margin: 0,
          background: "#0f0f0f",
          color: "white",
          fontFamily: "Arial",
        }}
      >

        <Navbar />

        {children}

      </body>

    </html>
  );
}