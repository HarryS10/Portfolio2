import './globals.css';
import { Inter, Outfit } from 'next/font/google';
import Chatbot from '../components/Chatbot';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata = {
  title: 'Shashwat Sinha | Portfolio Dashboard',
  description: 'Portfolio dashboard of Shashwat Sinha, a Computer Science & Engineering Undergraduate.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
