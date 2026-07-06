'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { FiArrowLeft, FiSettings, FiHelpCircle } from 'react-icons/fi';

interface PageHeaderProps {
  title: string;
  showBackButton?: boolean;
}

export function PageHeader({ title, showBackButton = true }: PageHeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  
  // Hide back button on home page
  const isHomePage = pathname === '/';
  const shouldShowBackButton = showBackButton && !isHomePage;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Back Button */}
          <div className="flex items-center gap-4 flex-1">
            {shouldShowBackButton && (
              <button
                onClick={() => router.back()}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Zurück"
              >
                <FiArrowLeft size={24} color="var(--color-secondary-blue)" />
              </button>
            )}
            
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo-prolog-digital.png"
                alt="proLog Digital Logo"
                width={160}
                height={40}
                priority
              />
            </Link>
          </div>

          {/* Center: Page Title */}
          <h1 className="h2 flex-1 text-center text-gray-800">
            {title}
          </h1>

          {/* Right: Icon Buttons */}
          <div className="flex items-center gap-3 flex-1 justify-end">
            {/* Setup Button */}
            <button
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Einstellungen"
            >
              <FiSettings size={24} color="var(--color-secondary-blue)" />
            </button>

            {/* Help Button */}
            <button
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Hilfe"
            >
              <FiHelpCircle size={24} color="var(--color-secondary-blue)" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
