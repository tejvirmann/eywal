"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/logs", label: "Logs" },
  { href: "/reports", label: "Reports" },
  { href: "/members", label: "Members" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/logos/logo-mark.svg"
            alt="Eywal logo"
            width={28}
            height={22}
            className="flex-shrink-0"
          />
          <span
            className="text-sm font-semibold tracking-tight hidden sm:block"
            style={{ color: "var(--navy)" }}
          >
            Eywal Research Group
          </span>
        </Link>

        <nav className="flex items-center gap-0.5">
          {links.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className="px-3 py-1.5 text-sm rounded-md transition-colors"
                style={{
                  color: active ? "var(--navy)" : "var(--muted)",
                  background: active ? "var(--navy-dim)" : "transparent",
                  fontWeight: active ? 600 : 400,
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
