import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const destaques = [
  {
    numero: "AAD",
    titulo: "Direito 2028",
    texto: "Associação dos acadêmicos do Curso de Direito.",
  },
  {
    numero: "2028",
    titulo: "Formatura",
    texto: "Organização coletiva rumo à conclusão da graduação.",
  },
  {
  numero: "MT",
  titulo: "Araputanga",
  texto: "Sede administrativa da Associação.",
},
  {
  numero: "2026",
  titulo: "Constituída",
  texto: "Associação constituída em Assembleia Geral realizada em 11 de maio de 2026.",
},
];

const acoes = [
  {
    titulo: "Associação",
    texto: "Conheça a finalidade, a estrutura e a organização institucional da AAD Direito 2028.",
    href: "/associacao",
  },
  {
    titulo: "Campanhas",
    texto: "Acompanhe as ações e iniciativas voltadas à arrecadação para a formatura.",
    href: "/campanhas",
  },
  {
    titulo: "Eventos",
    texto: "Veja os encontros, reuniões, assembleias e momentos importantes da turma.",
    href: "/eventos",
  },
  {
    titulo: "Documentos",
    texto: "Consulte os documentos institucionais e registros formais da Associação.",
    href: "/documentos",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#1b2230]">
      <Header />

      <section className="relative overflow-hidden bg-[#13233a]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,35,58,0.92),rgba(19,35,58,0.72),rgba(19,35,58,0.34)),url('/images/hero-turma.jpg')] bg-cover bg-center" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(199,165,107,0.32),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.18),transparent_28%)]" />

        <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#e6c98d]">
              AAD Direito 2028
            </p>

            <h1 className="font-display mt-6 text-6xl font-semibold leading-[0.98] tracking-[-0.04em] text-white md:text-8xl">
              União, organização e memória rumo à formatura.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/78">
              Uma associação criada para planejar, organizar e fortalecer a
              caminhada dos acadêmicos do Curso de Direito até a formatura de
              2028.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/associacao"
                className="rounded-full bg-[#c7a56b] px-8 py-4 text-center text-sm font-semibold text-[#13233a] shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[#d8bb82]"
              >
                Conheça a Associação
              </Link>

              <Link
                href="/campanhas"
                className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-center text-sm font-semibold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white hover:text-[#13233a]"
              >
                Ver campanhas
              </Link>
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-20 max-w-7xl px-6">
        <div className="grid gap-4 rounded-[2rem] border border-white/60 bg-white/92 p-4 shadow-2xl shadow-slate-900/15 backdrop-blur-xl md:grid-cols-4">
          {destaques.map((item) => (
            <div
              key={item.titulo}
              className="rounded-[1.4rem] border border-[#e5dacb] bg-[#f7f8fa] p-6"
            >
              <p className="font-display text-5xl font-semibold leading-none text-[#13233a]">
                {item.numero}
              </p>

              <p className="mt-4 font-semibold text-[#13233a]">
                {item.titulo}
              </p>

              <p className="mt-2 text-sm leading-6 text-[#667085]">
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#a7834d]">
              Quem somos
            </p>

            <h2 className="font-display mt-5 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-7xl">
              Uma associação para organizar a nossa história.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-[#e5dacb] bg-white p-8 shadow-sm md:p-10">
            <p className="text-xl leading-9 text-[#596579]">
              A Associação dos Acadêmicos do Curso de Direito, Turma de
              Formatura 2028, AAD Direito 2028, é uma entidade civil, estudantil
              e organizacional, sem fins econômicos, criada para organizar,
              administrar e apoiar as ações relacionadas à formatura dos
              associados.
            </p>

            <div className="mt-8">
              <Link
                href="/associacao"
                className="inline-flex rounded-full bg-[#13233a] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#0c1728]"
              >
                Saiba mais
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#edf0f5] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#a7834d]">
              Ações principais
            </p>

            <h2 className="font-display mt-5 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-7xl">
              O essencial em um só lugar.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {acoes.map((acao) => (
              <Link
                key={acao.href}
                href={acao.href}
                className="group min-h-[320px] rounded-[2rem] border border-white/70 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10"
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <p className="font-display text-4xl font-semibold text-[#13233a]">
                      {acao.titulo}
                    </p>

                    <p className="mt-5 leading-7 text-[#596579]">
                      {acao.texto}
                    </p>
                  </div>

                  <p className="mt-10 text-sm font-semibold text-[#a7834d] transition group-hover:text-[#13233a]">
                    Acessar página
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="overflow-hidden rounded-[2.4rem] bg-[#13233a] text-white shadow-2xl shadow-slate-900/15">
          <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#e6c98d]">
                Campanhas
              </p>

              <h2 className="font-display mt-5 text-5xl font-semibold leading-tight tracking-[-0.03em] md:text-7xl">
                Participação coletiva para realizar a formatura.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                As campanhas serão organizadas para apoiar a arrecadação de
                recursos e fortalecer o planejamento da turma, sempre conforme
                as deliberações da Associação.
              </p>

              <div className="mt-9">
                <Link
                  href="/campanhas"
                  className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#13233a] transition hover:-translate-y-1"
                >
                  Acompanhar campanhas
                </Link>
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-white/10">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(19,35,58,0.08),rgba(19,35,58,0.82)),url('/images/campanha-destaque.jpg')] bg-cover bg-center" />

              <div className="absolute inset-0 flex items-end p-8">
                <div className="rounded-[1.5rem] border border-white/20 bg-[#13233a]/60 p-6 backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#e6c98d]">
                    Campanha atual
                  </p>

                  <p className="font-display mt-3 text-4xl font-semibold leading-tight">
                    Ação entre amigos da Formatura Direito 2028
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="overflow-hidden rounded-[2rem] border border-[#e5dacb] bg-[#f7f8fa] shadow-sm">
              <div className="relative h-80 bg-[#13233a]">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(19,35,58,0.05),rgba(19,35,58,0.76)),url('/images/evento-assembleia.jpg')] bg-cover bg-center" />

                <div className="absolute inset-0 flex items-end p-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#e6c98d]">
                      Eventos
                    </p>

                    <h3 className="font-display mt-3 text-5xl font-semibold leading-tight text-white">
                      Assembleias, encontros e organização.
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <p className="leading-7 text-[#596579]">
                  Registros dos principais momentos de planejamento,
                  deliberação e integração da turma.
                </p>

                <Link
                  href="/eventos"
                  className="mt-7 inline-flex rounded-full bg-[#13233a] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1"
                >
                  Ver eventos
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#e5dacb] bg-[#f7f8fa] shadow-sm">
              <div className="relative h-80 bg-[#13233a]">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(19,35,58,0.05),rgba(19,35,58,0.76)),url('/images/galeria-turma.jpg')] bg-cover bg-center" />

                <div className="absolute inset-0 flex items-end p-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#e6c98d]">
                      Galeria
                    </p>

                    <h3 className="font-display mt-3 text-5xl font-semibold leading-tight text-white">
                      Memórias da nossa caminhada.
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <p className="leading-7 text-[#596579]">
                  Fotos, registros e momentos que ajudam a contar a história da
                  Turma de Direito rumo à formatura.
                </p>

                <Link
                  href="/galeria"
                  className="mt-7 inline-flex rounded-full bg-[#13233a] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1"
                >
                  Ver galeria
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-[2.4rem] bg-[#c7a56b] p-8 shadow-2xl shadow-slate-900/10 md:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(255,255,255,0.34),transparent_28%),radial-gradient(circle_at_15%_80%,rgba(19,35,58,0.20),transparent_30%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#13233a]/70">
                Faça parte
              </p>

              <h2 className="font-display mt-5 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-7xl">
                Uma formatura construída por todos.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#13233a]/78">
                A participação dos associados será essencial para transformar
                planejamento, campanhas e eventos em uma formatura organizada,
                bonita e memorável.
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