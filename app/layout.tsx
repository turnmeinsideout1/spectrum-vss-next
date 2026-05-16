import './globals.css';
import type { Metadata } from 'next';
import { Lora, Open_Sans } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Spectrum Veterinary Surgical Services',
  description: 'Board-certified mobile veterinary surgical care for clinics across Central New Jersey, Eastern Pennsylvania, and Southern New York.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${lora.variable} ${openSans.variable}`}>
    <body><Header />{children}<Footer /></body>
  </html>;
}
