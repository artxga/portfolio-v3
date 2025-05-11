export default function TechTag({ name }: { name: string }) {
  return <div className="h-6 py-0.5 px-3 bg-accent-light flex items-center w-fit rounded-2xl">
    <span className="text-xs font-bold text-background-light">{name}</span>
  </div>
}