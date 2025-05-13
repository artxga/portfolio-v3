export default function TechTag({ name }: { name: string }) {
  return (
    <div className="h-6 py-0.5 px-3 bg-[var(--accent)] flex items-center w-fit rounded-full transition-all duration-200 hover:bg-[var(--hover)]">
      <span className="text-xs font-medium text-[var(--background)]">{name}</span>
    </div>
  );
}
