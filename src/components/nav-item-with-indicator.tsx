interface NavItemWithIndicatorProps {
  name: string;
  href: string;
  isActive: boolean;
}

export default function NavItemWithIndicator({ href, name, isActive = false }: NavItemWithIndicatorProps) {

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const section = document.querySelector(href)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  return (
    <a
      className="flex items-center h-5 gap-4 transition-colors duration-200 ease-in-out group"
      href={href}
      aria-label={`Navigate to ${name}`}
      onClick={handleClick}
    >
      <span
        className={`h-0.5 w-8 bg-[var(--details)] transition-all duration-200 group-hover:w-12 group-hover:bg-[var(--foreground)] group-focus-visible:w-12 group-focus-visible:bg-[var(--foreground)] ${isActive ? 'w-12 bg-[var(--foreground)]' : ''
          }`}
      ></span>
      <span
        className={`text-xs font-bold text-[var(--details)] group-hover:text-sm group-focus-visible:text-sm transition-colors group-hover:text-[var(--foreground)] group-focus-visible:text-[var(--foreground)] ${isActive ? 'text-sm text-[var(--foreground)]' : ''
          }`}
      >
        {name}
      </span>
    </a>
  );
}
