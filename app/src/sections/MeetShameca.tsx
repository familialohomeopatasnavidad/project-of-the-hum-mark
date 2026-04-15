export default function MeetShameca() {
  const items = [
    'Founder of Discreet Reports LLC in Austin, Texas',
    'Built the business from the ground up',
    'Goal: Make professional testing accessible',
    'Identified community need for discreet services',
    'Needed startup capital — banks said no',
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 pb-24">
      <span className="badge mb-6 animate-slide-right">2 / 12</span>

      <div className="w-20 h-20 rounded-full bg-white/15 border-[3px] border-white/30 flex items-center justify-center text-4xl mb-6 animate-pop-in animate-float">
        👩🏾‍💼
      </div>

      <h2 className="slide-heading mb-8 animate-slide-up">Meet Shameca Bogle</h2>

      <div className="glass-card p-6 max-w-lg w-full animate-wipe-reveal hover:bg-white/[0.18] hover:-translate-y-1 transition-all duration-200">
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li 
              key={i} 
              className="text-white/90 text-[0.95rem] leading-relaxed flex items-start gap-3 animate-slide-right-stagger"
              style={{ animationDelay: `${0.6 + i * 0.1}s` }}
            >
              <span className="text-white/50 mt-1.5">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
