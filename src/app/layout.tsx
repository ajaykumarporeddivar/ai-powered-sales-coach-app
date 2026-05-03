import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AI-Powered Sales Coach — Sales Performance Optimization',
  description: 'Unlock your sales team\'s potential with AI-powered coaching and data-driven insights.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.classes}>
      <body className="bg-zinc-50">
        <header className="bg-zinc-900 text-zinc-100 py-4">
          <nav className="container mx-auto px-4 flex justify-between items-center">
            <a href="#" className="text-lg font-bold">
              AI-Powered Sales Coach
            </a>
            <ul className="flex items-center space-x-4">
              <li>
                <a href="#" className="text-zinc-100 hover:text-zinc-200">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-100 hover:text-zinc-200">
                  Coaching
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-100 hover:text-zinc-200">
                  Performance Metrics
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  );
}