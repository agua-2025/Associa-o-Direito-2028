import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import { associacao, pilares } from "@/data/associacao";
import { campanhaDestaque } from "@/data/campanhas";
import { eventos } from "@/data/eventos";
import { albuns } from "@/data/galeria";

const atalhos = [
  {
    titulo: "Associação",
    texto: "Conheça a finalidade, estrutura e situação institucional da entidade.",
    href: "/associacao",
  },
  {
    titulo: "Campanhas",
    texto: "Acompanhe ações, promoções e iniciativas de arrecadação.",
    href: "/campanhas",
  },
  {
    titulo: "Eventos",
    texto: "Veja a agenda de reuniões, assembleias e atividades da turma.",
    href: "/eventos",
  },
  {
    titulo: "Documentos",
    texto: "Consulte estatuto, atas, regulamentos e documentos oficiais.",
    href: "/documentos",
  },
];

export default function Home() {
  const eventoDestaque = eventos[0];
  const albumDestaque = albuns[0];

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#1b2230]">
      <Header />

      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(circle_at_18%_10%,rgba(199,165,107,0.22),transparent_34%),radial-gradient(circle_at_85%_12%,rgba(19,35,58,0.13),transparent_32%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 md:py-24 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#a7834d]">
              Portal institucional da turma
            </p>

            <h1 className="font-display mt-5 max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.03em] text-[#13233a] md:text-7xl">
              Uma turma, uma associação, uma história rumo à formatura.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#596579]">
              O portal da Associação Direito 2028 reúne campanhas, eventos,
              documentos, transparência e memórias da turma de Direito em um só
              lugar.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/campanhas"
                className="rounded-full bg-[#13233a] px-8 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-1 hover:bg-[#0c1728]"
              >
                Ver campanhas
              </Link>

              <Link
                href="/associacao"
                className="rounded-full border border-[#d7c7b4] bg-white/80 px-8 py-4 text-center text-sm font-semibold text-[#13233a] transition hover:-translate-y-1 hover:border-[#13233a]"
              >
                Conhecer a Associação
              </Link>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="relative min-h-[500px] overflow-hidden rounded-[2.2rem] bg-[#13233a] shadow-2xl shadow-slate-900/15">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(19,35,58,0.04),rgba(19,35,58,0.68)),url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=85')] bg-cover bg-center" />

              <div className="absolute inset-0 flex items-end p-8 md:p-10">
                <div className="max-w-md rounded-[1.6rem] border border-white/20 bg-[#13233a]/55 p-7 text-white backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#e6c98d]">
                    Direito 2028
                  </p>

                  <h2 className="font-display mt-3 text-4xl font-semibold leading-tight">
                    Organização, transparência e memória.
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-white/75">
                    Uma identidade institucional para registrar a caminhada da
                    turma rumo à formatura.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {pilares.map((pilar) => (
                <div
                  key={pilar.titulo}
                  className="rounded-[1.5rem] border border-[#e5dacb] bg-white p-6 shadow-sm"
                >
                  <p className="font-display text-3xl font-semibold text-[#13233a]">
                    {pilar.titulo}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#667085]">
                    {pilar.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-4">
          {atalhos.map((atalho) => (
            <Link
              key={atalho.href}
              href={atalho.href}
              className="group rounded-[1.8rem] border border-[#e5dacb] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
            >
              <h2 className="font-display text-4xl font-semibold text-[#13233a]">
                {atalho.titulo}
              </h2>

              <p className="mt-4 leading-7 text-[#596579]">{atalho.texto}</p>

              <p className="mt-6 text-sm font-semibold text-[#a7834d] transition group-hover:text-[#13233a]">
                Acessar página
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="overflow-hidden rounded-[2.2rem] border border-[#e5dacb] bg-white shadow-xl shadow-slate-900/8">
          <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative min-h-[420px] bg-[#13233a]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(19,35,58,0.05), rgba(19,35,58,0.80)), url('${campanhaDestaque.imagem}')`,
                }}
              />

              <div className="absolute inset-0 flex items-end p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e6c98d]">
                    Campanha em destaque
                  </p>

                  <h2 className="font-display mt-3 text-5xl font-semibold leading-tight text-white">
                    Promoção oficial
                  </h2>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a7834d]">
                {campanhaDestaque.subtitulo}
              </p>

              <h2 className="font-display mt-4 text-5xl font-semibold leading-tight tracking-[-0.02em] text-[#13233a]">
                {campanhaDestaque.titulo}
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#596579]">
                {campanhaDestaque.descricao}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-[#f7f8fa] p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#a7834d]">
                    Status
                  </p>
                  <p className="mt-2 font-semibold text-[#13233a]">
                    {campanhaDestaque.status}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7f8fa] p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#a7834d]">
                    Finalidade
                  </p>
                  <p className="mt-2 font-semibold text-[#13233a]">
                    {campanhaDestaque.finalidade}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7f8fa] p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#a7834d]">
                    Ano
                  </p>
                  <p className="mt-2 font-semibold text-[#13233a]">
                    {campanhaDestaque.ano}
                  </p>
                </div>
              </div>

              <Link
                href="/campanhas"
                className="mt-8 inline-flex rounded-full bg-[#c7a56b] px-7 py-3.5 text-sm font-semibold text-[#13233a] transition hover:-translate-y-1 hover:bg-[#b8945f]"
              >
                Acessar campanhas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#edf0f5] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a7834d]">
                Destaques
              </p>

              <h2 className="font-display mt-4 text-5xl font-semibold leading-tight text-[#13233a] md:text-6xl">
                Eventos e memórias.
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-[#596579]">
              Acompanhe a agenda da turma e os registros que irão formar a
              memória da Associação.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Link
              href="/eventos"
              className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
            >
              <div className="relative h-80 overflow-hidden bg-[#13233a]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(19,35,58,0.05), rgba(19,35,58,0.62)), url('${eventoDestaque.imagem}')`,
                  }}
                />

                <div className="absolute inset-0 flex items-end p-7">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e6c98d]">
                      Próximo evento
                    </p>

                    <h3 className="font-display mt-3 text-4xl font-semibold leading-tight text-white">
                      {eventoDestaque.titulo}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-7">
                <p className="text-sm font-semibold text-[#a7834d]">
                  {eventoDestaque.data} · {eventoDestaque.local}
                </p>

                <p className="mt-4 leading-7 text-[#596579]">
                  {eventoDestaque.descricao}
                </p>
              </div>
            </Link>

            <Link
              href="/galeria"
              className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
            >
              <div className="relative h-80 overflow-hidden bg-[#13233a]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(19,35,58,0.05), rgba(19,35,58,0.62)), url('${albumDestaque.imagem}')`,
                  }}
                />

                <div className="absolute inset-0 flex items-end p-7">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e6c98d]">
                      Galeria
                    </p>

                    <h3 className="font-display mt-3 text-4xl font-semibold leading-tight text-white">
                      {albumDestaque.titulo}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-7">
                <p className="leading-7 text-[#596579]">
                  {albumDestaque.descricao}
                </p>

                <p className="mt-5 text-sm font-semibold text-[#a7834d]">
                  Ver galeria completa
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 rounded-[2.2rem] border border-[#e5dacb] bg-white p-8 shadow-sm md:p-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a7834d]">
              A Associação
            </p>

            <h2 className="font-display mt-4 text-5xl font-semibold leading-tight text-[#13233a] md:text-6xl">
              Seriedade institucional com identidade de turma.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[#596579]">
            <p>{associacao.descricao}</p>

            <p>{associacao.textoComplementar}</p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/associacao"
                className="rounded-full bg-[#13233a] px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#0c1728]"
              >
                Conhecer a Associação
              </Link>

              <Link
                href="/transparencia"
                className="rounded-full border border-[#d7c7b4] bg-white px-7 py-3.5 text-center text-sm font-semibold text-[#13233a] transition hover:-translate-y-1 hover:border-[#13233a]"
              >
                Ver transparência
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}