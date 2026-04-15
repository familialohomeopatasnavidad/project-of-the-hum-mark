const problems = [
  {
    icon: '🚫',
    title: 'No Easy Access',
    desc: 'Testing clinics were hard to reach, especially without transportation.',
  },
  {
    icon: '🔒',
    title: 'Privacy Matters',
    desc: 'People avoided testing to stay unseen. Discretion is everything.',
  },
  {
    icon: '💸',
    title: 'No Money to Start',
    desc: 'Equipment and permits cost thousands. Banks require collateral.',
  },
];

export default function TheProblem() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 pb-24">
      <span className="badge mb-6 animate-slide-right">5 / 12</span>

      <h2 className="slide-heading mb-10 animate-slide-down">The Problem She Saw</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl w-full">
        {problems.map((problem, i) => (
          <div
            key={i}
            className="glass-card p-5 text-center transition-all duration-200 hover:-translate-y-1.5 hover:bg-white/[0.22] animate-fan-in"
            style={{ 
              animationDelay: `${0.2 + i * 0.15}s`,
              transform: `rotateY(${i === 0 ? 5 : i === 2 ? -5 : 0}deg) translateX(${i === 0 ? 20 : i === 2 ? -20 : 0}px)`,
              perspective: '900px'
            }}
          >
            <span className="text-3xl block mb-3 animate-pulse-subtle">{problem.icon}</span>
            <span className="text-white font-semibold text-base block mb-2">{problem.title}</span>
            <span className="text-white/75 text-sm leading-relaxed block">{problem.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
