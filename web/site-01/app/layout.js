import { Manrope } from 'next/font/google';
import "./globals.css";

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata = {
  title: "Liberati",
  description: "Liberating Ideas Through Motion & Interactive Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
