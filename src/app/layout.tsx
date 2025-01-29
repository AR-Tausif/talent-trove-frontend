import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Providers from '../../lib/provider';

const inter = Inter({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Talent Trove',
  description: 'Modern talent management platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
