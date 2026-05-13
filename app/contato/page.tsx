import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#1b2230]">
      <Header />

      <section className="relative overflow-hidden bg-[#13233a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(199,165,107,0.34),transparent_30%),radial-gradient(circle_at_84%_10%,rgba(255,255,255,0.14),transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#e6c98d]">
              Contato
            </p>

            <h1 className="font-display mt-6 text-6xl font-semibold leading-[0.98] tracking-[-0.04em] text-white md:text-8xl">
              Fale com a AAD Direito 2028.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/75">
            Canal institucional da Associação dos Acadêmicos do Curso de
            Direito, Turma de Formatura 2028, com sede administrativa em
            Araputanga/MT.
          </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-14 max-w-5xl px-6">
        <div className="rounded-[2rem] border border-white/60 bg-white/95 p-6 shadow-2xl shadow-slate-900/15 backdrop-blur-xl md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a7834d]">
                Comunicação
              </p>

              <h2 className="font-display mt-4 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-6xl">
                Os canais oficiais serão divulgados em breve.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#596579]">
                A Associação definirá seus meios oficiais de contato para
                comunicação com associados, apoiadores e parceiros.
              </p>
            </div>

            <div className="rounded-[1.7rem] bg-[#f7f8fa] p-7">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#a7834d]">
                Status
              </p>

              <p className="font-display mt-3 text-4xl font-semibold text-[#13233a]">
                Em organização
              </p>

              <p className="mt-4 leading-7 text-[#667085]">
                Contato oficial, e-mail, WhatsApp ou redes sociais serão
                informados após definição pela Associação.
              </p>
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
                AAD Direito 2028
              </p>

              <h2 className="font-display mt-5 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-6xl">
                Organização, união e memória rumo à formatura.
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/campanhas"
                className="rounded-full bg-[#13233a] px-8 py-4 text-center text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#0c1728]"
              >
                Ver campanhas
              </Link>

              <Link
                href="/associacao"
                className="rounded-full border border-[#13233a]/25 bg-white/55 px-8 py-4 text-center text-sm font-semibold text-[#13233a] backdrop-blur transition hover:-translate-y-1 hover:bg-white"
              >
                Conhecer a Associação
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}