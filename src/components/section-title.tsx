export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 uppercase">
      <span className="text-base font-bold">{title}</span>
      <span className="h-0.5 w-full bg-foreground-light"></span>
    </div>
  );
}