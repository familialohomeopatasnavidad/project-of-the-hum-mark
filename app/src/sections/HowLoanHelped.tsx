import { useState } from 'react';

const steps = [
  { icon: '🛠️', text: 'Buy mobile testing equipment' },
  { icon: '🔬', text: 'Set up accredited lab partnerships' },
  { icon: '📄', text: 'Get permits and certifications' },
  { icon: '🚀', text: 'Launch the business officially' },
  { icon: '💰', text: 'Build steady income for her family' },
  { icon: '❤️', text: 'Serve her community every day' },
];

export default function HowLoanHelped() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 pb-24">
      <span className="badge mb-5 animate-slide-right">7 / 12</span>

      <h2 className="slide-heading mb-3 animate-slide-up">How The Loan Helped Her</h2>

      <p className="text-white/60 text-sm mb-6 animate-fade-in">
        Click to see what she could do with it
      </p>

      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          className="btn-primary animate-bounce-in"
        >
          Click to See
          <span>✨</span>
        </button>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-xl w-full animate-fade-in">
          {steps.map((step, i) => (
            <div
              key={i}
              className="glass-card p-4 text-center transition-all duration-200 hover:scale-105 hover:bg-white/[0.22] animate-flip-in"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <span 
                className="text-2xl block mb-2 animate-bounce-subtle"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {step.icon}
              </span>
              <span className="text-white/90 text-sm leading-snug block">{step.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
