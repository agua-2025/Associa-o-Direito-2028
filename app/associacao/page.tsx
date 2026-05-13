import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const dados = [
  {
    numero: "AAD",
    titulo: "Direito 2028",
    texto: "Associação dos Acadêmicos do Curso de Direito.",
  },
  {
    numero: "2026",
    titulo: "Constituída",
    texto: "Constituída em Assembleia Geral realizada em 11 de maio de 2026.",
  },
  {
    numero: "MT",
    titulo: "Araputanga",
    texto: "Sede administrativa da Associação.",
  },
];

const estrutura = [
  {
    titulo: "Assembleia Geral",
    texto: "Órgão máximo da Associação, responsável pelas principais deliberações dos associados.",
  },
  {
    titulo: "Diretoria",
    texto: "Responsável pela administração, organização das ações e execução das decisões aprovadas.",
  },
  {
    titulo: "Comissão Fiscal",
    texto: "Responsável por acompanhar a gestão financeira e analisar as prestações de contas.",
  },
];

export default function AssociacaoPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#1b2230]">
      <Header />

      <section className="relative overflow-hidden bg-[#13233a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(199,165,107,0.34),transparent_30%),radial-gradient(circle_at_84%_10%,rgba(255,255,255,0.14),transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#e6c98d]">
              Quem somos
            </p>

            <h1 className="font-display mt-6 text-6xl font-semibold leading-[0.98] tracking-[-0.04em] text-white md:text-8xl">
              Uma associação para organizar a nossa formatura.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/75">
              A AAD Direito 2028 foi constituída para dar organização, segurança
              e identidade institucional às ações da turma de Direito rumo à
              formatura de 2028.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-14 max-w-7xl px-6">
        <div className="grid gap-4 rounded-[2rem] border border-white/60 bg-white/95 p-4 shadow-2xl shadow-slate-900/15 backdrop-blur-xl md:grid-cols-3">
          {dados.map((item) => (
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
              Finalidade
            </p>

            <h2 className="font-display mt-5 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-7xl">
              Organizar, arrecadar e planejar.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-[#e5dacb] bg-white p-8 shadow-sm md:p-10">
            <p className="text-xl leading-9 text-[#596579]">
              A Associação dos Acadêmicos do Curso de Direito, Turma de
              Formatura 2028, também denominada AAD Direito 2028, é uma
              associação civil, estudantil e organizacional, sem fins econômicos
              e sem fins lucrativos, criada para organizar, administrar,
              arrecadar, gerir e aplicar recursos destinados à realização da
              formatura dos acadêmicos associados.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/documentos"
                className="rounded-full bg-[#13233a] px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#0c1728]"
              >
                Ver documentos
              </Link>

              <Link
                href="/campanhas"
                className="rounded-full border border-[#d7c7b4] bg-white px-7 py-3.5 text-center text-sm font-semibold text-[#13233a] transition hover:-translate-y-1 hover:border-[#13233a]"
              >
                Ver campanhas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#edf0f5] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#a7834d]">
              Estrutura
            </p>

            <h2 className="font-display mt-5 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-7xl">
              Governança simples e organizada.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#596579]">
              A Associação é organizada em Assembleia Geral, Diretoria e
              Comissão Fiscal, conforme o Estatuto Social aprovado.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {estrutura.map((item) => (
              <div
                key={item.titulo}
                className="rounded-[2rem] border border-white/70 bg-white p-8 shadow-sm"
              >
                <p className="font-display text-4xl font-semibold text-[#13233a]">
                  {item.titulo}
                </p>

                <p className="mt-5 leading-7 text-[#596579]">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-[2.4rem] bg-[#c7a56b] p-8 shadow-2xl shadow-slate-900/10 md:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(255,255,255,0.34),transparent_28%),radial-gradient(circle_at_15%_80%,rgba(19,35,58,0.20),transparent_30%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#13233a]/70">
                Estatuto Social
              </p>

              <h2 className="font-display mt-5 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-7xl">
                Uma base formal para uma caminhada coletiva.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#13233a]/78">
                O Estatuto Social define a finalidade, os direitos e deveres dos
                associados, a estrutura administrativa e as regras de gestão da
                Associação.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/documentos"
                className="rounded-full bg-[#13233a] px-8 py-4 text-center text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#0c1728]"
              >
                Acessar documentos
              </Link>

              <Link
                href="/contato"
                className="rounded-full border border-[#13233a]/25 bg-white/55 px-8 py-4 text-center text-sm font-semibold text-[#13233a] backdrop-blur transition hover:-translate-y-1 hover:bg-white"
              >
                Falar com a Associação
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}