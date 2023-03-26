import { defineMessages } from '@formatjs/intl';
import { List, ListLinkProps } from '../../components/List';
import { LangLink } from '../../components/LangLink';
import { i18n, Intl,supportedLocales } from '../../i18n';
import { GlobalParams } from '../globals';

const messages = defineMessages({
  title: {
    defaultMessage: 'Roman Vanesyan',
    id: 'Sl0UmS',
    description: 'Home page title'
  },
  subtitle: {
    defaultMessage:
      'I am <b>programmer</b>, <b>photographer</b> and <b>gym lover</b>',
    id: 'GYJMx+',
    description: 'Home page subtitle'
  },
  twitter: {
    defaultMessage: 'Twitter',
    id: 'dhTZuP',
    description: 'Twitter link text'
  },
  github: {
    defaultMessage: 'GitHub',
    id: 'lliNz/',
    description: 'GitHub link text'
  },
  blog: {
    defaultMessage: 'My blog',
    id: '2qn+Gq',
    description: 'My blog link text'
  },
  onlyfans: {
    defaultMessage: 'OnlyFans',
    id: 'JBORE5',
    description: 'OnlyFans link text'
  },
  unsplash: {
    defaultMessage: 'Unsplash',
    id: 'El7WoF',
    description: 'Unsplash link text'
  },
  instagram: {
    defaultMessage: 'Instagram',
    id: '6NdZQY',
    description: 'Instagram link text'
  },
  linkedin: {
    defaultMessage: 'LinkedIn',
    id: '9FzTNJ',
    description: 'LinkedIn link text'
  },

  twitch: {
    defaultMessage: 'Twitch',
    id: 'ruTEJe',
    description: 'Twitch link text'
  },

  youtube: {
    defaultMessage: 'YouTube',
    id: '9PJmXa',
    description: 'YouTube link text'
  }
});

type LinkProps = ListLinkProps & {
  hidden: boolean;
};

const socialNetworks = [
  { name: 'twitter', hidden: false },
  { name: 'github', hidden: false },
  { name: 'blog', hidden: false },
  { name: 'onlyfans', hidden: false, iconViewBox: '0 0 24 16' },
  { name: 'unsplash', hidden: false },
  { name: 'instagram', hidden: false },
  { name: 'linkedin', hidden: false },
  { name: 'twitch', hidden: true },
  { name: 'youtube', hidden: true }
];

function getLinks(t: Intl): LinkProps[] {
  return socialNetworks.map((network) => ({
    href: `/${network.name}`,
    text: t.formatMessage(messages[network.name]),
    icon: { name: network.name, viewBox: network.iconViewBox },
    hidden: network.hidden
  }));
}

export async function generateStaticParams() {
  return supportedLocales.map((locale) => ({ lang: locale }));
}

export default function Page({ params }: { params: GlobalParams }) {
  const t = i18n(params.lang);
  const links = getLinks(t);

  return (
    <main className="flex w-full flex-grow flex-col px-4">
      <header className="flex flex-col">
        <nav className="ml-auto flex flex-row flex-nowrap gap-4 py-2">
          {[
            { locale: 'ru', text: 'Русский' },
            { locale: 'en', text: 'English' }
          ].map(({ locale, text }) => (
            <LangLink key={locale} locale={locale}>
              {text}
            </LangLink>
          ))}
        </nav>
        <div className="m-auto flex max-w-screen-sm flex-col items-center justify-center gap-y-6 py-12">
          <div className="h-64 w-64">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="256"
              height="256"
              viewBox="0 0 196 196"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M146 18H114H82H50V50V82H18V114H50V146V178H82V146H114V178H146V146V114H178V82H146V50V18Z"
                fill="#ffffff"
                stroke="#000000"
                strokeWidth="3px"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-y-2 text-center">
            <h1 className="rounded-lg text-4xl font-bold">
              <span className="inline-block rounded-full bg-white p-2">
                {t.formatMessage(messages.title)}
              </span>
            </h1>
            <span className="inline-block rounded-full bg-white p-2 text-xl">
              {t.formatMessage(messages.subtitle, {
                // @ts-expect-error: formatjs can actually handle it
                b: (text: string) => <b>{text}</b>
              })}
            </span>
          </div>
        </div>
      </header>

      <div className="m-auto w-full max-w-screen-sm py-12">
        <div className="m-auto w-full max-w-sm">
          <List links={links.filter((value) => !value.hidden)} />
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
        <defs>
          <symbol id="github">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
          </symbol>
          <symbol id="instagram">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
          </symbol>
          <symbol id="linkedin">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
          </symbol>
          <symbol id="twitter">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
          </symbol>
          <symbol id="twitch">
            <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"></path>
            <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"></path>
          </symbol>
          <symbol id="youtube">
            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
          </symbol>
          <symbol id="unsplash">
            <path d="M5 4.5V0H11V4.5H5ZM11 7H16V16H0V7H5V11.5H11V7Z"></path>
          </symbol>
          <symbol id="blog">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"></path>
          </symbol>
          <symbol id="onlyfans">
            <path d="M8.00001 0C6.41776 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608968 4.93853C0.00346631 6.40034 -0.154961 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88744 15.5376 6.43928 15.8463C7.99113 16.155 9.59967 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C16 5.87827 15.1572 3.84344 13.6569 2.34315C12.1566 0.842854 10.1217 0 8.00001 0ZM8.00001 10.4C7.52533 10.4 7.06132 10.2592 6.66664 9.99553C6.27196 9.73181 5.96435 9.35698 5.7827 8.91844C5.60105 8.4799 5.55352 7.99734 5.64612 7.53178C5.73873 7.06623 5.96731 6.63859 6.30295 6.30294C6.6386 5.9673 7.06624 5.73872 7.53179 5.64611C7.99735 5.55351 8.47991 5.60104 8.91845 5.78269C9.35699 5.96434 9.73182 6.27195 9.99554 6.66663C10.2593 7.06131 10.4 7.52532 10.4 8C10.4004 8.31529 10.3386 8.62757 10.2182 8.91894C10.0977 9.21031 9.92095 9.47505 9.69801 9.69799C9.47506 9.92094 9.21032 10.0977 8.91895 10.2182C8.62758 10.3386 8.3153 10.4004 8.00001 10.4Z"></path>
            <path d="M16.992 6C19.0246 6.58496 21.424 6 21.424 6C20.7277 9.04 18.5197 10.944 15.3357 11.1757C14.7183 12.6088 13.6944 13.8295 12.3906 14.6869C11.0869 15.5443 9.56042 16.0009 7.99999 16L10.4 8.37184C12.8672 0.5312 14.1318 0 19.9827 0H24C23.328 2.96 21.0118 5.22112 16.992 6Z"></path>
          </symbol>
        </defs>
      </svg>
    </main>
  );
}
