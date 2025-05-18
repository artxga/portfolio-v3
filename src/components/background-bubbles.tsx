export default function BackgroundBubbles() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      <div
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full blur-3xl opacity-30 animate-pulse"
        style={{ animationDuration: "6s", backgroundColor: "var(--accent)" }}
      />
      <div
        className="absolute top-1/3 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[200px] h-[200px] rounded-full blur-2xl opacity-20 animate-pulse delay-1000"
        style={{ animationDuration: "6s", backgroundColor: "var(--foreground-paragraph)" }}
      />
      <div
        className="absolute bottom-[-50px] right-[-50px] w-[250px] h-[250px] rounded-full blur-2xl opacity-30 animate-pulse delay-2000"
        style={{ animationDuration: "6s", backgroundColor: "var(--hover)" }}
      />
    </div>
  )
}