import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { StatusBanner } from "@/components/StatusBanner";

import { documentos } from "@/data/documentos";

export default function DocumentosPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#1b2230]">
      <Header />

      <PageHero
        eyebrow="Documentos oficiais"
        title="Organização documental da Associação."
        description="Espaço destinado à publicação de estatuto, atas, regulamentos, comunicados, relatórios e demais documentos relacionados à organização da Associação Direito 2028."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a7834d]">
              Arquivos
            </p>

            <h2 className="font-display mt-4 text-5xl font-semibold leading-tight text-[#13233a] md:text-6xl">
              Documentos da entidade.
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-[#596579]">
            Após a formalização da Associação, esta área poderá reunir os
            documentos oficiais para consulta dos associados e interessados.
          </p>
        </div>

        <div className="grid gap-6">
          {documentos.map((documento) => (
            <article
              key={documento.titulo}
              className="grid gap-6 rounded-[1.8rem] border border-[#e5dacb] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 md:grid-cols-[1fr_auto]"
            >
              <div>
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-[#f7f8fa] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a7834d]">
                    {documento.categoria}
                  </span>

                  <span className="rounded-full bg-[#13233a] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                    {documento.status}
                  </span>
                </div>

                <h3 className="font-display mt-5 text-4xl font-semibold leading-tight text-[#13233a]">
                  {documento.titulo}
                </h3>

                <p className="mt-4 max-w-3xl leading-7 text-[#596579]">
                  {documento.descricao}
                </p>
              </div>

              <div className="flex items-center md:justify-end">
                <a
                  href={documento.link}
                  className="rounded-full border border-[#d7c7b4] bg-white px-6 py-3 text-sm font-semibold text-[#13233a] transition hover:-translate-y-1 hover:border-[#13233a]"
                >
                  Acessar documento
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#edf0f5] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 rounded-[2.2rem] border border-white/70 bg-white p-8 shadow-sm md:p-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a7834d]">
                Controle documental
              </p>

              <h2 className="font-display mt-4 text-5xl font-semibold leading-tight text-[#13233a] md:text-6xl">
                Documentos organizados, acessíveis e atualizados.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-[#596579]">
              <p>
                A Associação deverá manter seus principais documentos de forma
                organizada, especialmente aqueles relacionados à constituição,
                deliberações internas, campanhas, regulamentos e prestação de
                contas.
              </p>

              <p>
                A publicação dos documentos contribui para a transparência e
                facilita o acompanhamento das ações pelos associados.
              </p>

              <p>
                Enquanto a Associação estiver em fase de constituição, alguns
                documentos poderão aparecer com status de elaboração, pendente ou
                em implantação.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a7834d]">
            Categorias
          </p>

          <h2 className="font-display mt-4 text-5xl font-semibold leading-tight text-[#13233a] md:text-6xl">
            Tipos de documentos.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#596579]">
            A área poderá ser ampliada conforme surgirem novos atos, campanhas e
            prestações de contas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {[
            "Estatuto",
            "Atas",
            "Regulamentos",
            "Comunicados",
            "Relatórios",
            "Prestação de contas",
            "Campanhas",
            "Outros documentos",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.6rem] border border-[#e5dacb] bg-white p-7 shadow-sm"
            >
              <p className="font-display text-3xl font-semibold text-[#13233a]">
                {item}
              </p>

              <p className="mt-4 leading-7 text-[#667085]">
                Categoria destinada à organização dos arquivos institucionais da
                Associação.
              </p>
            </div>
          ))}
        </div>
      </section>

      <StatusBanner
        eyebrow="Publicação futura"
        title="Os arquivos oficiais serão inseridos após a formalização."
        description="Depois do registro da Associação e da aprovação dos atos constitutivos, esta página poderá disponibilizar os documentos oficiais para consulta."
        statusLabel="Status da área"
        status="Em implantação"
        buttonLabel="Ver transparência"
        buttonHref="/transparencia"
      />

      <Footer />
    </main>
  );
}