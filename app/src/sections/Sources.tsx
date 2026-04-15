const sources = [
  { name: 'Kiva.org', desc: 'Microloan platform for entrepreneurs' },
  { name: 'Discreet Reports LLC', desc: 'Shameca Bogle business website' },
  { name: 'Discreet Reports — About Us', desc: 'Company background' },
  { name: 'SBA Microloans Program', desc: 'Government funding resource' },
  { name: 'SBA Loans Overview', desc: 'Small Business Administration' },
  { name: 'NerdWallet — Microloans', desc: 'SBA Microloans explained' },
];

export default function Sources() {
  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 pb-24">
      <span className="badge mb-6 animate-slide-right">12 / 12</span>

      <h2 className="slide-heading mb-8 animate-slide-down">Sources</h2>

      <div className="flex flex-col gap-2 max-w-md w-full mb-8">
        {sources.map((source, i) => (
          <div
            key={i}
            className="glass-card p-3 flex items-center gap-3 transition-all duration-200 hover:translate-x-2 hover:bg-white/[0.2] cursor-pointer animate-slide-up-stagger"
            style={{ animationDelay: `${0.15 + i * 0.08}s` }}
          >
            <span 
              className="w-1.5 h-1.5 rounded-full bg-white/50 flex-shrink-0 animate-pulse-dot"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
            <div className="flex-1 min-w-0">
              <span className="text-white font-medium text-sm block truncate">{source.name}</span>
              <span className="text-white/60 text-xs block truncate">{source.desc}</span>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleRestart}
        className="btn-primary animate-bounce-in"
      >
        <span>↻</span>
        Start Over
      </button>
    </div>
  );
}
