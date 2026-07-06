'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PageHeader } from './page-header';

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path || (path === '/' && pathname === '/');

  // Map pathname to title for PageHeader
  const getTitleForPath = (path: string) => {
    switch (path) {
      case '/':
        return 'Font und Buttons';
      case '/theme-preview':
        return 'Theme Preview';
      case '/dashboard':
        return 'Dashboard';
      case '/design-system':
        return 'Design System';
      case '/impressum':
        return 'Impressum';
      default:
        return 'Font und Buttons';
    }
  };

  return (
    <>
      <PageHeader title={getTitleForPath(pathname)} showBackButton={pathname !== '/'} />
      <nav className="bg-white border-b border-gray-200">
      <div className="w-full max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center gap-1">
          <Link
            href="/"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive('/')
                ? 'nav-tab-active'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Font und Buttons
          </Link>

          <span className="text-gray-300 mx-1">—</span>

          <Link
            href="/theme-preview"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive('/theme-preview')
                ? 'nav-tab-active'
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
                ? 'nav-tab-active'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
    </>
  );
}
