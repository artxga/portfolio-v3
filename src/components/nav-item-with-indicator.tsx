interface Props {
  name: string
  href: string
}

export default function NavItemWithIndicator({ href, name }: Props) {
  return (
    <a
      className="group flex items-center gap-4"
      href={href}
      aria-label={`Navigate to ${name}`}
    >
      <span className="h-0.5 w-8 transition-all group-hover:w-12 group-hover:bg-accent-light group-focus-visible:w-12 group-focus-visible:bg-accent-light motion-reduce:transition-none bg-foreground-light"></span>
      <span className="group-hover:text-accent-light group-focus-visible:text-accent-light">{name}</span>
    </a>
  );
}