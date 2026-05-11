import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const eventos = [
  {
    titulo: "Assembleia de Constituição",
    status: "Em breve",
    texto: "Aprovação do Estatuto Social, eleição da Diretoria e composição da Comissão Fiscal.",
    imagem: "/images/evento-assembleia.jpg",
  },
  {
    titulo: "Campanhas",
    status: "Planejamento",
    texto: "Ações voltadas à arrecadação e participação coletiva dos associados.",
    imagem: "/images/evento-campanha.jpg",
  },
  {
    titulo: "Integração da turma",
    status: "A definir",
    texto: "Momentos de convivência, união e fortalecimento da caminhada acadêmica.",
    imagem: "/images/evento-integracao.jpg",
  },
];

const registros = [
  "Assembleias gerais.",
  "Reuniões de organização.",
  "Campanhas de arrecadação.",
  "Eventos de integração.",
  "Momentos acadêmicos da turma.",
];

export default function EventosPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#1b2230]">
      <Header />

      <section className="relative overflow-hidden bg-[#13233a]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,35,58,0.94),rgba(19,35,58,0.72),rgba(19,35,58,0.30)),url('/images/evento-assembleia.jpg')] bg-cover bg-center" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(199,165,107,0.32),transparent_30%),radial-gradient(circle_at_86%_12%,rgba(255,255,255,0.16),transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#e6c98d]">
              Eventos
            </p>

            <h1 className="font-display mt-6 text-6xl font-semibold leading-[0.98] tracking-[-0.04em] text-white md:text-8xl">
              Encontros que constroem a nossa história.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/75">
              Assembleias, campanhas, reuniões e momentos de integração fazem
              parte da caminhada da AAD Direito 2028 rumo à formatura.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-14 max-w-7xl px-6">
        <div className="grid gap-5 rounded-[2rem] border border-white/60 bg-white/95 p-4 shadow-2xl shadow-slate-900/15 backdrop-blur-xl md:grid-cols-3">
          {eventos.map((evento) => (
            <Link
              key={evento.titulo}
              href="/eventos"
              className="group overflow-hidden rounded-[1.6rem] border border-[#e5dacb] bg-[#f7f8fa] shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
            >
              <div className="relative h-56 bg-[#13233a]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(19,35,58,0.08), rgba(19,35,58,0.78)), url('${evento.imagem}')`,
                  }}
                />

                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e6c98d]">
                      {evento.status}
                    </p>

                    <p className="font-display mt-2 text-4xl font-semibold leading-tight text-white">
                      {evento.titulo}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="leading-7 text-[#596579]">{evento.texto}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#a7834d]">
              Organização
            </p>

            <h2 className="font-display mt-5 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-7xl">
              Eventos simples, úteis e bem registrados.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-[#e5dacb] bg-white p-8 shadow-sm md:p-10">
            <p className="text-xl leading-9 text-[#596579]">
              Os eventos da Associação serão organizados conforme a necessidade
              da turma, com registro das deliberações, participação dos
              associados e alinhamento com os objetivos da formatura.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#edf0f5] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#a7834d]">
                Registros
              </p>

              <h2 className="font-display mt-5 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-6xl">
                Momentos que poderão ser acompanhados.
              </h2>
            </div>

            <div className="rounded-[2rem] border border-white/70 bg-white p-6 shadow-sm md:p-8">
              <div className="grid gap-3">
                {registros.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl bg-[#f7f8fa] px-5 py-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#13233a] text-xs font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <p className="text-base leading-7 text-[#596579]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="relative overflow-hidden rounded-[2.4rem] bg-[#c7a56b] p-8 shadow-2xl shadow-slate-900/10 md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(255,255,255,0.34),transparent_28%),radial-gradient(circle_at_15%_80%,rgba(19,35,58,0.20),transparent_30%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#13233a]/70">
                Memória
              </p>

              <h2 className="font-display mt-5 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-6xl">
                Cada encontro também conta a história da turma.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#13233a]/78">
                Os principais momentos poderão ser registrados na galeria,
                formando a memória institucional da AAD Direito 2028.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/galeria"
                className="rounded-full bg-[#13233a] px-8 py-4 text-center text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#0c1728]"
              >
                Ver galeria
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