import './globals.css';
import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { CookieBanner } from '@/components/cookies/CookieBanner';

const inter = Inter({ subsets: ['latin'], display: 'swap' });
const manrope = Manrope({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'EZLift - Your Smart Workout Companion',
  description: 'Track workouts, analyze progress, and achieve your fitness goals with EZLift.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} dark`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col bg-background text-foreground">
            {children}
          </div>
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}