import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const cards = [
  {
    titulo: "Ação entre amigos",
    texto: "Campanha de arrecadação para apoiar a organização da formatura.",
  },
  {
    titulo: "Eventos",
    texto: "Iniciativas de integração e mobilização dos associados.",
  },
  {
    titulo: "Parceiros",
    texto: "Apoio de pessoas, empresas e colaboradores da comunidade.",
  },
];

const passos = [
  "Definição das regras pela Associação.",
  "Divulgação pelos canais oficiais.",
  "Controle dos valores arrecadados.",
  "Prestação de contas aos associados.",
];

export default function CampanhasPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#1b2230]">
      <Header />

      <section className="relative overflow-hidden bg-[#13233a]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,35,58,0.94),rgba(19,35,58,0.76),rgba(19,35,58,0.36)),url('/images/campanha-destaque.jpg')] bg-cover bg-center" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(199,165,107,0.30),transparent_30%),radial-gradient(circle_at_86%_12%,rgba(255,255,255,0.14),transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#e6c98d]">
              Campanhas
            </p>

            <h1 className="font-display mt-5 text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-white md:text-7xl">
              Participação coletiva para realizar a formatura.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              As campanhas da AAD Direito 2028 serão organizadas para apoiar a
              arrecadação de recursos, fortalecer a participação dos associados e
              contribuir com a realização da formatura.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contato"
                className="rounded-full bg-[#c7a56b] px-7 py-3.5 text-center text-sm font-semibold text-[#13233a] shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[#d8bb82]"
              >
                Quero participar
              </Link>

              <Link
                href="/documentos"
                className="rounded-full border border-white/35 bg-white/10 px-7 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white hover:text-[#13233a]"
              >
                Ver documentos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-6">
        <div className="grid gap-4 rounded-[2rem] border border-white/60 bg-white/95 p-4 shadow-2xl shadow-slate-900/15 backdrop-blur-xl md:grid-cols-3">
          {cards.map((item) => (
            <div
              key={item.titulo}
              className="rounded-[1.4rem] border border-[#e5dacb] bg-[#f7f8fa] p-6"
            >
              <p className="font-display text-3xl font-semibold text-[#13233a]">
                {item.titulo}
              </p>

              <p className="mt-4 text-sm leading-6 text-[#667085]">
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#a7834d]">
              Campanha atual
            </p>

            <h2 className="font-display mt-4 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-6xl">
              Ação entre amigos da Formatura Direito 2028.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-[#e5dacb] bg-white p-7 shadow-sm md:p-8">
            <p className="text-lg leading-8 text-[#596579]">
              Este espaço será utilizado para divulgar a campanha oficial da
              turma, com informações essenciais, formas de participação,
              regulamento e orientações definidas pela Associação.
            </p>

            <div className="mt-6 rounded-[1.5rem] bg-[#f7f8fa] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#a7834d]">
                Status
              </p>

              <p className="font-display mt-3 text-3xl font-semibold text-[#13233a]">
                Em planejamento
              </p>

              <p className="mt-3 leading-7 text-[#667085]">
                As informações definitivas serão publicadas após aprovação
                interna da Associação.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#edf0f5] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#a7834d]">
                Organização
              </p>

              <h2 className="font-display mt-4 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-6xl">
                Como as campanhas serão conduzidas.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#596579]">
                As ações serão realizadas com definição prévia de regras,
                divulgação oficial e acompanhamento interno dos recursos
                arrecadados.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/70 bg-white p-6 shadow-sm md:p-8">
              <div className="grid gap-3">
                {passos.map((passo, index) => (
                  <div
                    key={passo}
                    className="flex items-center gap-4 rounded-2xl bg-[#f7f8fa] px-5 py-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#13233a] text-xs font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <p className="text-base leading-7 text-[#596579]">
                      {passo}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="relative overflow-hidden rounded-[2.4rem] bg-[#c7a56b] p-8 shadow-2xl shadow-slate-900/10 md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(255,255,255,0.34),transparent_28%),radial-gradient(circle_at_15%_80%,rgba(19,35,58,0.20),transparent_30%)]" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#13233a]/70">
                Apoie essa caminhada
              </p>

              <h2 className="font-display mt-4 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-6xl">
                Cada participação ajuda a construir a formatura.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#13233a]/78">
                As ações da Associação dependem da participação dos associados e
                do apoio de pessoas que acreditam nesse projeto coletivo.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/contato"
                className="rounded-full bg-[#13233a] px-8 py-4 text-center text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#0c1728]"
              >
                Falar com a Associação
              </Link>

              <Link
                href="/transparencia"
                className="rounded-full border border-[#13233a]/25 bg-white/55 px-8 py-4 text-center text-sm font-semibold text-[#13233a] backdrop-blur transition hover:-translate-y-1 hover:bg-white"
              >
                Ver governança
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}