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
    texto: "Constituída em Assembleia Geral realizada em 11 de maio de 2026.",
  },
];

const acessos = [
  {
    titulo: "Quem somos",
    texto: "Conheça a finalidade, a estrutura e a organização institucional da Associação.",
    href: "/associacao",
  },
  {
    titulo: "Documentos",
    texto: "Consulte o Estatuto Social, a Ata de Constituição e documentos públicos.",
    href: "/documentos",
  },
  {
    titulo: "Governança",
    texto: "Veja a Diretoria, a organização interna e as práticas de controle.",
    href: "/transparencia",
  },
  {
    titulo: "Contato",
    texto: "Acompanhe os canais oficiais e o Instagram da turma.",
    href: "/contato",
  },
];

const linhas = [
  "Organização das ações relacionadas à formatura.",
  "Campanhas e iniciativas de arrecadação.",
  "Documentos públicos e registros institucionais.",
  "Prestação de contas aos associados.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#1b2230]">
      <Header />

      <section className="relative overflow-hidden bg-[#13233a]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,35,58,0.94),rgba(19,35,58,0.76),rgba(19,35,58,0.36)),url('/images/hero-turma.jpg')] bg-cover bg-center" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(199,165,107,0.32),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.16),transparent_28%)]" />

        <div className="relative mx-auto grid min-h-[540px] max-w-7xl items-center gap-8 px-6 py-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#e6c98d]">
              AAD Direito 2028
            </p>

            <h1 className="font-display mt-4 text-5xl font-semibold leading-[1.04] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
              União, organização e memória rumo à formatura.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/78 md:text-lg">
              Uma associação criada para organizar, fortalecer e registrar a
              caminhada dos acadêmicos do Curso de Direito até a formatura de
              2028.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/associacao"
                className="rounded-full bg-[#c7a56b] px-8 py-4 text-center text-sm font-semibold text-[#13233a] shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[#d8bb82]"
              >
                Conheça a Associação
              </Link>

              <Link
                href="/documentos"
                className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-center text-sm font-semibold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white hover:text-[#13233a]"
              >
                Ver documentos
              </Link>
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-6 max-w-7xl px-6">
        <div className="grid gap-4 rounded-[2rem] border border-white/60 bg-white/95 p-4 shadow-2xl shadow-slate-900/15 backdrop-blur-xl md:grid-cols-4">
          {destaques.map((item) => (
            <div
              key={item.titulo}
              className="rounded-[1.4rem] border border-[#e5dacb] bg-[#f7f8fa] p-6"
            >
              <p className="font-display text-[2.7rem] font-semibold leading-none text-[#13233a]">
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

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#a7834d]">
              Quem somos
            </p>

            <h2 className="font-display mt-4 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-6xl">
              Uma associação para organizar a nossa história.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-[#e5dacb] bg-white p-7 shadow-sm md:p-9">
            <p className="text-lg leading-8 text-[#596579]">
              A Associação dos Acadêmicos do Curso de Direito, Turma de
              Formatura 2028, AAD Direito 2028, é uma entidade civil, estudantil
              e organizacional, sem fins econômicos e sem fins lucrativos,
              constituída para organizar as ações relacionadas à formatura dos
              associados.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/associacao"
                className="rounded-full bg-[#13233a] px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#0c1728]"
              >
                Saiba mais
              </Link>

              <Link
                href="/transparencia"
                className="rounded-full border border-[#d7c7b4] bg-white px-7 py-3.5 text-center text-sm font-semibold text-[#13233a] transition hover:-translate-y-1 hover:border-[#13233a]"
              >
                Ver governança
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#edf0f5] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#a7834d]">
              Acesso rápido
            </p>

            <h2 className="font-display mt-4 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-6xl">
              O essencial em um só lugar.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {acessos.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex min-h-[250px] flex-col rounded-[2rem] border border-white/70 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
              >
                <p className="font-display text-3xl font-semibold text-[#13233a]">
                  {item.titulo}
                </p>

                <p className="mt-4 text-sm leading-6 text-[#596579]">
                  {item.texto}
                </p>

                <p className="mt-auto pt-8 text-sm font-semibold text-[#a7834d] transition group-hover:text-[#13233a]">
                  Acessar página
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] bg-[#13233a] text-white shadow-2xl shadow-slate-900/15">
            <div className="relative min-h-[390px]">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(19,35,58,0.12),rgba(19,35,58,0.88)),url('/images/campanha-destaque.jpg')] bg-cover bg-center" />

              <div className="absolute inset-0 flex items-end p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#e6c98d]">
                    Campanhas
                  </p>

                  <h2 className="font-display mt-3 text-5xl font-semibold leading-tight">
                    Participação coletiva para realizar a formatura.
                  </h2>

                  <Link
                    href="/campanhas"
                    className="mt-7 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#13233a] transition hover:-translate-y-1"
                  >
                    Ver campanhas
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#e5dacb] bg-white p-7 shadow-sm md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#a7834d]">
              Organização
            </p>

            <h2 className="font-display mt-4 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-5xl">
              Planejamento, documentos e prestação interna.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#596579]">
              A Associação atua com base no Estatuto Social, nas deliberações da
              Assembleia Geral e no acompanhamento da Diretoria e Comissão
              Fiscal.
            </p>

            <div className="mt-6 grid gap-3">
              {linhas.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl bg-[#f7f8fa] px-5 py-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#13233a] text-xs font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="text-base leading-7 text-[#596579]">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/documentos"
                className="rounded-full bg-[#13233a] px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#0c1728]"
              >
                Ver documentos
              </Link>

              <Link
                href="/contato"
                className="rounded-full border border-[#d7c7b4] bg-white px-7 py-3.5 text-center text-sm font-semibold text-[#13233a] transition hover:-translate-y-1 hover:border-[#13233a]"
              >
                Falar com a Associação
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="relative overflow-hidden rounded-[2.4rem] bg-[#c7a56b] p-8 shadow-2xl shadow-slate-900/10 md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(255,255,255,0.34),transparent_28%),radial-gradient(circle_at_15%_80%,rgba(19,35,58,0.20),transparent_30%)]" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#13233a]/70">
                AAD Direito 2028
              </p>

              <h2 className="font-display mt-4 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-6xl">
                Uma formatura construída por todos.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#13233a]/78">
                A participação dos associados fortalece o planejamento, as
                campanhas, os eventos e a memória da turma rumo à formatura.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/campanhas"
                className="rounded-full bg-[#13233a] px-8 py-4 text-center text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#0c1728]"
              >
                Ver campanhas
              </Link>

              <Link
                href="/galeria"
                className="rounded-full border border-[#13233a]/25 bg-white/55 px-8 py-4 text-center text-sm font-semibold text-[#13233a] backdrop-blur transition hover:-translate-y-1 hover:bg-white"
              >
                Ver galeria
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}