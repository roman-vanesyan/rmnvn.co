import React from 'react';

export interface Props {
  href: string;
  icon?: { name: string; viewBox?: string };
  children: React.ReactNode;
}

export function Link({ href, icon, children }: Props) {
  return (
    <a
      className="inline-flex w-full items-center gap-x-4 rounded-full border-4 border-black bg-white px-8 py-4 text-xl font-bold underline hover:bg-black hover:text-white"
      href={href}
    >
      {icon ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={icon.viewBox ?? '0 0 16 16'}
          className="h-8 w-12 fill-current"
        >
          <use href={`#${icon.name}`} />
        </svg>
      ) : null}
      <span>{children}</span>
    </a>
  );
}
