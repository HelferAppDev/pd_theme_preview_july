'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const version = '0.1.0';

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          {/* Left: Impressum + Copyright */}
          <div className="flex items-center gap-6">
            <Link
              href="/impressum"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Impressum
            </Link>
            <p className="text-sm text-gray-600">
              © {currentYear} proLog Digital. Alle Rechte vorbehalten.
            </p>
            <p className="text-xs text-gray-500">
              v{version}
            </p>
          </div>

          {/* Right: Mice Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/prolog-mice.svg"
              alt="proLog Digital Mäuse"
              width={50}
              height={25}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
