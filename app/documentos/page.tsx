import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const documentos = [
  {
    titulo: "Estatuto Social",
    status: "Em aprovação",
    texto: "Documento que define a finalidade, estrutura, direitos, deveres e regras gerais da Associação.",
  },
  {
    titulo: "Ata de Constituição",
    status: "Pendente",
    texto: "Registro formal da Assembleia Geral de Constituição da AAD Direito 2028.",
  },
  {
    titulo: "Ata de Eleição",
    status: "Pendente",
    texto: "Documento de eleição e posse da Diretoria e da Comissão Fiscal.",
  },
  {
    titulo: "Ficha de Filiação",
    status: "Em elaboração",
    texto: "Documento individual para ingresso e cadastro dos associados.",
  },
];

const registros = [
  "Estatuto Social da Associação.",
  "Atas de assembleias e reuniões.",
  "Lista de presença dos associados.",
  "Documentos de filiação e desligamento.",
  "Regulamentos de campanhas e eventos.",
  "Registros administrativos e institucionais.",
];

export default function DocumentosPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#1b2230]">
      <Header />

      <section className="relative overflow-hidden bg-[#13233a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(199,165,107,0.34),transparent_30%),radial-gradient(circle_at_84%_10%,rgba(255,255,255,0.14),transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#e6c98d]">
              Documentos
            </p>

            <h1 className="font-display mt-6 text-6xl font-semibold leading-[0.98] tracking-[-0.04em] text-white md:text-8xl">
              Registros que dão segurança à Associação.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/75">
              A organização documental é essencial para formalizar decisões,
              registrar atos institucionais e preservar a história da AAD
              Direito 2028.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-14 max-w-7xl px-6">
        <div className="grid gap-4 rounded-[2rem] border border-white/60 bg-white/95 p-4 shadow-2xl shadow-slate-900/15 backdrop-blur-xl md:grid-cols-4">
          {documentos.map((item) => (
            <div
              key={item.titulo}
              className="rounded-[1.4rem] border border-[#e5dacb] bg-[#f7f8fa] p-6"
            >
              <p className="font-display text-3xl font-semibold text-[#13233a]">
                {item.titulo}
              </p>

              <p className="mt-4 inline-flex rounded-full bg-[#13233a] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                {item.status}
              </p>

              <p className="mt-4 text-sm leading-6 text-[#667085]">
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#a7834d]">
              Estatuto Social
            </p>

            <h2 className="font-display mt-5 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-7xl">
              A base formal da AAD Direito 2028.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-[#e5dacb] bg-white p-8 shadow-sm md:p-10">
            <p className="text-xl leading-9 text-[#596579]">
              O Estatuto Social estabelece a denominação, natureza jurídica,
              sede, finalidade, direitos e deveres dos associados, estrutura da
              Diretoria, Comissão Fiscal, regras de gestão financeira,
              prestação de contas e dissolução da Associação.
            </p>

            <div className="mt-8 rounded-[1.5rem] bg-[#f7f8fa] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#a7834d]">
                Situação
              </p>

              <p className="font-display mt-3 text-4xl font-semibold text-[#13233a]">
                Aguardando aprovação e registro
              </p>

              <p className="mt-3 leading-7 text-[#667085]">
                Após aprovado e assinado, o Estatuto poderá ser disponibilizado
                neste espaço em formato PDF.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#edf0f5] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#a7834d]">
              Arquivo institucional
            </p>

            <h2 className="font-display mt-5 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-7xl">
              Documentos que serão organizados.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {registros.map((item, index) => (
              <div
                key={item}
                className="flex gap-5 rounded-[1.8rem] border border-white/70 bg-white p-7 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#13233a] text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="text-lg leading-8 text-[#596579]">{item}</p>
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
                Organização
              </p>

              <h2 className="font-display mt-5 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-7xl">
                Documentos claros fortalecem a confiança.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#13233a]/78">
                A AAD Direito 2028 manterá seus registros organizados para
                garantir segurança, memória institucional e cumprimento das
                deliberações dos associados.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/associacao"
                className="rounded-full bg-[#13233a] px-8 py-4 text-center text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#0c1728]"
              >
                Conhecer a Associação
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