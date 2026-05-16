import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Varun Dussa — Software Engineer",
  description:
    "Full Stack & AI/ML engineer building production-grade systems with Next.js, React, Node.js, Python, and computer vision.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
