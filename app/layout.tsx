import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clikit",
  description: "Under Development",
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
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
