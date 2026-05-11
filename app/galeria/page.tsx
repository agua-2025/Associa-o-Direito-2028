import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const albuns = [
  {
    titulo: "Turma de Direito",
    texto: "Registros dos acadêmicos e momentos da caminhada até a formatura.",
    imagem: "/images/galeria-turma.jpg",
  },
  {
    titulo: "Eventos",
    texto: "Fotos de encontros, assembleias, reuniões e ações da Associação.",
    imagem: "/images/galeria-eventos.jpg",
  },
  {
    titulo: "Bastidores",
    texto: "Momentos de organização, planejamento e construção coletiva.",
    imagem: "/images/galeria-bastidores.jpg",
  },
  {
    titulo: "Vida acadêmica",
    texto: "Registros da graduação, convivência e trajetória da turma.",
    imagem: "/images/galeria-academico.jpg",
  },
];

export default function GaleriaPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#1b2230]">
      <Header />

      <section className="relative overflow-hidden bg-[#13233a]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,35,58,0.94),rgba(19,35,58,0.72),rgba(19,35,58,0.30)),url('/images/galeria-turma.jpg')] bg-cover bg-center" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(199,165,107,0.32),transparent_30%),radial-gradient(circle_at_86%_12%,rgba(255,255,255,0.16),transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#e6c98d]">
              Galeria
            </p>

            <h1 className="font-display mt-6 text-6xl font-semibold leading-[0.98] tracking-[-0.04em] text-white md:text-8xl">
              Memórias da nossa caminhada.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/75">
              A galeria reúne registros da turma, eventos, bastidores e momentos
              importantes da trajetória dos acadêmicos de Direito rumo à
              formatura.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-14 max-w-7xl px-6">
        <div className="grid gap-5 rounded-[2rem] border border-white/60 bg-white/95 p-4 shadow-2xl shadow-slate-900/15 backdrop-blur-xl md:grid-cols-2 lg:grid-cols-4">
          {albuns.map((album) => (
            <div
              key={album.titulo}
              className="group overflow-hidden rounded-[1.6rem] border border-[#e5dacb] bg-[#f7f8fa] shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
            >
              <div className="relative h-64 bg-[#13233a]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(19,35,58,0.05), rgba(19,35,58,0.78)), url('${album.imagem}')`,
                  }}
                />

                <div className="absolute inset-0 flex items-end p-6">
                  <p className="font-display text-4xl font-semibold leading-tight text-white">
                    {album.titulo}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm leading-6 text-[#596579]">
                  {album.texto}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#a7834d]">
              Registro
            </p>

            <h2 className="font-display mt-5 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-7xl">
              Uma história contada também por imagens.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-[#e5dacb] bg-white p-8 shadow-sm md:p-10">
            <p className="text-xl leading-9 text-[#596579]">
              As fotos ajudam a preservar a memória da turma, registrando a
              convivência, os encontros, os eventos e os bastidores da
              organização da formatura.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#edf0f5] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-[2.4rem] bg-[#13233a] p-8 text-white shadow-2xl shadow-slate-900/10 md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(199,165,107,0.30),transparent_28%),radial-gradient(circle_at_15%_80%,rgba(255,255,255,0.10),transparent_30%)]" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#e6c98d]">
                  Arquivo visual
                </p>

                <h2 className="font-display mt-5 text-5xl font-semibold leading-tight tracking-[-0.03em] md:text-6xl">
                  A galeria será atualizada com os principais momentos.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                  Novos registros poderão ser incluídos conforme a realização de
                  assembleias, campanhas, eventos e ações da turma.
                </p>
              </div>

              <div className="rounded-[1.8rem] border border-white/10 bg-white/10 p-7 backdrop-blur">
                <p className="font-display text-5xl font-semibold text-white">
                  2028
                </p>

                <p className="mt-4 leading-7 text-white/70">
                  Um percurso acadêmico construído em grupo e registrado para a
                  memória da formatura.
                </p>
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
                Participação
              </p>

              <h2 className="font-display mt-5 text-5xl font-semibold leading-tight tracking-[-0.03em] text-[#13233a] md:text-6xl">
                Bons registros também fazem parte da formatura.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#13233a]/78">
                A turma poderá contribuir com fotos e registros dos principais
                momentos, fortalecendo a memória coletiva da AAD Direito 2028.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/eventos"
                className="rounded-full bg-[#13233a] px-8 py-4 text-center text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#0c1728]"
              >
                Ver eventos
              </Link>

              <Link
                href="/contato"
                className="rounded-full border border-[#13233a]/25 bg-white/55 px-8 py-4 text-center text-sm font-semibold text-[#13233a] backdrop-blur transition hover:-translate-y-1 hover:bg-white"
              >
                Enviar registro
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}