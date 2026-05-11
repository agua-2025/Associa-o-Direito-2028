type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a7834d]">
        {eyebrow}
      </p>

      <h2 className="font-display mt-4 text-5xl font-semibold leading-tight text-[#13233a] md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-[#596579]">{description}</p>
      )}
    </div>
  );
}