const items = [
  {
    icon: '🔐',
    title: 'Privacy & HIPAA Laws',
    desc: 'Strict federal and state privacy compliance with informed consent.',
  },
  {
    icon: '⛓️',
    title: 'Chain of Custody',
    desc: 'Protocols for court-admissible results accepted by government agencies.',
  },
  {
    icon: '🏛️',
    title: 'Government Programs',
    desc: 'Kiva and SBA help entrepreneurs access financing.',
  },
  {
    icon: '💪',
    title: 'Community Trust',
    desc: 'Hard work and professionalism build real trust.',
  },
];

export default function RulesCulture() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 pb-24">
      <span className="badge mb-6 animate-slide-right">10 / 12</span>

      <h2 className="slide-heading mb-8 animate-slide-up">Rules & Local Culture ⚖️</h2>

      <div className="flex flex-col gap-3 max-w-xl w-full">
        {items.map((item, i) => (
          <div
            key={i}
            className="glass-card p-4 flex items-start gap-4 transition-all duration-200 hover:translate-x-2 hover:bg-white/[0.2] animate-slide-tilt"
            style={{ animationDelay: `${0.2 + i * 0.15}s`, perspective: '800px' }}
          >
            <span 
              className="text-2xl flex-shrink-0 animate-pulse-subtle"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              {item.icon}
            </span>
            <div>
              <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-white/75 text-xs leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
