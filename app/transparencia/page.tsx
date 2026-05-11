import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { StatusBanner } from "@/components/StatusBanner";

export default function TransparenciaPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#1b2230]">
      <Header />

      <PageHero
        eyebrow="Transparência"
        title="Controle, prestação de contas e confiança."
        description="Área destinada à divulgação organizada de receitas, despesas, relatórios, documentos financeiros e informações relacionadas à gestão dos recursos da Associação Direito 2028."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[1.8rem] border border-[#e5dacb] bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a7834d]">
              Receitas
            </p>

            <p className="font-display mt-4 text-5xl font-semibold text-[#13233a]">
              R$ 0,00
            </p>

            <p className="mt-4 leading-7 text-[#667085]">
              Total de valores arrecadados em campanhas, contribuições, eventos
              e demais ações oficiais.
            </p>
          </div>

          <div className="rounded-[1.8rem] border border-[#e5dacb] bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a7834d]">
              Despesas
            </p>

            <p className="font-display mt-4 text-5xl font-semibold text-[#13233a]">
              R$ 0,00
            </p>

            <p className="mt-4 leading-7 text-[#667085]">
              Total de pagamentos, custos operacionais, despesas de campanhas e
              gastos vinculados aos objetivos da Associação.
            </p>
          </div>

          <div className="rounded-[1.8rem] border border-[#e5dacb] bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a7834d]">
              Saldo
            </p>

            <p className="font-display mt-4 text-5xl font-semibold text-[#13233a]">
              R$ 0,00
            </p>

            <p className="mt-4 leading-7 text-[#667085]">
              Saldo disponível após a apuração das receitas e despesas
              registradas oficialmente.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#edf0f5] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 rounded-[2.2rem] border border-white/70 bg-white p-8 shadow-sm md:p-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a7834d]">
                Prestação de contas
              </p>

              <h2 className="font-display mt-4 text-5xl font-semibold leading-tight text-[#13233a] md:text-6xl">
                Uma gestão acompanhada pelos associados.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-[#596579]">
              <p>
                A transparência será um dos pilares da Associação. As receitas,
                despesas e movimentações financeiras deverão ser registradas,
                comprovadas e organizadas para acompanhamento dos associados.
              </p>

              <p>
                A movimentação financeira deverá ocorrer, preferencialmente, por
                meio eletrônico, em conta bancária própria vinculada ao CNPJ da
                Associação, permitindo rastreabilidade e controle.
              </p>

              <p>
                Relatórios, comprovantes, atas de aprovação e documentos
                financeiros poderão ser disponibilizados nesta área conforme a
                formalização da Associação e a realização das campanhas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a7834d]">
            Indicadores
          </p>

          <h2 className="font-display mt-4 text-5xl font-semibold leading-tight text-[#13233a] md:text-6xl">
            O que poderá ser acompanhado.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#596579]">
            Esta área poderá evoluir para apresentar informações detalhadas
            sobre campanhas, contribuições, eventos e despesas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {[
            "Receitas arrecadadas",
            "Despesas realizadas",
            "Saldo disponível",
            "Relatórios mensais",
            "Campanhas ativas",
            "Eventos realizados",
            "Documentos financeiros",
            "Prestação final",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.6rem] border border-[#e5dacb] bg-white p-7 shadow-sm"
            >
              <p className="font-display text-3xl font-semibold text-[#13233a]">
                {item}
              </p>

              <p className="mt-4 leading-7 text-[#667085]">
                Informação destinada ao acompanhamento organizado da gestão da
                Associação.
              </p>
            </div>
          ))}
        </div>
      </section>

      <StatusBanner
        eyebrow="Em implantação"
        title="Os dados reais serão inseridos após o início das movimentações."
        description="Enquanto a Associação estiver em fase de constituição, os dados financeiros aparecerão zerados ou em implantação. Após a abertura da conta e início das campanhas, esta área poderá ser atualizada periodicamente."
        statusLabel="Status da transparência"
        status="Em implantação"
        buttonLabel="Ver documentos"
        buttonHref="/documentos"
      />

      <Footer />
    </main>
  );
}