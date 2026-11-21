import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anisha Gupta — AI/ML Engineer",
  description: "Anisha Gupta is an AI/ML Engineer working across generative AI, LLM applications, retrieval systems and agentic workflows. M.Tech AI candidate at NSUT, Delhi.",
  openGraph: {
    title: "Anisha Gupta — AI/ML Engineer",
    description: "Generative AI · LLMs · RAG · Agentic AI",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
