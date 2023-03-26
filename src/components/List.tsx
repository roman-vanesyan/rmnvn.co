import { Link, Props as LinkProps } from './Link';

export type ListLinkProps = Omit<LinkProps, 'children'> & {
  text: string;
};

export interface Props {
  links: Array<ListLinkProps>;
}

export function List({ links }: Props) {
  return (
    <div>
      <ul className="flex w-full flex-col gap-y-4">
        {links.map((link) => (
          <li className="w-full" key={link.text}>
            <Link href={link.href} icon={link.icon}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
