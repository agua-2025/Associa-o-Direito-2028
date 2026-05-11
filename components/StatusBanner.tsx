import Link from "next/link";

type StatusBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  statusLabel: string;
  status: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export function StatusBanner({
  eyebrow,
  title,
  description,
  statusLabel,
  status,
  buttonLabel,
  buttonHref,
}: StatusBannerProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="overflow-hidden rounded-[2.2rem] bg-[#13233a] text-white shadow-2xl shadow-slate-900/15">
        <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e6c98d]">
              {eyebrow}
            </p>

            <h2 className="font-display mt-4 text-5xl font-semibold leading-tight md:text-6xl">
              {title}
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              {description}
            </p>
          </div>

          <div className="rounded-[1.7rem] border border-white/10 bg-white/10 p-8">
            <p className="text-sm text-white/55">{statusLabel}</p>

            <p className="font-display mt-3 text-5xl font-semibold">
              {status}
            </p>

            {buttonLabel && buttonHref && (
              <Link
                href={buttonHref}
                className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#13233a] transition hover:-translate-y-1"
              >
                {buttonLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}