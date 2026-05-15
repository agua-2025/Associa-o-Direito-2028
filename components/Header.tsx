"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  { label: "Início", href: "/" },
  { label: "Quem somos", href: "/associacao" },
  { label: "Campanhas", href: "/campanhas" },
  { label: "Documentos", href: "/documentos" },
  { label: "Governança", href: "/transparencia" },
  { label: "Contato", href: "/contato" },
];

const mobileExtraItems = [
  { label: "Associados", href: "/associados" },
  { label: "Eventos", href: "/eventos" },
  { label: "Galeria", href: "/galeria" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  function closeMenu() {
    setMenuOpen(false);
  }

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8dccb] bg-white/95 shadow-sm shadow-slate-900/5 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3.5">
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex items-center gap-4"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#13233a] text-sm font-black uppercase tracking-[-0.03em] text-[#c7a56b] shadow-lg shadow-slate-900/15 transition group-hover:-translate-y-0.5">
            AAD
          </div>

          <div className="leading-none">
            <p className="text-[10px] font-black uppercase tracking-[0.36em] text-[#c7a56b]">
              Associação
            </p>

            <p className="mt-1 flex items-baseline gap-3">
              <span className="font-display text-3xl font-bold uppercase tracking-[0.09em] text-[#13233a] md:text-[2.15rem]">
                Direito
              </span>

              <span className="text-lg font-black tracking-[0.1em] text-[#13233a] md:text-xl">
                2028
              </span>
            </p>

            <p className="mt-1 hidden text-[10px] font-bold uppercase tracking-[0.28em] text-[#667085] sm:block">
              Turma de Formatura
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-[#e8dccb] bg-[#f7f8fa] p-1 text-sm font-bold text-[#4b5565] lg:flex">
          {menuItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2.5 transition ${
                  active
                    ? "bg-[#13233a] text-white shadow-sm"
                    : "hover:bg-white hover:text-[#13233a]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Link
            href="/associados"
            className="rounded-full bg-[#c7a56b] px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-[#13233a] shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-[#d8bb82]"
          >
            Associar-se
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d7c7b4] bg-[#13233a] text-white shadow-sm lg:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span className="text-2xl leading-none">{menuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#e8dccb] bg-white px-6 py-5 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-3 text-base font-bold text-[#13233a]">
            {[...menuItems, ...mobileExtraItems].map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded-2xl px-5 py-4 shadow-sm transition ${
                    active
                      ? "bg-[#13233a] text-white"
                      : "bg-[#f7f8fa] hover:bg-[#f1ede5]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/campanhas"
              onClick={closeMenu}
              className="rounded-2xl bg-[#c7a56b] px-5 py-4 text-center font-black uppercase tracking-[0.08em] text-[#13233a] shadow-sm"
            >
              Participar
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}