import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { StatusBanner } from "@/components/StatusBanner";

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#1b2230]">
      <Header />

      <PageHero
        eyebrow="Contato"
        title="Canais oficiais da Associação."
        description="Espaço destinado à comunicação oficial com associados, apoiadores, parceiros, acadêmicos e demais interessados nas ações da Associação Direito 2028."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[1.8rem] border border-[#e5dacb] bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a7834d]">
              WhatsApp
            </p>

            <h2 className="font-display mt-4 text-4xl font-semibold text-[#13233a]">
              Em implantação
            </h2>

            <p className="mt-4 leading-7 text-[#667085]">
              Canal que poderá ser utilizado para informações rápidas,
              campanhas, eventos e comunicação com interessados.
            </p>
          </div>

          <div className="rounded-[1.8rem] border border-[#e5dacb] bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a7834d]">
              E-mail
            </p>

            <h2 className="font-display mt-4 text-4xl font-semibold text-[#13233a]">
              Em implantação
            </h2>

            <p className="mt-4 leading-7 text-[#667085]">
              Endereço eletrônico institucional para comunicações formais,
              documentos, parcerias e solicitações.
            </p>
          </div>

          <div className="rounded-[1.8rem] border border-[#e5dacb] bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a7834d]">
              Instagram
            </p>

            <h2 className="font-display mt-4 text-4xl font-semibold text-[#13233a]">
              Em implantação
            </h2>

            <p className="mt-4 leading-7 text-[#667085]">
              Perfil que poderá divulgar campanhas, fotos, eventos, avisos e
              registros da turma.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#edf0f5] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 rounded-[2.2rem] border border-white/70 bg-white p-8 shadow-sm md:p-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a7834d]">
                Atendimento
              </p>

              <h2 className="font-display mt-4 text-5xl font-semibold leading-tight text-[#13233a] md:text-6xl">
                Comunicação clara e organizada.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-[#596579]">
              <p>
                Os canais oficiais da Associação serão definidos após a sua
                formalização, permitindo comunicação adequada com associados,
                apoiadores, parceiros e demais interessados.
              </p>

              <p>
                A ideia é evitar informações dispersas e concentrar a
                comunicação em meios oficiais, facilitando o acompanhamento das
                campanhas, eventos, documentos e decisões.
              </p>

              <p>
                Enquanto os canais definitivos estiverem em implantação, as
                informações poderão ser divulgadas pelos meios internos da
                turma.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 rounded-[2.2rem] border border-[#e5dacb] bg-white p-8 shadow-sm md:p-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a7834d]">
              Formulário
            </p>

            <h2 className="font-display mt-4 text-5xl font-semibold leading-tight text-[#13233a] md:text-6xl">
              Espaço para futuras mensagens.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#596579]">
              Futuramente, esta área poderá receber um formulário para envio de
              mensagens, sugestões, solicitações e propostas de apoio.
            </p>
          </div>

          <div className="rounded-[1.7rem] bg-[#f7f8fa] p-8">
            <form className="grid gap-5">
              <div>
                <label
                  htmlFor="nome"
                  className="text-sm font-semibold text-[#13233a]"
                >
                  Nome
                </label>

                <input
                  id="nome"
                  type="text"
                  placeholder="Seu nome"
                  disabled
                  className="mt-2 w-full rounded-2xl border border-[#e5dacb] bg-white px-5 py-4 text-sm text-[#667085] outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-[#13233a]"
                >
                  E-mail
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="seuemail@exemplo.com"
                  disabled
                  className="mt-2 w-full rounded-2xl border border-[#e5dacb] bg-white px-5 py-4 text-sm text-[#667085] outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="mensagem"
                  className="text-sm font-semibold text-[#13233a]"
                >
                  Mensagem
                </label>

                <textarea
                  id="mensagem"
                  placeholder="Digite sua mensagem"
                  disabled
                  rows={5}
                  className="mt-2 w-full resize-none rounded-2xl border border-[#e5dacb] bg-white px-5 py-4 text-sm text-[#667085] outline-none"
                />
              </div>

              <button
                type="button"
                disabled
                className="rounded-full bg-[#13233a] px-7 py-4 text-sm font-semibold text-white opacity-70"
              >
                Formulário em implantação
              </button>
            </form>
          </div>
        </div>
      </section>

      <StatusBanner
        eyebrow="Canais definitivos"
        title="Os contatos oficiais serão divulgados após a formalização."
        description="Após a constituição da Associação, esta página poderá apresentar telefone, WhatsApp, e-mail institucional, redes sociais e demais informações oficiais de contato."
        statusLabel="Status do contato"
        status="Em implantação"
        buttonLabel="Voltar ao início"
        buttonHref="/"
      />

      <Footer />
    </main>
  );
}