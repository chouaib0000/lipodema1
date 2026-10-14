'use client';

import { usePath } from './usePath';
import Link from 'next/link';
import type { ReactNode } from 'react';

interface Props {
  href: string;
  end?: boolean;
  className?: string | ((s: { isActive: boolean }) => string);
  children: ReactNode;
}

/** next/link with an "active page" state (aria-current + class), like React Router's NavLink. */
export default function NavLink({ href, end, className, children }: Props) {
  const pathname = usePath();
  const isActive = end || href === '/' ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
  const cls = typeof className === 'function' ? className({ isActive }) : className;
  return (
    <Link href={href} className={cls} aria-current={isActive ? 'page' : undefined}>
      {children}
    </Link>
  );
}
