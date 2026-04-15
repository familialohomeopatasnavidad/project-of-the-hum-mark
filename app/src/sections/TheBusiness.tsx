const services = [
  { icon: '🧬', title: 'Court DNA', desc: 'Legal, chain-of-custody results' },
  { icon: '💛', title: 'Peace of Mind', desc: 'Private paternity & ancestry' },
  { icon: '🧪', title: 'Work Drug Testing', desc: 'Pre-employment screenings' },
  { icon: '🔒', title: 'Personal Testing', desc: 'Private drug tests' },
  { icon: '✈️', title: 'Immigration', desc: 'DNA for embassies & agencies' },
  { icon: '🚐', title: '100% Mobile', desc: 'At home, work, any location' },
];

export default function TheBusiness() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 pb-24">
      <span className="badge mb-5 animate-slide-right">4 / 12</span>

      <h2 className="slide-heading mb-3 animate-scale-in">Discreet Reports LLC 🏢</h2>

      <p className="text-white/70 text-sm text-center mb-8 max-w-md animate-fade-blur">
        Austin, TX — open every day. They come to <em>you</em>.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl w-full">
        {services.map((service, i) => (
          <div
            key={i}
            className="glass-card p-4 text-center transition-all duration-200 hover:scale-105 hover:bg-white/[0.22] animate-pop-rotate"
            style={{ animationDelay: `${0.3 + i * 0.1}s` }}
          >
            <span 
              className="text-2xl block mb-2 animate-bounce-subtle"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {service.icon}
            </span>
            <span className="text-white font-semibold text-sm block mb-1">{service.title}</span>
            <span className="text-white/70 text-xs leading-snug block">{service.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
