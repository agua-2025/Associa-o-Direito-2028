type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#e5dacb]">
      <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_18%_10%,rgba(199,165,107,0.20),transparent_34%),radial-gradient(circle_at_85%_12%,rgba(19,35,58,0.12),transparent_32%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#a7834d]">
            {eyebrow}
          </p>

          <h1 className="font-display mt-5 text-5xl font-semibold leading-[1.04] tracking-[-0.03em] text-[#13233a] md:text-7xl">
            {title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#596579]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}