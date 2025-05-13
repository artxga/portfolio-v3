export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 uppercase">
      <h2 className="text-base font-bold text-[var(--foreground)]">{title}</h2>
      <span className="h-0.5 flex-1 bg-[var(--details)]"></span>
    </div>
  );
}
