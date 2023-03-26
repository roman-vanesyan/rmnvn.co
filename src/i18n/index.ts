import { createIntl, createIntlCache, IntlCache } from '@formatjs/intl';
import en from '../../locales/en.json';
import ru from '../../locales/ru.json';

const messages = {
  en,
  ru
} as const;

export type SupportedLocale = (typeof supportedLocales)[number];
export type Intl = ReturnType<typeof i18n>;

export function i18n(locale: SupportedLocale, options?: { cache?: IntlCache }) {
  const cache = options?.cache ?? createIntlCache();
  const currentLocale = locale ?? defaultLocale;

  return createIntl(
    { locale: currentLocale, messages: messages[currentLocale] },
    cache
  );
}

export const supportedLocales = ['en', 'ru'];
export const defaultLocale = 'en';
