import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t mt-24"
      style={{ borderColor: "var(--border)", background: "var(--warm-mid)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <Image
            src="/logos/logo-mark.svg"
            alt="Eywal logo"
            width={22}
            height={17}
            className="opacity-60"
          />
          <div>
            <p className="text-sm font-semibold" style={{ color: "var(--navy)" }}>
              Eywal Research Group
            </p>
            <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
              821 E Washington Ave, 2nd Floor · Madison, WI 53703
            </p>
          </div>
        </div>

        <nav className="flex gap-5">
          {[
            { href: "/logs", label: "Logs" },
            { href: "/reports", label: "Reports" },
            { href: "/members", label: "Members" },
            { href: "/about", label: "About" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm transition-opacity hover:opacity-70"
              style={{ color: "var(--navy)" }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <p className="text-xs" style={{ color: "var(--muted)" }}>
          © {year} Eywal Research Group
        </p>
      </div>
    </footer>
  );
}
