import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const beneficios = [
  {
    titulo: "Participação nas decisões",
    texto: "O associado participa das Assembleias Gerais, com direito a voz e voto, conforme as regras estatutárias.",
  },
  {
    titulo: "Acompanhamento da gestão",
    texto: "O associado pode acompanhar a organização administrativa e financeira da Associação.",
  },
  {
    titulo: "Acesso às prestações de contas",
    texto: "A Associação presta contas internamente aos associados, com acompanhamento da Diretoria e da Comissão Fiscal.",
  },
  {
    titulo: "Fortalecimento da formatura",
    texto: "Quanto maior a participação da turma, maior a capacidade de realizar campanhas, eventos e parcerias.",
  },
];

const compromissos = [
  "Aceitar o Estatuto Social e as deliberações da Assembleia Geral.",
  "Contribuir financeiramente nos valores e prazos aprovados.",
  "Colaborar com ações, eventos, campanhas e atividades de arrecadação.",
  "Participar das tarefas, campanhas e ações organizadas pela Associação.",
];

export default function AssociadosPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#1b2230]">
      <Header />

      <section className="relative overflow-hidden bg-[#13233a]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,35,58,0.95),rgba(19,35,58,0.80),rgba(19,35,58,0.42)),url('/images/hero-turma.jpg')] bg-cover bg-center" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(199,165,107,0.34),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(255,255,255,0.16),transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#e6c98d]">
              Associados
            </p>

            <h1 className="font-display mt-5 text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-white md:text-7xl">
              Faça parte agora e evite custos adicionais para ingresso posterior.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              A AAD Direito 2028 foi criada para organizar a formatura de forma
              coletiva, transparente e segura. Quanto antes o acadêmico se
              associa, mais cedo participa das decisões, das campanhas e do
              planejamento da turma.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contato"
                className="rounded-full bg-[#c7a56b] px-8 py-4 text-center text-sm font-semibold text-[#13233a] shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[#d8bb82]"
              >
                Quero me associar
              </Link>

              <Link
                href="/documentos"
                className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-center text-sm font-semibold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white hover:text-[#13233a]"
              >
                Ver Estatuto
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-6">
        <div className="grid gap-4 rounded-[2rem] border border-white/60 bg-white/95 p-4 shadow-2xl shadow-slate-900/15 backdrop-blur-xl md:grid-cols-3">
          <div className="rounded-[1.4rem] border border-[#e5dacb] bg-[#f7f8fa] p-6">
            <p className="font-display text-[2.7rem] font-semibold leading-none text-[#13233a]">
              24
            </p>

            <p className="mt-4 font-semibold text-[#13233a]">
              associados atualmente
            </p>

            <p className="mt-2 text-sm leading-6 text-[#667085]">
            Acadêmicos já vinculados à AAD Direito 2028, fortalecendo a
            organização coletiva da formatura.
            </p>
          </div>

          <div className="rounded-[1.4rem] border border-[#e5dacb] bg-[#f7f8fa] p-6">
            <p className="font-display text-[2.7rem] font-semibold leading-none text-[#13233a]">
              2028
            </p>

            <p className="mt-4 font-semibold text-[#13233a]">
              formatura planejada
            </p>

            <p className="mt-2 text-sm leading-6 text-[#667085]">
              Uma caminhada organizada desde agora para chegar melhor ao final.
            </p>
          </div>

          <div className="rounded-[1.4rem] border border-[#e5dacb] bg-[#f7f8fa] p-6">
            <p className="font-display text-[2.7rem] font-semibold leading-none text-[#13233a]">
              AAD
            </p>

            <p className="mt-4 font-semibold text-[#13233a]">
              organização coletiva
            </p>

            <p className="mt-2 text-sm leading-6 text-[#667085]">
              Associação criada para administrar recursos, campanhas e ações da
              turma.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#a7834d]">
              Por que se associar?
            </p>

            <h2 className="font-display mt-4 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-6xl">
              Ser associado é participar da construção da formatura.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-[#e5dacb] bg-white p-7 shadow-sm md:p-8">
            <p className="text-lg leading-8 text-[#596579]">
              Ao se associar, o acadêmico passa a participar oficialmente da
              organização da formatura, acompanhando decisões, campanhas,
              eventos, prestação de contas e demais iniciativas desenvolvidas
              pela AAD Direito 2028.
            </p>

            <div className="mt-6 rounded-[1.5rem] bg-[#f7f8fa] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#a7834d]">
                Atenção
              </p>

              <p className="mt-3 leading-7 text-[#667085]">
                O ingresso posterior poderá depender do cumprimento das
                condições financeiras, administrativas e demais obrigações
                aprovadas pela Assembleia Geral, inclusive valores proporcionais
                ou adicionais, conforme o Estatuto Social.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#edf0f5] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#a7834d]">
              Benefícios
            </p>

            <h2 className="font-display mt-4 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-6xl">
              O que o associado acompanha.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {beneficios.map((item) => (
              <article
                key={item.titulo}
                className="rounded-[2rem] border border-white/70 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
              >
                <p className="font-display text-3xl font-semibold leading-tight text-[#13233a]">
                  {item.titulo}
                </p>

                <p className="mt-4 text-sm leading-6 text-[#596579]">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#a7834d]">
              Compromisso coletivo
            </p>

            <h2 className="font-display mt-4 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-6xl">
              Participar também é assumir responsabilidades.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#596579]">
              A Associação só funciona bem quando todos colaboram com
              responsabilidade, transparência e compromisso com o objetivo
              comum.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#e5dacb] bg-white p-6 shadow-sm md:p-8">
            <div className="grid gap-3">
              {compromissos.map((item, index) => (
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
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="relative overflow-hidden rounded-[2.4rem] bg-[#c7a56b] p-8 shadow-2xl shadow-slate-900/10 md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(255,255,255,0.34),transparent_28%),radial-gradient(circle_at_15%_80%,rgba(19,35,58,0.20),transparent_30%)]" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#13233a]/70">
                Faça parte
              </p>

            <h2 className="font-display mt-4 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-6xl">
            A formatura será melhor planejada com a participação de todos.
            </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#13233a]/78">
                Procure a Diretoria, manifeste seu interesse e formalize sua
                filiação. Quanto antes você participar, melhor será o
                planejamento coletivo da turma.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/contato"
                className="rounded-full bg-[#13233a] px-8 py-4 text-center text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#0c1728]"
              >
                Quero me associar
              </Link>

              <Link
                href="/documentos"
                className="rounded-full border border-[#13233a]/25 bg-white/55 px-8 py-4 text-center text-sm font-semibold text-[#13233a] backdrop-blur transition hover:-translate-y-1 hover:bg-white"
              >
                Consultar documentos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}