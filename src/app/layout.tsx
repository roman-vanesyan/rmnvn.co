import clsx from 'clsx';
import { defineMessages } from '@formatjs/intl';
import { Inter } from 'next/font/google';
import React from 'react';
import { i18n, supportedLocales } from '../i18n';
import { canonicalUrl, GlobalParams } from './globals';
import './globals.css';

const inter = Inter({
  display: 'swap',
  subsets: ['latin', 'cyrillic']
});

const messages = defineMessages({
  title: {
    id: 'NkmRUf',
    defaultMessage: 'Roman Vanesyan',
    description: 'Site default title'
  },

  description: {
    defaultMessage: "Roman's links",
    id: 'IafouH',
    description: 'Site default description'
  }
});

export async function generateMetadata({ params }: { params: GlobalParams }) {
  const t = i18n(params.lang);

  return {
    title: t.formatMessage(messages.title),
    description: t.formatMessage(messages.description),

    openGraph: {
      title: t.formatMessage(messages.title),
      description: t.formatMessage(messages.description),
      type: 'website',
      locale: params.lang
    },

    twitter: {
      creator: '@roman_vanesyan',
      creatorId: '4234709721',
      title: t.formatMessage(messages.title),
      description: t.formatMessage(messages.description)
    },

    alternates: {
      canonical: canonicalUrl,
      languages: supportedLocales.reduce((locales, locale) => {
        locales[locale] = `${canonicalUrl}/${locale}`;
        return locales;
      }, {})
    }
  };
}

interface Props {
  params: GlobalParams;
  children: React.ReactNode;
}

export default function Root({ children, params }: Props) {
  return (
    <html
      lang={params.lang}
      className={clsx(
        inter.className,
        'flex h-full min-h-screen w-full flex-col bg-[#3956E5] font-sans'
      )}
    >
      <body>{children}</body>
    </html>
  );
}
