import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { StatusBanner } from "@/components/StatusBanner";

import { albuns } from "@/data/galeria";

export default function GaleriaPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#1b2230]">
      <Header />

      <PageHero
        eyebrow="Galeria de fotos"
        title="Memórias da turma de Direito 2028."
        description="Um espaço para reunir fotos oficiais, eventos, campanhas, bastidores, encontros acadêmicos e momentos especiais da caminhada rumo à formatura."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a7834d]">
              Álbuns
            </p>

            <h2 className="font-display mt-4 text-5xl font-semibold leading-tight text-[#13233a] md:text-6xl">
              Registros da nossa história.
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-[#596579]">
            A galeria poderá ser organizada por eventos, campanhas, reuniões,
            fotos oficiais, bastidores e demais momentos da turma.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {albuns.map((album, index) => (
            <article
              key={album.titulo}
              className={`group overflow-hidden rounded-[2rem] border border-[#e5dacb] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden bg-[#13233a] ${
                  index === 0 ? "h-[500px]" : "h-72"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(19,35,58,0.04), rgba(19,35,58,0.58)), url('${album.imagem}')`,
                  }}
                />

                <div className="absolute inset-0 flex items-end p-7">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e6c98d]">
                      Álbum
                    </p>

                    <h3 className="font-display mt-3 text-4xl font-semibold leading-tight text-white">
                      {album.titulo}
                    </h3>

                    <p className="mt-3 max-w-md leading-7 text-white/75">
                      {album.descricao}
                    </p>
                  </div>
                </div>
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
                Organização da galeria
              </p>

              <h2 className="font-display mt-4 text-5xl font-semibold leading-tight text-[#13233a] md:text-6xl">
                Fotos com identidade e memória.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-[#596579]">
              <p>
                A galeria será organizada para valorizar a história da turma,
                reunindo imagens de eventos, campanhas, encontros, reuniões,
                atividades acadêmicas e momentos importantes.
              </p>

              <p>
                As fotos poderão ser separadas por álbuns, datas ou temas,
                facilitando a consulta e preservando a memória coletiva dos
                acadêmicos.
              </p>

              <p>
                Após a formalização da Associação, este espaço poderá receber
                fotos reais da turma, substituindo as imagens provisórias usadas
                inicialmente no site.
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
            Espaços para diferentes registros.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#596579]">
            A galeria poderá crescer conforme a realização das atividades da
            turma e da Associação.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {[
            "Fotos oficiais",
            "Campanhas",
            "Eventos",
            "Bastidores",
            "Reuniões",
            "Momentos acadêmicos",
            "Integração",
            "Formatura",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.6rem] border border-[#e5dacb] bg-white p-7 shadow-sm"
            >
              <p className="font-display text-3xl font-semibold text-[#13233a]">
                {item}
              </p>

              <p className="mt-4 leading-7 text-[#667085]">
                Categoria destinada ao registro e organização das fotos da
                turma.
              </p>
            </div>
          ))}
        </div>
      </section>

      <StatusBanner
        eyebrow="Fotos reais da turma"
        title="Este espaço ganhará vida com os registros oficiais."
        description="Quando a Associação começar a realizar suas ações, a galeria poderá receber imagens próprias dos acadêmicos, campanhas, reuniões e eventos."
        statusLabel="Status da galeria"
        status="Em implantação"
        buttonLabel="Enviar fotos"
        buttonHref="/contato"
      />

      <Footer />
    </main>
  );
}