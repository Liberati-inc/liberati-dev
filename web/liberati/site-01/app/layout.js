import { Manrope, IBM_Plex_Mono } from 'next/font/google';
import "./globals.css";
import { HeaderVisibilityProvider } from "@/components/providers/HeaderVisibilityProvider";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: "Liberati",
  description: "Liberating Ideas Through Motion & Interactive Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${ibmPlexMono.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          rel="stylesheet"
        />
      </head>
      <body>
        <HeaderVisibilityProvider>{children}</HeaderVisibilityProvider>
      </body>
    </html>
  );
}
