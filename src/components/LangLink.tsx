'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface Props {
  locale: string;
  children: React.ReactNode;
}

export function LangLink({ locale, children }: Props) {
  const pathname = usePathname();
  const redirectedPathName = (locale: string) => {
    console.info({ pathname, locale });
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };
  const isActive = locale === pathname.split('/')?.[1];
  const commonClassName = 'inline-block p-1 rounded-md select-none';

  return isActive ? (
    <span className={`${commonClassName} bg-white text-black`}>{children}</span>
  ) : (
    <Link
      href={redirectedPathName(locale)}
      className={`${commonClassName} text-white hover:underline`}
    >
      {children}
    </Link>
  );
}
