'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path || (path === '/' && pathname === '/');

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="w-full max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center gap-1">
          <Link
            href="/"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive('/')
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Logopädie-Trainer
          </Link>

          <span className="text-gray-300 mx-1">—</span>

          <Link
            href="/theme-preview"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive('/theme-preview')
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Theme
          </Link>

          <span className="text-gray-300 mx-1">—</span>

          <Link
            href="/dashboard"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive('/dashboard')
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}
