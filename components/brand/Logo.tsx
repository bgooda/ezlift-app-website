import Image from 'next/image';
import Link from 'next/link';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'], display: 'swap' });

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 hover:opacity-90 transition-opacity ${className}`}>
      <div className="relative w-8 h-8">
        <Image
          src="/logo.svg"
          alt="EZLift Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <span className={`font-bold text-xl ${manrope.className}`}>EZLift</span>
      <span className="sr-only">EZLift Home</span>
    </Link>
  );
}