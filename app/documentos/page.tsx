import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const documentos = [
  {
    titulo: "Estatuto Social",
    texto: "Documento que estabelece a finalidade, a estrutura, os direitos, os deveres e as regras gerais de funcionamento da Associação.",
    link: "/documentos/estatuto-social-aad-direito-2028-versao-publica.pdf",
    botao: "Consultar Estatuto",
  },
  {
    titulo: "Ata de Constituição",
    texto: "Registro da Assembleia Geral de Constituição da AAD Direito 2028, disponibilizado em versão pública.",
    link: "/documentos/ata-constituicao-aad-direito-2028-versao-publica.pdf",
    botao: "Consultar Ata",
  },
  {
    titulo: "Ata de Eleição",
    texto: "A eleição da primeira Diretoria e da Comissão Fiscal integra a Ata da Assembleia Geral de Constituição.",
    link: "/documentos/ata-constituicao-aad-direito-2028-versao-publica.pdf",
    botao: "Consultar Ata",
  },
  {
    titulo: "Documentos Internos",
    texto: "Listas de presença, fichas de filiação, comprovantes e demais documentos administrativos permanecem sob guarda interna da Associação.",
  },
];

export default function DocumentosPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#1b2230]">
      <Header />

      <section className="relative overflow-hidden bg-[#13233a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(199,165,107,0.34),transparent_30%),radial-gradient(circle_at_84%_10%,rgba(255,255,255,0.14),transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#e6c98d]">
              Documentos
            </p>

            <h1 className="font-display mt-5 text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-white md:text-7xl">
              Registros institucionais da Associação.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              Consulte os documentos públicos da AAD Direito 2028, preparados
              para divulgação institucional e proteção de dados pessoais.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-12 max-w-7xl px-6">
        <div className="grid gap-4 rounded-[2rem] border border-white/60 bg-white/95 p-4 shadow-2xl shadow-slate-900/15 backdrop-blur-xl md:grid-cols-2 lg:grid-cols-4">
          {documentos.map((item) => (
            <article
              key={item.titulo}
              className="flex min-h-[285px] flex-col rounded-[1.4rem] border border-[#e5dacb] bg-[#f7f8fa] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-900/10"
            >
              <div>
                <p className="font-display text-3xl font-semibold leading-tight text-[#13233a]">
                  {item.titulo}
                </p>

                <p className="mt-5 text-sm leading-6 text-[#667085]">
                  {item.texto}
                </p>
              </div>

              {"link" in item && item.link && (
                <Link
                  href={item.link}
                  target="_blank"
                  className="mt-auto inline-flex w-fit rounded-full bg-[#13233a] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:-translate-y-1 hover:bg-[#0c1728]"
                >
                  {item.botao}
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="rounded-[2rem] border border-[#e5dacb] bg-white p-7 shadow-sm md:p-9">
          <div className="grid gap-6 lg:grid-cols-[0.55fr_1.45fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#a7834d]">
                Nota explicativa
              </p>

              <h2 className="font-display mt-3 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-5xl">
                Consulta pública.
              </h2>
            </div>

            <p className="text-base leading-8 text-[#596579] md:text-lg">
              Os documentos disponibilizados neste portal possuem finalidade
              institucional. As versões públicas não incluem dados pessoais de
              identificação, endereços residenciais, assinaturas, listas de
              presença, fichas de filiação, comprovantes ou informações internas
              de uso restrito da Associação.
            </p>
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
                Transparência com responsabilidade.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#13233a]/78">
                A Associação mantém seus documentos administrativos organizados,
                disponibilizando publicamente apenas o que for adequado à
                finalidade institucional e à proteção de dados pessoais.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/transparencia"
                className="rounded-full bg-[#13233a] px-8 py-4 text-center text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#0c1728]"
              >
                Ver governança
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