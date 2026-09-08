type Props = {
  title: string;
  lead?: string;
  align?: 'left' | 'center';
  id?: string;
};

export default function SectionHeading({ title, lead, align = 'left', id }: Props) {
  const centred = align === 'center';
  return (
    <header
      id={id}
      className={centred ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      <h2 className="on-dark-display text-display-md text-balance text-parchment">{title}</h2>
      {lead ? (
        <p className={`lead mt-5 text-pretty ${centred ? 'mx-auto' : ''}`}>{lead}</p>
      ) : null}
    </header>
  );
}
