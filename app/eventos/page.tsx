import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { StatusBanner } from "@/components/StatusBanner";

import { eventos } from "@/data/eventos";

export default function EventosPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#1b2230]">
      <Header />

      <PageHero
        eyebrow="Agenda da turma"
        title="Eventos, reuniões e ações da Associação."
        description="Espaço destinado à divulgação da agenda oficial, reuniões, assembleias, campanhas, eventos acadêmicos e encontros de integração da turma de Direito 2028."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a7834d]">
              Próximos eventos
            </p>

            <h2 className="font-display mt-4 text-5xl font-semibold leading-tight text-[#13233a] md:text-6xl">
              Agenda em construção
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-[#596579]">
            A agenda será atualizada conforme a definição das assembleias,
            campanhas, encontros e demais atividades organizadas pela
            Associação.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {eventos.map((evento) => (
            <article
              key={evento.titulo}
              className="group overflow-hidden rounded-[1.8rem] border border-[#e5dacb] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
            >
              <div className="relative h-56 overflow-hidden bg-[#13233a]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(19,35,58,0.08), rgba(19,35,58,0.48)), url('${evento.imagem}')`,
                  }}
                />

                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#13233a]">
                  {evento.categoria}
                </span>
              </div>

              <div className="p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a7834d]">
                  {evento.data}
                </p>

                <h3 className="font-display mt-4 text-3xl font-semibold leading-tight text-[#13233a]">
                  {evento.titulo}
                </h3>

                <p className="mt-2 text-sm font-medium text-[#7a8494]">
                  {evento.local}
                </p>

                <p className="mt-4 leading-7 text-[#596579]">
                  {evento.descricao}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#edf0f5] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 rounded-[2.2rem] border border-white/70 bg-white p-8 shadow-sm md:p-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a7834d]">
                Organização
              </p>

              <h2 className="font-display mt-4 text-5xl font-semibold leading-tight text-[#13233a] md:text-6xl">
                Eventos com registro e planejamento.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-[#596579]">
              <p>
                Os eventos da Associação deverão ser divulgados com antecedência
                sempre que possível, contendo informações sobre data, horário,
                local, finalidade, responsáveis e forma de participação.
              </p>

              <p>
                Reuniões importantes, assembleias e deliberações poderão ser
                acompanhadas de registros formais, atas, listas de presença e
                demais documentos necessários para garantir transparência e
                organização.
              </p>

              <p>
                A página também poderá ser usada para registrar eventos já
                realizados, fortalecendo a memória da turma e a prestação de
                contas das atividades desenvolvidas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a7834d]">
            Tipos de eventos
          </p>

          <h2 className="font-display mt-4 text-5xl font-semibold leading-tight text-[#13233a] md:text-6xl">
            Atividades que poderão compor a agenda.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#596579]">
            A agenda poderá incluir atividades institucionais, acadêmicas,
            arrecadatórias e de integração.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {[
            "Assembleias",
            "Campanhas",
            "Eventos de arrecadação",
            "Integração da turma",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.6rem] border border-[#e5dacb] bg-white p-7 shadow-sm"
            >
              <p className="font-display text-3xl font-semibold text-[#13233a]">
                {item}
              </p>

              <p className="mt-4 leading-7 text-[#667085]">
                Atividade organizada com planejamento, divulgação e registro
                para acompanhamento dos associados.
              </p>
            </div>
          ))}
        </div>
      </section>

      <StatusBanner
        eyebrow="Atualizações"
        title="Novos eventos serão publicados aqui."
        description="Após a formalização e organização da Associação, esta página poderá receber a agenda completa de reuniões, campanhas, assembleias e eventos da turma."
        statusLabel="Status da agenda"
        status="Em implantação"
        buttonLabel="Enviar sugestão de evento"
        buttonHref="/contato"
      />

      <Footer />
    </main>
  );
}