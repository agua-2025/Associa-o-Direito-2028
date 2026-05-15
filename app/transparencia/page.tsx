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
    texto: "Proteção de dados pessoais e informações internas.",
  },
  {
    titulo: "Prestação interna",
    texto: "Contas apresentadas aos associados, conforme o Estatuto Social.",
  },
];

const diretoria = [
  {
    nome: "Aline Novakc Locate",
    cargo: "Presidente",
    foto: "/images/diretoria/aline.jpg",
    posicao: "center center",
    zoom: "scale(1.15)",
    descricao:
      "Representa institucionalmente a Associação e coordena as atividades gerais da Diretoria.",
  },
  {
    nome: "Gleydson Eric de Lana Viana",
    cargo: "Vice-Presidente",
    foto: "/images/diretoria/gleydson.jpg",
    posicao: "center 30%",
    zoom: "scale(1.1)",
    descricao:
      "Auxilia a Presidência e atua no apoio à condução das atividades institucionais.",
  },
  {
    nome: "Kamilly Vitória Guedes Garcia",
    cargo: "Tesoureira",
    foto: "/images/diretoria/kamilly.jpg",
    posicao: "center 10%",
    zoom: "scale(1.01)",
    descricao:
      "Acompanha a organização financeira, os registros e a prestação de contas.",
  },
  {
    nome: "Claudia Braga Babilônia Faria dos Santos",
    cargo: "Secretária",
    foto: "/images/diretoria/claudia.jpg",
    posicao: "center 40%",
    zoom: "scale(1.05)",
    descricao:
      "Organiza atas, documentos internos e apoia a comunicação institucional.",
  },
];

const conselhoFiscal = [
  {
    nome: "Pedro Henrique Pereira Fatini",
    cargo: "Membro da Comissão Fiscal",
  },
  {
    nome: "Cassio Antonio dos Santos Carvalho",
    cargo: "Membro da Comissão Fiscal",
  },
  {
    nome: "Raquel Cristiny Feliciano",
    cargo: "Membro da Comissão Fiscal",
  },
];

export default function TransparenciaPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#1b2230]">
      <Header />

      <section className="relative overflow-hidden bg-[#13233a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(199,165,107,0.34),transparent_30%),radial-gradient(circle_at_84%_10%,rgba(255,255,255,0.14),transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#e6c98d]">
              Governança
            </p>

            <h1 className="font-display mt-5 text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-white md:text-7xl">
              Transparência com responsabilidade.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              A AAD Direito 2028 adota práticas de organização, controle e
              prestação de contas aos associados, preservando dados pessoais e
              informações internas.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-6">
        <div className="grid gap-4 rounded-[2rem] border border-white/60 bg-white/95 p-4 shadow-2xl shadow-slate-900/15 backdrop-blur-xl md:grid-cols-3">
          {pilares.map((item) => (
            <div
              key={item.titulo}
              className="rounded-[1.4rem] border border-[#e5dacb] bg-[#f7f8fa] p-6"
            >
              <p className="font-display text-3xl font-semibold text-[#13233a]">
                {item.titulo}
              </p>

              <p className="mt-4 text-sm leading-6 text-[#667085]">
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#a7834d]">
            Gestão institucional
          </p>

          <h2 className="font-display mt-4 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-6xl">
            Diretoria da Associação.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#596579]">
            A primeira Diretoria da AAD Direito 2028 foi eleita para conduzir a
            organização administrativa, financeira e documental da Associação.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {diretoria.map((membro) => (
            <article
              key={membro.nome}
              className="overflow-hidden rounded-[2rem] border border-[#e5dacb] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#13233a]">
                <img
                  src={membro.foto}
                  alt={`Foto de ${membro.nome}`}
                  className="h-full w-full object-cover transition duration-500"
                  style={{
                    objectPosition: membro.posicao,
                    transform: membro.zoom,
                  }}
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#13233a]/94 via-[#13233a]/70 to-transparent p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#e6c98d]">
                    {membro.cargo}
                  </p>

                  <h3 className="font-display mt-2 text-[1.55rem] font-semibold leading-[1.08] text-white">
                    {membro.nome}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-[0.92rem] leading-6 tracking-[-0.01em] text-[#596579]">
                  {membro.descricao}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#edf0f5] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#a7834d]">
                Fiscalização interna
              </p>

              <h2 className="font-display mt-4 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-6xl">
                Comissão Fiscal.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#596579]">
                A Comissão Fiscal acompanha a gestão financeira e contribui para
                a organização da prestação de contas aos associados.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {conselhoFiscal.map((membro) => (
                <article
                  key={membro.nome}
                  className="rounded-[1.8rem] border border-white/70 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#a7834d]">
                    {membro.cargo}
                  </p>

                  <h3 className="font-display mt-4 text-3xl font-semibold leading-tight text-[#13233a]">
                    {membro.nome}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-[#e5dacb] bg-white p-7 shadow-sm md:p-9">
          <div className="grid gap-6 lg:grid-cols-[0.55fr_1.45fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#a7834d]">
                Prestação de contas
              </p>

              <h2 className="font-display mt-3 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-5xl">
                Informação aos associados.
              </h2>
            </div>

            <p className="text-base leading-8 text-[#596579] md:text-lg">
              A prestação de contas será realizada aos associados, com
              acompanhamento da Diretoria, da Comissão Fiscal e da Assembleia
              Geral. Documentos financeiros, comprovantes e informações de uso
              interno permanecem sob guarda da Associação.
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
                Governança
              </p>

              <h2 className="font-display mt-4 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-6xl">
                Organização, controle e participação.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#13233a]/78">
                A Associação atua com base nas deliberações da Assembleia Geral,
                na atuação da Diretoria e no acompanhamento da Comissão Fiscal.
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