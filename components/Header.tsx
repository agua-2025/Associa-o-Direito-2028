"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  { label: "Início", href: "/" },
  { label: "Associação", href: "/associacao" },
  { label: "Campanhas", href: "/campanhas" },
  { label: "Eventos", href: "/eventos" },
  { label: "Galeria", href: "/galeria" },
  { label: "Documentos", href: "/documentos" },
  { label: "Transparência", href: "/transparencia" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5dacb] bg-[#f7f8fa]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
        <Link href="/" onClick={closeMenu} className="shrink-0">
          <p className="font-display text-2xl font-semibold leading-none tracking-tight text-[#13233a] md:text-3xl">
            Associação Direito 2028
          </p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#a7834d] md:text-[11px]">
            Turma de Direito
          </p>
        </Link>

        <nav className="hidden items-center gap-4 text-sm font-medium text-[#4b5565] xl:flex">
          {menuItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 transition ${
                  active
                    ? "bg-white text-[#13233a] shadow-sm"
                    : "hover:bg-white hover:text-[#13233a]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 xl:block">
          <Link
            href="/campanhas"
            className="rounded-full bg-[#13233a] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#0c1728]"
          >
            Participar
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d7c7b4] bg-white text-[#13233a] xl:hidden"
          aria-label="Abrir menu"
        >
          <span className="text-xl leading-none">{menuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#e5dacb] bg-[#f7f8fa] px-6 py-5 xl:hidden">
          <nav className="mx-auto grid max-w-7xl gap-3 text-base font-medium text-[#13233a] sm:grid-cols-2">
            {menuItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded-2xl px-5 py-4 shadow-sm transition ${
                    active
                      ? "bg-[#13233a] text-white"
                      : "bg-white hover:bg-[#f1ede5]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/campanhas"
              onClick={closeMenu}
              className="rounded-2xl bg-[#c7a56b] px-5 py-4 text-center font-semibold text-[#13233a] shadow-sm sm:col-span-2"
            >
              Participar da campanha
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}