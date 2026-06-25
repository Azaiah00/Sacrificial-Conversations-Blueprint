// Shared wrapper for each numbered section.
// Renders the gold number + title header and gives the section a scroll anchor.

type SectionProps = {
  id: string;
  num: string;
  title: string;
  children?: React.ReactNode;
};

export default function Section({ id, num, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-yellow-500 font-mono text-xl shrink-0">{num}</span>
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
          {title}
        </h2>
        <div className="h-px bg-yellow-600/30 flex-grow ml-4" />
      </div>
      {children}
    </section>
  );
}
