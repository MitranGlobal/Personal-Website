export default function PageHead({
  shoulder,
  title,
  lead,
}: {
  shoulder: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="border-b border-ink/12 bg-paper-warm">
      <div className="shell spread py-16 md:py-20">
        <p className="shoulder lg:pt-3">{shoulder}</p>
        <div>
          <h1 className="max-w-[20ch] text-d-xl text-balance text-ink">{title}</h1>
          {lead ? <p className="body-copy mt-6 text-pretty">{lead}</p> : null}
        </div>
      </div>
    </header>
  );
}
