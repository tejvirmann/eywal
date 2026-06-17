export const metadata = { title: "Members — Eywal Research Group" };

const MEMBERS = [
  {
    name: "Tejvir S. Mann",
    role: "Founder",
    location: "Madison, WI",
    focus: ["Bioelectricity", "Consciousness", "Cellular Programming", "Collective Intelligence"],
    bio: "Independent researcher working at the intersection of biology, computation, and consciousness. Author of Forest Language: The Inevitable Merge of Natural and Classical Computing (2023), a 125-page investigation into the convergence of biological and classical information processing. Currently building Eywal Research Group as a home for this ongoing inquiry.",
    links: [
      { label: "tejvirmann.com", href: "https://www.tejvirmann.com" },
    ],
  },
];

export default function MembersPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="max-w-2xl">
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: "var(--accent)" }}
        >
          The Group
        </p>
        <h1
          className="text-4xl font-bold mb-4 tracking-tight"
          style={{ color: "var(--navy)", letterSpacing: "-0.02em" }}
        >
          Members
        </h1>
        <p className="text-base leading-relaxed mb-16" style={{ color: "#4B5563" }}>
          Eywal is currently a solo endeavor. The group will grow as the work
          develops and as the right people find their way to these questions.
        </p>

        <div className="space-y-12">
          {MEMBERS.map((member) => (
            <div
              key={member.name}
              className="p-8 rounded-xl border"
              style={{ borderColor: "var(--border)", background: "#fff" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <h2
                    className="text-xl font-bold mb-1"
                    style={{ color: "var(--navy)" }}
                  >
                    {member.name}
                  </h2>
                  <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>
                    {member.role}
                  </p>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                    {member.location}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {member.focus.map((f) => (
                    <span
                      key={f}
                      className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full"
                      style={{ background: "var(--warm-mid)", color: "var(--navy)" }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="border-t pt-6 mb-6"
                style={{ borderColor: "var(--border)" }}
              >
                <p className="text-sm leading-relaxed" style={{ color: "#4B5563" }}>
                  {member.bio}
                </p>
              </div>

              <div className="flex gap-4">
                {member.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold underline underline-offset-4 transition-opacity hover:opacity-60"
                    style={{ color: "var(--navy)" }}
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-xl" style={{ background: "var(--warm-mid)" }}>
          <h3 className="font-semibold mb-2" style={{ color: "var(--navy)" }}>
            Join the group
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "#4B5563" }}>
            If you are working on questions at the intersection of consciousness,
            bioelectricity, morphogenesis, or collective intelligence and want to
            think alongside others doing the same — reach out.
          </p>
        </div>
      </div>
    </div>
  );
}
