export default function FooterSection() {
  return (
    <footer className="pt-16 pb-6 text-sm text-[var(--foreground-paragraph)]">
      <div className="space-y-2">
        <p className="opacity-80">Built by Angel Arteaga</p>
        <p className="opacity-60">
          Inspired by <a className="font-bold" href="https://brittanychiang.com/" target="_blank">Brittany Chiang</a> & <a className="font-bold" href="https://www.martpol.dev/" target="_blank">Martin Polley</a>
        </p>
        <p className="opacity-50">
          © {new Date().getFullYear()} — Powered by React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
