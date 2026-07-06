interface MenuItem {
  href: string;
  label: string;
}

interface HeaderProps {
  /** The home page renders its menu on top of the carousel. */
  variant?: 'home';
  /** Optional second-level menu with in-page anchors (portfolio sections). */
  secondaryItems?: MenuItem[];
}

const MENU_ITEMS: MenuItem[] = [
  { href: '/', label: 'Home' },
  { href: '/portfolio/', label: 'Portfolio' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];

function Menu({ items, className }: { items: MenuItem[]; className?: string }) {
  return (
    <menu className={className}>
      {items.map((item) => (
        <li className="item" key={item.href}>
          <a href={item.href}>{item.label}</a>
        </li>
      ))}
    </menu>
  );
}

export default function Header({ variant, secondaryItems }: HeaderProps) {
  return (
    <header>
      <Menu items={MENU_ITEMS} className={variant === 'home' ? 'home' : undefined} />
      {secondaryItems && <Menu items={secondaryItems} className="secondary" />}
    </header>
  );
}
