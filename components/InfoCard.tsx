type InfoCardProps = {
  title: string;
  description: string;
};

export function InfoCard({ title, description }: InfoCardProps) {
  return (
    <div className="rounded-[1.6rem] border border-[#e5dacb] bg-white p-7 shadow-sm">
      <p className="font-display text-3xl font-semibold text-[#13233a]">
        {title}
      </p>

      <p className="mt-4 leading-7 text-[#667085]">{description}</p>
    </div>
  );
}