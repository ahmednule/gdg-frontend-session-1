"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Community", href: "#community" },
];

function BrandMark() {
  return (
    <span
      aria-hidden="true"
      className="grid size-10 place-items-center rounded-xl bg-[#f7c948] text-[#12233f] shadow-[0_8px_24px_rgba(247,201,72,0.2)]"
    >
      <svg viewBox="0 0 28 28" className="size-6 fill-none" stroke="currentColor" strokeWidth="2.4">
        <path d="M7 4.5v13.2a4.3 4.3 0 0 0 8.6 0V4.5M7 10.4h8.6M18.5 4.5v13.2a4.3 4.3 0 0 0 8.6 0V4.5" />
      </svg>
    </span>
  );
}

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span className="relative block size-5" aria-hidden="true">
      <span
        className={`absolute left-0 top-1 block h-0.5 w-5 rounded-full bg-current transition-transform ${
          isOpen ? "translate-y-1.5 rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-2.5 block h-0.5 w-5 rounded-full bg-current transition-opacity ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-4 block h-0.5 w-5 rounded-full bg-current transition-transform ${
          isOpen ? "-translate-y-1.5 -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="border-b border-white/10 bg-[#12233f] text-white">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg outline-none transition-opacity hover:opacity-85 focus-visible:ring-2 focus-visible:ring-[#f7c948] focus-visible:ring-offset-2 focus-visible:ring-offset-[#12233f]"
          onClick={closeMenu}
          aria-label="GDG MKU home"
        >
          <BrandMark />
          <span className="leading-none">
            <span className="block text-[1.05rem] font-bold tracking-tight">GDG MKU</span>
            <span className="mt-1 block text-[0.6rem] font-medium uppercase tracking-[0.22em] text-slate-300">
              Developer community
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-200 transition-colors hover:text-[#f7c948] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f7c948] focus-visible:ring-offset-4 focus-visible:ring-offset-[#12233f]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="#events"
            className="inline-flex items-center gap-2 rounded-full bg-[#f7c948] px-5 py-2.5 text-sm font-bold text-[#12233f] transition hover:bg-[#ffda6a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f7c948] focus-visible:ring-offset-2 focus-visible:ring-offset-[#12233f]"
          >
            Join the community
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-100 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f7c948] md:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <MenuIcon isOpen={isMenuOpen} />
        </button>
      </div>

      <div className={`${isMenuOpen ? "block" : "hidden"} border-t border-white/10 md:hidden`}>
        <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4 sm:px-8" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-white/10 py-3 text-sm font-medium text-slate-200 transition-colors last:border-0 hover:text-[#f7c948] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f7c948]"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#events"
            className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#f7c948] px-5 py-2.5 text-sm font-bold text-[#12233f] transition hover:bg-[#ffda6a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f7c948] focus-visible:ring-offset-2 focus-visible:ring-offset-[#12233f]"
            onClick={closeMenu}
          >
            Join the community
            <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
