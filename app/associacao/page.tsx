import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InfoCard } from "@/components/InfoCard";
import { PageHero } from "@/components/PageHero";
import { StatusBanner } from "@/components/StatusBanner";

import { associacao, estruturaAssociacao, pilares } from "@/data/associacao";

export default function AssociacaoPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#1b2230]">
      <Header />

      <PageHero
        eyebrow="Institucional"
        title="Associação dos Acadêmicos de Direito 2028."
        description="Uma entidade em constituição para organizar, planejar e dar transparência às ações da turma de Direito rumo à formatura."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a7834d]">
              Sobre a Associação
            </p>

            <h2 className="font-display mt-4 text-5xl font-semibold leading-tight text-[#13233a] md:text-6xl">
              Seriedade, organização e identidade de turma.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[#596579]">
            <p>{associacao.descricao}</p>

            <p>{associacao.textoComplementar}</p>

            <p>
              A criação da Associação tem como objetivo dar personalidade
              jurídica à organização da turma, permitindo maior controle das
              receitas, despesas, documentos, campanhas, eventos e demais ações
              relacionadas à formatura.
            </p>

            <p>
              A proposta não é apenas arrecadar valores, mas construir uma
              estrutura responsável, transparente e participativa, em que os
              acadêmicos possam acompanhar as decisões e contribuir para a
              realização dos objetivos coletivos.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#edf0f5] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a7834d]">
              Finalidade
            </p>

            <h2 className="font-display mt-4 text-5xl font-semibold leading-tight text-[#13233a] md:text-6xl">
              Por que criar uma associação?
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#596579]">
              A Associação permite que a turma atue com mais segurança,
              organização e transparência, evitando movimentações informais e
              centralização indevida de responsabilidades.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pilares.map((pilar) => (
              <InfoCard
                key={pilar.titulo}
                title={pilar.titulo}
                description={pilar.texto}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 rounded-[2.2rem] border border-[#e5dacb] bg-white p-8 shadow-sm md:p-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a7834d]">
              Estrutura
            </p>

            <h2 className="font-display mt-4 text-5xl font-semibold leading-tight text-[#13233a] md:text-6xl">
              Base institucional da entidade.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#596579]">
              A estrutura da Associação será formada por documentos oficiais,
              órgãos internos de administração e mecanismos de controle.
            </p>
          </div>

          <div className="grid gap-4">
            {estruturaAssociacao.map((item) => (
              <div
                key={item.numero}
                className="flex gap-5 rounded-[1.4rem] bg-[#f7f8fa] p-6"
              >
                <p className="font-display text-5xl font-semibold leading-none text-[#c7a56b]">
                  {item.numero}
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-[#13233a]">
                    {item.titulo}
                  </h3>

                  <p className="mt-2 leading-7 text-[#667085]">
                    Elemento essencial para garantir funcionamento regular,
                    participação dos associados e controle dos atos praticados.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatusBanner
        eyebrow="Situação atual"
        title="Associação em fase de constituição."
        description="A entidade ainda está em processo de organização formal, com elaboração de estatuto, realização de assembleia, eleição dos órgãos internos e posterior registro dos atos constitutivos."
        statusLabel="Status institucional"
        status={associacao.status}
      />

      <Footer />
    </main>
  );
}