import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const pilares = [
  {
    titulo: "Controle",
    texto: "Registros administrativos e financeiros organizados.",
  },
  {
    titulo: "Segurança",
    texto: "Informações sensíveis protegidas.",
  },
  {
    titulo: "Prestação interna",
    texto: "Contas apresentadas aos associados.",
  },
];

const praticas = [
  "Conta bancária própria vinculada ao CNPJ.",
  "Movimentação preferencialmente eletrônica.",
  "Guarda de comprovantes e documentos.",
  "Acompanhamento pela Diretoria e Comissão Fiscal.",
  "Prestação de contas aos associados.",
];

export default function TransparenciaPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#1b2230]">
      <Header />

      <section className="relative overflow-hidden bg-[#13233a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(199,165,107,0.34),transparent_30%),radial-gradient(circle_at_84%_10%,rgba(255,255,255,0.14),transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#e6c98d]">
              Governança
            </p>

            <h1 className="font-display mt-6 text-6xl font-semibold leading-[0.98] tracking-[-0.04em] text-white md:text-8xl">
              Transparência com responsabilidade.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/75">
              A AAD Direito 2028 adotará práticas de organização, controle e
              prestação de contas aos associados, sem exposição pública de dados
              financeiros sensíveis.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-12 max-w-7xl px-6">
        <div className="grid gap-4 rounded-[2rem] border border-white/60 bg-white/95 p-4 shadow-2xl shadow-slate-900/15 backdrop-blur-xl md:grid-cols-3">
          {pilares.map((item) => (
            <div
              key={item.titulo}
              className="rounded-[1.4rem] border border-[#e5dacb] bg-[#f7f8fa] p-6"
            >
              <p className="font-display text-4xl font-semibold text-[#13233a]">
                {item.titulo}
              </p>

              <p className="mt-3 text-sm leading-6 text-[#667085]">
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#a7834d]">
              Transparência institucional
            </p>

            <h2 className="font-display mt-5 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-7xl">
              Prestação de contas aos associados.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-[#e5dacb] bg-white p-8 shadow-sm md:p-10">
            <p className="text-xl leading-9 text-[#596579]">
              A transparência da Associação será exercida de forma responsável,
              com informações prestadas aos associados nos termos do Estatuto
              Social, sem divulgação pública de saldos, extratos, comprovantes
              individuais, dados pessoais ou detalhes financeiros sensíveis.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#edf0f5] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#a7834d]">
                Práticas de controle
              </p>

              <h2 className="font-display mt-5 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-6xl">
                Organização sem exposição desnecessária.
              </h2>
            </div>

            <div className="rounded-[2rem] border border-white/70 bg-white p-6 shadow-sm md:p-8">
              <div className="grid gap-3">
                {praticas.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl bg-[#f7f8fa] px-5 py-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#13233a] text-xs font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <p className="text-base leading-7 text-[#596579]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="relative overflow-hidden rounded-[2.4rem] bg-[#c7a56b] p-8 shadow-2xl shadow-slate-900/10 md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(255,255,255,0.34),transparent_28%),radial-gradient(circle_at_15%_80%,rgba(19,35,58,0.20),transparent_30%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#13233a]/70">
                Segurança
              </p>

              <h2 className="font-display mt-5 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-6xl">
                Informação certa, no lugar certo.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#13233a]/78">
                Documentos financeiros detalhados serão tratados por meio
                interno adequado, respeitando o Estatuto Social, a proteção de
                dados pessoais e a segurança da Associação.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/documentos"
                className="rounded-full bg-[#13233a] px-8 py-4 text-center text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#0c1728]"
              >
                Ver documentos
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