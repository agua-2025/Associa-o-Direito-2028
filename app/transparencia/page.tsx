import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { StatusBanner } from "@/components/StatusBanner";

const principios = [
  {
    titulo: "Organização",
    texto: "A Associação manterá registros administrativos, financeiros e documentais relacionados às suas atividades, campanhas, eventos e deliberações.",
  },
  {
    titulo: "Controle interno",
    texto: "A movimentação financeira deverá observar o Estatuto Social, as deliberações da Assembleia Geral e os procedimentos definidos pela Diretoria.",
  },
  {
    titulo: "Prestação aos associados",
    texto: "As prestações de contas serão realizadas perante os associados, em assembleia, reunião própria ou outro meio interno definido pela Associação.",
  },
  {
    titulo: "Proteção de dados",
    texto: "Informações pessoais, documentos financeiros detalhados e dados sensíveis não serão disponibilizados publicamente neste portal.",
  },
];

const procedimentos = [
  "Utilização de conta bancária própria vinculada ao CNPJ da Associação.",
  "Preferência por movimentações eletrônicas, com registro e rastreabilidade.",
  "Guarda de comprovantes, documentos administrativos e registros financeiros.",
  "Análise das prestações de contas pela Comissão Fiscal, quando aplicável.",
  "Apresentação das informações financeiras aos associados, conforme previsto no Estatuto Social.",
];

export default function TransparenciaPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#1b2230]">
      <Header />

      <PageHero
        eyebrow="Governança"
        title="Transparência com responsabilidade."
        description="A AAD Direito 2028 adota práticas de organização, controle e prestação de contas aos associados, preservando a segurança das informações, a proteção de dados pessoais e a finalidade institucional da Associação."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a7834d]">
              Como funciona
            </p>

            <h2 className="font-display mt-4 text-5xl font-semibold leading-tight text-[#13233a] md:text-6xl">
              Prestação de contas aos associados, não exposição pública.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#596579]">
              A transparência da Associação será exercida de forma responsável,
              com informações prestadas aos associados nos termos do Estatuto
              Social, sem divulgação pública de saldos, extratos, dados pessoais,
              comprovantes individuais ou detalhes financeiros sensíveis.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#e5dacb] bg-white p-8 shadow-sm md:p-10">
            <p className="font-display text-4xl font-semibold text-[#13233a]">
              Compromisso institucional
            </p>

            <div className="mt-6 space-y-5 text-lg leading-8 text-[#596579]">
              <p>
                A Associação manterá controle das receitas, despesas,
                obrigações, campanhas, eventos e demais atos relacionados à
                organização da formatura.
              </p>

              <p>
                As informações financeiras detalhadas serão tratadas em ambiente
                interno, perante os associados, a Diretoria, a Comissão Fiscal e
                a Assembleia Geral, conforme as regras estatutárias.
              </p>

              <p>
                Por segurança, documentos financeiros detalhados não serão
                publicados de forma aberta neste portal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#edf0f5] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a7834d]">
              Diretrizes
            </p>

            <h2 className="font-display mt-4 text-5xl font-semibold leading-tight text-[#13233a] md:text-6xl">
              Controle, segurança e responsabilidade.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#596579]">
              A página de transparência apresenta os princípios de governança da
              Associação, sem substituir os canais internos de prestação de
              contas aos associados.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {principios.map((item) => (
              <div
                key={item.titulo}
                className="rounded-[1.8rem] border border-white/70 bg-white p-8 shadow-sm"
              >
                <p className="font-display text-4xl font-semibold text-[#13233a]">
                  {item.titulo}
                </p>

                <p className="mt-4 leading-7 text-[#596579]">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 rounded-[2.2rem] border border-[#e5dacb] bg-white p-8 shadow-sm md:p-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a7834d]">
              Procedimentos
            </p>

            <h2 className="font-display mt-4 text-5xl font-semibold leading-tight text-[#13233a] md:text-6xl">
              Como a Associação pretende manter o controle.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#596579]">
              As práticas de controle serão aplicadas conforme o Estatuto Social
              e as deliberações da Assembleia Geral.
            </p>
          </div>

          <div className="space-y-4">
            {procedimentos.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-[1.4rem] border border-[#e5dacb] bg-[#f7f8fa] p-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#13233a] text-sm font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="leading-7 text-[#596579]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatusBanner
        eyebrow="Acesso interno"
        title="Prestação de contas será tratada com os associados."
        description="Relatórios, comprovantes, saldos, despesas e demais informações financeiras detalhadas serão apresentados por meio interno adequado, respeitando o Estatuto Social, a proteção de dados pessoais e a segurança da Associação."
        statusLabel="Página pública"
        status="Governança"
        buttonLabel="Ver documentos"
        buttonHref="/documentos"
      />

      <Footer />
    </main>
  );
}