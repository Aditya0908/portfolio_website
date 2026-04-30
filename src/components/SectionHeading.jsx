export function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white mb-2 tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-slate-500 font-mono text-sm uppercase tracking-widest">
          / {subtitle}
        </p>
      )}
    </div>
  );
}
