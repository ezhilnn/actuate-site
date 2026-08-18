import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Actuate — Closed-loop feedback control for AI systems",

  description:
    "Actuate is an engineering framework for building closed-loop feedback control systems around any generative plant. Measure. Correct. Converge. Repeat.",

  keywords: [
    "actuate",
    "actuate-ai",
    "control loop",
    "LLM",
    "AI agents",
    "evaluation",
    "feedback control",
  ],

  metadataBase: new URL(
    "https://ezhilnn.github.io/actuate/"
  ),

  openGraph: {
    title: "Actuate — Closed-loop feedback control for AI systems",

    description:
      "Measure. Correct. Converge. Repeat.",

    type: "website",
  },

  icons: {
    icon: "/actuate/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
        />
      </head>

      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}