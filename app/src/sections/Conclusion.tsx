interface Props {
  onNext: () => void;
}

const points = [
  'Shameca saw a real need and took action',
  'Microloans gave her a chance when banks said no',
  'Serves clients 24/7, any day, anywhere',
  'Legal DNA, drug screenings — all private',
  'When entrepreneurs succeed, communities benefit',
];

export default function Conclusion({ onNext }: Props) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 pb-24">
      <span className="badge mb-5 animate-slide-right">11 / 12</span>

      <h2 className="slide-heading mb-6 animate-scale-in">Conclusion 🌟</h2>

      <div className="glass-card p-5 max-w-lg w-full mb-6 animate-circle-reveal hover:bg-white/[0.18] transition-all duration-200">
        <ul className="space-y-2">
          {points.map((point, i) => (
            <li 
              key={i} 
              className="text-white/90 text-sm leading-relaxed flex items-start gap-3 animate-slide-right-stagger"
              style={{ animationDelay: `${0.4 + i * 0.08}s` }}
            >
              <span className="text-white/50 mt-1">•</span>
              {point}
            </li>
          ))}
        </ul>
      </div>

      <blockquote className="pull-quote mb-6 animate-fade-blur">
        "Our mission is to make testing an easy, private, and trusted experience for everyone."
      </blockquote>

      <button
        onClick={onNext}
        className="btn-primary animate-bounce-in animate-pulse-glow"
      >
        See Sources
        <span>→</span>
      </button>
    </div>
  );
}
