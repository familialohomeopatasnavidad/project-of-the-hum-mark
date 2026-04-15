const stats = [
  {
    icon: '🏭',
    title: 'Service Economy',
    desc: 'Health and testing services are in high demand across the U.S.',
  },
  {
    icon: '🏪',
    title: 'Small Business Power',
    desc: 'Local businesses create jobs and strengthen community access.',
  },
  {
    icon: '📈',
    title: 'Women Entrepreneurs',
    desc: 'The fastest-growing segment of the U.S. economy.',
  },
];

export default function GeographyEconomy() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 pb-24">
      <span className="badge mb-5 animate-slide-right">9 / 12</span>

      <h2 className="slide-heading mb-3 animate-slide-down">Geography & Economy</h2>

      <p className="text-white/70 text-sm text-center mb-8 max-w-md animate-fade-in">
        Austin, TX — one of the fastest-growing cities in the U.S.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl w-full">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="glass-card p-5 text-center transition-all duration-200 hover:-translate-y-1.5 hover:bg-white/[0.2] animate-wave-rise"
            style={{ animationDelay: `${0.3 + i * 0.12}s` }}
          >
            <span 
              className="text-2xl block mb-3 animate-pop-in"
              style={{ animationDelay: `${0.6 + i * 0.1}s` }}
            >
              {stat.icon}
            </span>
            <span className="text-white font-semibold text-sm block mb-2">{stat.title}</span>
            <span className="text-white/70 text-xs leading-relaxed block">{stat.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
