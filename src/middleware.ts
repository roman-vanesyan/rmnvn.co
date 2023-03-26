import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { supportedLocales, defaultLocale } from './i18n';

const ignoredPaths = [
  // Public files
  '/robots.txt',
  '/favicon.svg',
  '/favicon.png',

  // Redirects
  '/twitter',
  '/github',
  '/blog',
  '/unsplash',
  '/instagram',
  '/linkedin',
  '/twitch',
  '/youtube',
  '/onlyfans'
];

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  return (
    matchLocale(languages, supportedLocales, defaultLocale) ?? defaultLocale
  );
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (ignoredPaths.includes(pathname)) {
    return;
  }

  if (
    supportedLocales.every(
      (locale) =>
        !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )
  ) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
