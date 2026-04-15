const topics = [
  {
    num: '01',
    title: 'How Much to Start?',
    desc: 'Equipment, vehicle, certifications, and lab partnerships.',
  },
  {
    num: '02',
    title: 'Why a Microloan?',
    desc: 'What makes 0% interest better than traditional banks?',
  },
  {
    num: '03',
    title: 'Mobile Service',
    desc: 'Going directly to clients builds privacy and trust.',
  },
];

export default function WhatLookingInto() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 pb-24">
      <span className="badge mb-6 animate-slide-right">3 / 12</span>

      <h2 className="slide-heading mb-10 animate-slide-up">What We're Looking Into 🔍</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl w-full" style={{ perspective: '1000px' }}>
        {topics.map((topic, i) => (
          <div
            key={i}
            className="glass-card p-5 transition-all duration-200 hover:-translate-y-1.5 hover:bg-white/[0.2] animate-flip-in"
            style={{ animationDelay: `${0.3 + i * 0.15}s` }}
          >
            <span 
              className="text-2xl font-bold text-white/35 block mb-2 animate-pop-in"
              style={{ animationDelay: `${0.8 + i * 0.1}s` }}
            >
              {topic.num}
            </span>
            <h3 className="text-white font-semibold text-base mb-2">{topic.title}</h3>
            <p className="text-white/75 text-sm leading-relaxed">{topic.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
