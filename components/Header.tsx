"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  { label: "Início", href: "/" },
  { label: "Associação", href: "/associacao" },
  { label: "Campanhas", href: "/campanhas" },
  { label: "Galeria", href: "/galeria" },
  { label: "Documentos", href: "/documentos" },
  { label: "Governança", href: "/transparencia" },
];

const mobileExtraItems = [
  { label: "Eventos", href: "/eventos" },
  { label: "Associados", href: "/associados" },
  { label: "Contato", href: "/contato" },
];

const systemUrl =
  process.env.NEXT_PUBLIC_SYSTEM_URL || "https://painel-aad-2028.vercel.app";

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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2.5">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex min-w-0 items-center"
          aria-label="AAD Direito 2028"
        >
          <Image
            src="/brand/aad-logo-horizontal.png"
            alt="AAD Direito 2028"
            width={320}
            height={90}
            priority
            className="h-auto w-[190px] object-contain sm:w-[220px] lg:w-[235px]"
          />
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-[#e8dccb] bg-[#f7f8fa] p-1 text-xs font-bold text-[#4b5565] lg:flex">
          {menuItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-full px-3 py-2 transition ${
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

        <div className="hidden shrink-0 items-center gap-1.5 lg:flex">
          <Link
            href={systemUrl}
            target="_blank"
            className="rounded-full border border-[#d7c7b4] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.06em] text-[#13233a] transition hover:-translate-y-0.5 hover:border-[#13233a]"
          >
            Acessar sistema
          </Link>

          <Link
            href={`${systemUrl}/associar`}
            target="_blank"
            className="rounded-full bg-[#c7a56b] px-4 py-2 text-xs font-black uppercase tracking-[0.06em] text-[#13233a] shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-[#d8bb82]"
          >
            Associar-se
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d7c7b4] bg-[#13233a] text-white shadow-sm lg:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span className="text-2xl leading-none">{menuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#e8dccb] bg-white px-5 py-3 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2 text-base font-bold text-[#13233a]">
            {[...menuItems, ...mobileExtraItems].map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded-2xl px-5 py-3 shadow-sm transition ${
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
              href={systemUrl}
              target="_blank"
              onClick={closeMenu}
              className="rounded-2xl border border-[#e8dccb] bg-white px-5 py-3 text-center font-black uppercase tracking-[0.08em] text-[#13233a] shadow-sm"
            >
              Acessar sistema
            </Link>

            <Link
              href={`${systemUrl}/associar`}
              target="_blank"
              onClick={closeMenu}
              className="rounded-2xl bg-[#c7a56b] px-5 py-3 text-center font-black uppercase tracking-[0.08em] text-[#13233a] shadow-sm"
            >
              Associar-se
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
