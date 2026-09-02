export default function SectionTransition({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}
