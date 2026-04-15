export default function WhyMicroloan() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 pb-24">
      <span className="badge mb-6 animate-slide-right">6 / 12</span>

      <h2 className="slide-heading mb-8 animate-slide-up">Why a Microloan? 🏦</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl w-full mb-8">
        <div 
          className="glass-card p-5 transition-all duration-200 hover:-translate-y-1 hover:bg-white/[0.2] animate-tilt-left"
          style={{ animationDelay: '0.3s', perspective: '800px' }}
        >
          <h3 className="text-white font-semibold mb-3 text-sm opacity-70">THE BARRIER</h3>
          <ul className="space-y-2">
            {['Banks require credit history & collateral', 'New businesses lack cash flow records', 'Women & minorities face higher barriers'].map((item, i) => (
              <li key={i} className="text-white/85 text-sm leading-relaxed flex items-start gap-2">
                <span className="text-white/40 mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div 
          className="glass-card p-5 transition-all duration-200 hover:-translate-y-1 hover:bg-white/[0.2] animate-tilt-right"
          style={{ animationDelay: '0.45s', perspective: '800px' }}
        >
          <h3 className="text-white font-semibold mb-3 text-sm opacity-70">THE SOLUTION</h3>
          <ul className="space-y-2">
            {['Kiva: Up to $15,000 at 0% interest', 'No minimum credit score required', 'Lenders contribute $25+ each'].map((item, i) => (
              <li key={i} className="text-white/85 text-sm leading-relaxed flex items-start gap-2">
                <span className="text-white/40 mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <blockquote className="pull-quote animate-slide-left">
        "It's the push needed to start working, earn money, and help others."
      </blockquote>
    </div>
  );
}
