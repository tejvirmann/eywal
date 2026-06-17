"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function HeroText() {
  return (
    <motion.div
      className="max-w-2xl"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        variants={item}
        className="text-6xl sm:text-7xl font-bold leading-none tracking-tight mb-6"
        style={{ color: "var(--navy)", letterSpacing: "-0.03em" }}
      >
        Nature.
        <br />
        Technology.
        <br />
        Discovery.
      </motion.h1>

      <motion.p
        variants={item}
        className="text-lg leading-relaxed mb-10 max-w-lg"
        style={{ color: "#4B5563" }}
      >
        We study consciousness and intelligence as properties of living systems
        at every scale — from single cells to collectives, from bioelectric
        fields to morphogenetic memory.
      </motion.p>

      <motion.div variants={item} className="flex flex-wrap gap-3">
        <Link
          href="/logs"
          className="px-6 py-3 text-sm font-semibold rounded-lg transition-opacity hover:opacity-90"
          style={{ background: "var(--navy)", color: "#fff" }}
        >
          Latest Logs
        </Link>
        <Link
          href="/about"
          className="px-6 py-3 text-sm font-semibold rounded-lg border transition-colors hover:bg-gray-50"
          style={{ borderColor: "var(--border)", color: "var(--navy)" }}
        >
          About the Lab
        </Link>
      </motion.div>
    </motion.div>
  );
}
