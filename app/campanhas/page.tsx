import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import { campanhaDestaque, campanhas } from "@/data/campanhas";

export default function CampanhasPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#1b2230]">
      <Header />

      <section className="relative overflow-hidden border-b border-[#e5dacb]">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_18%_10%,rgba(199,165,107,0.20),transparent_34%),radial-gradient(circle_at_85%_12%,rgba(19,35,58,0.12),transparent_32%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#a7834d]">
              Campanhas e promoções
            </p>

            <h1 className="font-display mt-5 text-5xl font-semibold leading-[1.04] tracking-[-0.03em] text-[#13233a] md:text-7xl">
              Ações para construir a nossa formatura.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#596579]">
              Espaço destinado à divulgação das campanhas, promoções, ações
              entre amigos, eventos de arrecadação e demais iniciativas
              organizadas pela Associação Direito 2028.
            </p>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[2.2rem] bg-[#13233a] shadow-2xl shadow-slate-900/15">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(19,35,58,0.04), rgba(19,35,58,0.72)), url('${campanhaDestaque.imagem}')`,
              }}
            />

            <div className="absolute inset-0 flex items-end p-8 md:p-10">
              <div className="max-w-md rounded-[1.6rem] border border-white/20 bg-[#13233a]/55 p-7 text-white backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#e6c98d]">
                  Campanha em destaque
                </p>

                <h2 className="font-display mt-3 text-4xl font-semibold leading-tight">
                  {campanhaDestaque.titulo}
                </h2>

                <p className="mt-3 text-sm leading-6 text-white/75">
                  {campanhaDestaque.status}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-[2.2rem] border border-[#e5dacb] bg-white shadow-xl shadow-slate-900/8">
          <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative min-h-[420px] bg-[#13233a]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(19,35,58,0.05), rgba(19,35,58,0.80)), url('${campanhaDestaque.imagem}')`,
                }}
              />

              <div className="absolute inset-0 flex items-end p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e6c98d]">
                    Banner oficial
                  </p>

                  <h2 className="font-display mt-3 text-5xl font-semibold leading-tight text-white">
                    Promoção em destaque
                  </h2>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a7834d]">
                {campanhaDestaque.subtitulo}
              </p>

              <h2 className="font-display mt-4 text-5xl font-semibold leading-tight tracking-[-0.02em] text-[#13233a]">
                {campanhaDestaque.titulo}
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#596579]">
                {campanhaDestaque.descricao}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-[#f7f8fa] p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#a7834d]">
                    Status
                  </p>
                  <p className="mt-2 font-semibold text-[#13233a]">
                    {campanhaDestaque.status}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7f8fa] p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#a7834d]">
                    Finalidade
                  </p>
                  <p className="mt-2 font-semibold text-[#13233a]">
                    {campanhaDestaque.finalidade}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7f8fa] p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#a7834d]">
                    Ano
                  </p>
                  <p className="mt-2 font-semibold text-[#13233a]">
                    {campanhaDestaque.ano}
                  </p>
                </div>
              </div>

              <a
                href="/contato"
                className="mt-8 inline-flex rounded-full bg-[#c7a56b] px-7 py-3.5 text-sm font-semibold text-[#13233a] transition hover:-translate-y-1 hover:bg-[#b8945f]"
              >
                {campanhaDestaque.botao}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#edf0f5] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a7834d]">
              Iniciativas
            </p>

            <h2 className="font-display mt-4 text-5xl font-semibold leading-tight text-[#13233a] md:text-6xl">
              Campanhas planejadas
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#596579]">
              Além da campanha em destaque, a Associação poderá organizar outras
              ações para apoiar a arrecadação e fortalecer a participação da
              turma.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {campanhas.map((campanha) => (
              <article
                key={campanha.titulo}
                className="rounded-[1.8rem] border border-white/70 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a7834d]">
                  {campanha.status}
                </p>

                <h3 className="font-display mt-4 text-4xl font-semibold leading-tight text-[#13233a]">
                  {campanha.titulo}
                </h3>

                <p className="mt-4 leading-7 text-[#596579]">
                  {campanha.descricao}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 rounded-[2.2rem] border border-[#e5dacb] bg-white p-8 shadow-sm md:p-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a7834d]">
              Regras e responsabilidade
            </p>

            <h2 className="font-display mt-4 text-5xl font-semibold leading-tight text-[#13233a] md:text-6xl">
              Toda campanha precisa ter controle e transparência.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[#596579]">
            <p>
              As campanhas da Associação deverão ser organizadas com definição
              clara de finalidade, período de realização, regras de participação,
              responsáveis, forma de arrecadação e prestação de contas.
            </p>

            <p>
              Sempre que houver regulamento específico, documento de controle,
              relatório financeiro ou prestação de contas, esses materiais
              poderão ser disponibilizados na área de documentos e transparência
              do site.
            </p>

            <p>
              A finalidade é permitir que associados, apoiadores e participantes
              acompanhem as ações realizadas com segurança, clareza e confiança.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="overflow-hidden rounded-[2.2rem] bg-[#13233a] text-white shadow-2xl shadow-slate-900/15">
          <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e6c98d]">
                Participação
              </p>

              <h2 className="font-display mt-4 text-5xl font-semibold leading-tight md:text-6xl">
                Apoie as ações da turma.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                Empresas, profissionais, familiares, amigos e demais apoiadores
                poderão contribuir com campanhas, eventos e ações oficiais da
                Associação Direito 2028.
              </p>
            </div>

            <div className="rounded-[1.7rem] border border-white/10 bg-white/10 p-8">
              <p className="text-sm text-white/55">Canal de apoio</p>

              <p className="font-display mt-3 text-5xl font-semibold">
                Em implantação
              </p>

              <p className="mt-5 leading-7 text-white/75">
                Após a formalização da Associação, este espaço poderá receber
                links, contatos, chaves de pagamento, regulamentos e orientações
                oficiais.
              </p>

              <a
                href="/contato"
                className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#13233a] transition hover:-translate-y-1"
              >
                Falar com a Associação
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}