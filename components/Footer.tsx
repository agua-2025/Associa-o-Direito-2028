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
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#c7a56b] text-sm font-black uppercase tracking-[-0.03em] text-[#13233a] shadow-lg shadow-black/20">
                AAD
              </div>

              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.34em] text-[#c7a56b]">
                  Associação
                </p>

                <p className="mt-1 text-3xl font-black uppercase tracking-[-0.04em] text-white">
                  Direito 2028
                </p>

                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
                  Turma de Formatura
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
              Associação dos Acadêmicos do Curso de Direito, Turma de Formatura
              2028, criada para organizar, planejar e fortalecer a caminhada da
              turma rumo à formatura.
            </p>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.32em] text-[#c7a56b]">
              Navegação
            </p>

            <nav className="mt-6 grid gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-white/70 transition hover:text-[#c7a56b]"
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

            <div className="mt-6 space-y-4 text-sm leading-7 text-white/70">
              <p>
                Associação constituída em 11 de maio de 2026.
              </p>

              <p>
                Sede administrativa no Município de Araputanga/MT.
              </p>

              <p>
                Associação civil, estudantil e organizacional, sem fins
                econômicos e sem fins lucrativos.
              </p>
            </div>

            <Link
              href="/contato"
              className="mt-7 inline-flex rounded-full bg-[#c7a56b] px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-[#13233a] transition hover:-translate-y-1 hover:bg-[#d8bb82]"
            >
              Falar conosco
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
            <p>
              © 2028 AAD Direito 2028. Todos os direitos reservados.
            </p>

            <p>
              Site institucional da Turma de Direito.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}