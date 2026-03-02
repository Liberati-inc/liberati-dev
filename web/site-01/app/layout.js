import "./globals.css";

export const metadata = {
  title: "Site 01",
  description: "Minimal Next.js site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
