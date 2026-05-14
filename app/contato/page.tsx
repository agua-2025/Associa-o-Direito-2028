import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#1b2230]">
      <Header />

      <section className="relative overflow-hidden bg-[#13233a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(199,165,107,0.34),transparent_30%),radial-gradient(circle_at_84%_10%,rgba(255,255,255,0.14),transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#e6c98d]">
              Contato
            </p>

            <h1 className="font-display mt-5 text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-white md:text-7xl">
              Fale com a AAD Direito 2028.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              Canal institucional da Associação dos Acadêmicos do Curso de
              Direito, Turma de Formatura 2028, com sede administrativa em
              Araputanga/MT.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-12 max-w-6xl px-6 pb-16">
        <div className="rounded-[2rem] border border-white/60 bg-white/95 p-6 shadow-2xl shadow-slate-900/15 backdrop-blur-xl md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a7834d]">
                Comunicação institucional
              </p>

              <h2 className="font-display mt-4 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-5xl">
                Acompanhe os comunicados e registros da turma.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#596579]">
                As informações institucionais, campanhas, registros e
                comunicados da turma poderão ser acompanhados pelos canais
                oficiais definidos pela Associação.
              </p>

              <p className="mt-4 text-base leading-7 text-[#667085]">
                Outros canais, como e-mail, WhatsApp ou formulário de contato,
                poderão ser divulgados posteriormente.
              </p>
            </div>

            <div className="rounded-[1.7rem] bg-[#f7f8fa] p-7">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#a7834d]">
                Instagram oficial
              </p>

              <p className="font-display mt-3 text-4xl font-semibold text-[#13233a]">
                @direito_fcarp24
              </p>

              <p className="mt-4 leading-7 text-[#667085]">
                Perfil oficial para acompanhar informações, comunicados e
                registros relacionados à turma.
              </p>

              <Link
                href="https://www.instagram.com/direito_fcarp24"
                target="_blank"
                className="mt-6 inline-flex rounded-full bg-[#13233a] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#0c1728]"
              >
                Acessar Instagram
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-[#e5dacb] bg-white p-6 shadow-sm">
          <p className="text-sm leading-7 text-[#667085]">
            A divulgação de canais de comunicação observará a finalidade
            institucional da Associação e a proteção de dados pessoais dos
            associados, dirigentes e colaboradores.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}