export const metadata = { title: "About — Eywal Research Group" };

const AREAS = [
  {
    category: "Core",
    items: [
      {
        name: "Bioelectricity",
        body: "Michael Levin's work at Tufts demonstrated that electrical signaling in non-neural tissue governs morphogenesis as directly as genetics does. We study how cells use bioelectric gradients to encode positional information, execute regenerative programs, and coordinate at scale.",
      },
      {
        name: "Basal Cognition",
        body: "Cognition does not require a nervous system. Single cells exhibit memory, decision-making, and goal-directedness in ways that challenge the neuron-centric view of mind. We ask what the computational primitives of living matter actually are.",
      },
      {
        name: "Morphogenetic Fields",
        body: "Rupert Sheldrake proposed that developmental form is shaped by fields that carry information beyond what is stored in DNA. We treat this as a serious research hypothesis and study the biophysical substrates that could instantiate such fields.",
      },
      {
        name: "Collective Intelligence",
        body: "From slime molds to embryos, collectives of cells solve problems that no individual cell could. We study the information-processing architecture of these systems — how local rules give rise to global coherence without a conductor.",
      },
    ],
  },
  {
    category: "Adjacent",
    items: [
      {
        name: "Consciousness",
        body: "The hard problem remains open. We approach it biologically: if cognition exists at the cellular scale, consciousness may be substrate-independent in ways that current neuroscience cannot accommodate. We track the field and maintain our own theoretical position.",
      },
      {
        name: "Cellular Programming",
        body: "Inspired by the Chan Zuckerberg Biohub's single-cell atlas work and synthetic biology broadly — what does it mean to write software for a living cell? Optogenetics, xenobots, and programmable morphogenesis are the frontier we monitor.",
      },
      {
        name: "Optogenetics",
        body: "Light as a tool for probing and controlling cellular behavior with millisecond precision. We follow this technique both as a research instrument and as evidence for how tightly computation and biology can be coupled.",
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="max-w-2xl mb-20">
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: "var(--accent)", fontFamily: "system-ui, sans-serif" }}
        >
          The Lab
        </p>
        <h1
          className="text-4xl font-bold mb-6"
          style={{ color: "var(--navy)", fontFamily: "system-ui, sans-serif" }}
        >
          About
        </h1>
        <p className="text-lg leading-relaxed mb-5" style={{ color: "#374151" }}>
          Eywal Research Group is an independent research initiative based in
          Madison, WI. We study intelligence and consciousness as fundamental
          properties of living matter — not as emergent luxuries of large nervous
          systems, but as features present at the level of the cell and the
          collective.
        </p>
        <p className="text-base leading-relaxed mb-5" style={{ color: "#4B5563" }}>
          Our intellectual lineage runs through Michael Levin's bioelectricity
          work at Tufts, Rupert Sheldrake's morphogenetic field hypothesis, and
          the single-cell biology programs at institutions like the Chan Zuckerberg
          Biohub. We are convinced that the boundary between computation,
          cognition, and biology is far more porous than consensus science has
          acknowledged.
        </p>
        <p className="text-base leading-relaxed" style={{ color: "#4B5563" }}>
          This site is a running record of that inquiry — logs of daily reading
          and observation, and occasional longer reports when a question demands
          it.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t mb-16" style={{ borderColor: "rgba(13,27,94,0.12)" }} />

      {/* Research Areas */}
      {AREAS.map((section) => (
        <div key={section.category} className="mb-16">
          <h2
            className="text-xs font-semibold tracking-widest uppercase mb-10"
            style={{ color: "var(--navy)", fontFamily: "system-ui, sans-serif" }}
          >
            {section.category} Areas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            {section.items.map((area) => (
              <div key={area.name}>
                <h3
                  className="font-semibold mb-2"
                  style={{ color: "var(--navy)", fontFamily: "system-ui, sans-serif" }}
                >
                  {area.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4B5563" }}>
                  {area.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Divider */}
      <div className="border-t mb-16" style={{ borderColor: "rgba(13,27,94,0.12)" }} />

      {/* Mission statement */}
      <div className="max-w-xl">
        <h2
          className="text-xs font-semibold tracking-widest uppercase mb-6"
          style={{ color: "var(--navy)", fontFamily: "system-ui, sans-serif" }}
        >
          Mission
        </h2>
        <p
          className="text-xl leading-relaxed font-light italic"
          style={{ color: "var(--navy)", fontFamily: "Georgia, serif" }}
        >
          "To understand the inner workings of computation within nature — and
          to follow that question wherever it leads, without regard for the
          disciplinary lines that currently contain it."
        </p>
      </div>
    </div>
  );
}
