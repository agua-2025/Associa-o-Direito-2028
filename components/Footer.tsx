import Link from "next/link";

const links = [
  { label: "Quem somos", href: "/associacao" },
  { label: "Campanhas", href: "/campanhas" },
  { label: "Eventos", href: "/eventos" },
  { label: "Documentos", href: "/documentos" },
  { label: "Governança", href: "/transparencia" },
  { label: "Contato", href: "/contato" },
];

export function Footer() {
  return (
    <footer className="bg-[#13233a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.55fr_1.05fr]">
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#c7a56b] text-sm font-black uppercase tracking-[-0.03em] text-[#13233a] shadow-lg shadow-black/20">
                AAD
              </div>

              <div className="leading-none">
                <p className="text-[10px] font-black uppercase tracking-[0.36em] text-[#c7a56b]">
                  Associação
                </p>

                <p className="mt-1 flex items-baseline gap-3">
                  <span className="font-display text-3xl font-bold uppercase tracking-[0.09em] text-white">
                    Direito
                  </span>

                  <span className="text-lg font-black tracking-[0.1em] text-white">
                    2028
                  </span>
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.28em] text-white/55">
                  Turma de Formatura
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/68">
            Associação dos Acadêmicos do Curso de Direito, Turma de Formatura
            2028, criada para organizar e fortalecer a caminhada da turma rumo à
            formatura.
          </p>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.32em] text-[#c7a56b]">
              Navegação
            </p>

            <nav className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm md:grid-cols-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-semibold text-white/68 transition hover:text-[#c7a56b]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.32em] text-[#c7a56b]">
              Institucional
            </p>

            <div className="mt-5 space-y-3 text-sm leading-7 text-white/68">
              <p>Associação constituída em 11 de maio de 2026.</p>

              <p>Sede administrativa no Município de Araputanga/MT.</p>

            <p>
              Entidade civil, estudantil e organizacional, sem fins econômicos e sem
              fins lucrativos.
            </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contato"
                className="inline-flex w-fit rounded-full bg-[#c7a56b] px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-[#13233a] transition hover:-translate-y-1 hover:bg-[#d8bb82]"
              >
                Falar conosco
              </Link>

              <Link
                href="https://www.instagram.com/direito_fcarp24"
                target="_blank"
                className="inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 transition hover:-translate-y-1 hover:border-[#c7a56b] hover:text-[#c7a56b]"
              >
                Instagram da turma
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
            <p>© 2028 AAD Direito 2028. Todos os direitos reservados.</p>

            <p>Site institucional da Turma de Direito.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}