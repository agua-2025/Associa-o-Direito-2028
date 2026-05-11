export function Footer() {
  return (
    <footer className="border-t border-[#e5dacb] px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-3xl font-semibold text-[#13233a]">
            Associação Direito 2028
          </p>
          <p className="mt-1 text-sm text-[#667085]">
            Turma de Direito rumo à formatura
          </p>
        </div>

        <p className="text-sm text-[#667085]">
          Organização, transparência e memórias rumo à formatura.
        </p>
      </div>
    </footer>
  );
}
