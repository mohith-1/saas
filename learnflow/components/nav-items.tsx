'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { label: 'Home',      href: '/' },
  { label: 'Library',   href: '/companions' },
  { label: 'My Journey', href: '/my-journey' },
];

const NavItems = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-6">
      {NAV_ITEMS.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className={cn(
            'text-sm font-medium transition-colors text-muted-foreground hover:text-foreground',
            pathname === href && 'text-primary font-semibold'
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;