export default function Rule({ className = '' }: { className?: string }) {
  return <span aria-hidden className={`hairline ${className}`} />;
}
