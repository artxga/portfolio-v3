import { socialBarData } from "@/core/static/social-bar";

export default function SocialBar() {
  return (
    <div className="flex gap-4">
      {socialBarData.map(({ icon: Icon, id, url }, idx) => (
        <a
          href={url}
          aria-label={id}
          target="_blank"
          key={idx}
          className="text-[var(--foreground)] transition-transform duration-200 md:hover:text-[var(--accent)] focus-visible:text-[var(--accent)] md:hover:scale-110 focus-visible:scale-110"
          rel="noopener noreferrer"
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  )
}