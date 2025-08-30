import './globals.css';
import { Inter, Roboto_Mono } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Chetan Pawar | AI & ML Engineer',
  description: 'Portfolio of Chetan Pawar - AI Software Engineer with expertise in LLMs, multimodal AI agents, and GenAI.',
  keywords: 'AI Engineer, Machine Learning, LLM, Generative AI, Python Developer, Full Stack',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="bg-deep-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
