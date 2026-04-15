interface Props {
  onNext: () => void;
}

export default function TitleSlide({ onNext }: Props) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 pb-24 animate-fade-in">
      <div className="badge mb-8 animate-float animate-slide-down">
        Gabriel Rojas · 22/03/2026
      </div>

      <h1 className="slide-title mb-6 animate-slide-up">
        Kiva: How Small Loans
        <br />
        Change Lives
      </h1>

      <p className="slide-subtitle mb-10 animate-fade-blur">
        The story of Shameca Bogle and how she built her business, Discreet Reports LLC
      </p>

      <button
        onClick={onNext}
        className="btn-primary animate-bounce-in animate-pulse-glow"
      >
        Start
        <span>→</span>
      </button>
    </div>
  );
}
