import {
  createIntl,
  createIntlCache,
  IntlCache,
  defineMessages
} from '@formatjs/intl';

export const create_i18n = (
  locale: string,
  options?: { cache?: IntlCache }
) => {
  const cache = options?.cache ?? createIntlCache();

  return createIntl({ locale }, cache);
};

const messages = defineMessages({
  twitter: {
    defaultMessage: 'Twitter'
  },
  github: {
    defaultMessage: 'GitHub'
  },
  blog: {
    defaultMessage: 'My blog'
  },
  onlyfans: {
    defaultMessage: 'OnlyFans'
  },
  unsplash: {
    defaultMessage: 'Unsplash'
  },
  instagram: {
    defaultMessage: 'Instagram'
  },
  linkedin: {
    defaultMessage: 'LinkedIn'
  }
});
