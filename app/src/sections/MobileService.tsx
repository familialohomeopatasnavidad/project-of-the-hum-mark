const leftPoints = [
  'No need to travel or wait in clinic',
  'Open every day, evenings & weekends',
  'Flexible scheduling',
  'Great for those who can\'t travel',
];

const rightPoints = [
  'Privacy is top priority',
  'Results delivered securely',
  'Accredited labs for accuracy',
  'Urine, saliva, hair options',
];

export default function MobileService() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 pb-24">
      <span className="badge mb-5 animate-slide-right">8 / 12</span>

      <h2 className="slide-heading mb-3 animate-scale-in">The Mobile Service 🚐</h2>

      <p className="text-white/70 text-sm text-center mb-8 max-w-md animate-slide-up">
        Discreet Reports comes to you — at home, at work, or any location
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl w-full">
        <div 
          className="glass-card p-5 transition-all duration-200 hover:-translate-y-1 hover:bg-white/[0.2] animate-tilt-left"
          style={{ animationDelay: '0.3s', perspective: '900px' }}
        >
          <h3 className="text-white font-semibold mb-4 text-sm opacity-70">CONVENIENCE</h3>
          <ul className="space-y-2">
            {leftPoints.map((point, i) => (
              <li 
                key={i} 
                className="text-white/85 text-sm leading-relaxed flex items-start gap-2 animate-slide-right-stagger"
                style={{ animationDelay: `${0.5 + i * 0.08}s` }}
              >
                <span className="text-white/40 mt-1">•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div 
          className="glass-card p-5 transition-all duration-200 hover:-translate-y-1 hover:bg-white/[0.2] animate-tilt-right"
          style={{ animationDelay: '0.45s', perspective: '900px' }}
        >
          <h3 className="text-white font-semibold mb-4 text-sm opacity-70">PRIVACY</h3>
          <ul className="space-y-2">
            {rightPoints.map((point, i) => (
              <li 
                key={i} 
                className="text-white/85 text-sm leading-relaxed flex items-start gap-2 animate-slide-left-stagger"
                style={{ animationDelay: `${0.6 + i * 0.08}s` }}
              >
                <span className="text-white/40 mt-1">•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
