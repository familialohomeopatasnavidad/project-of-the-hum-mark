import { useState, useEffect, useCallback, useRef } from 'react';
import TitleSlide from './sections/TitleSlide';
import MeetShameca from './sections/MeetShameca';
import WhatLookingInto from './sections/WhatLookingInto';
import TheBusiness from './sections/TheBusiness';
import TheProblem from './sections/TheProblem';
import WhyMicroloan from './sections/WhyMicroloan';
import HowLoanHelped from './sections/HowLoanHelped';
import MobileService from './sections/MobileService';
import GeographyEconomy from './sections/GeographyEconomy';
import RulesCulture from './sections/RulesCulture';
import Conclusion from './sections/Conclusion';
import Sources from './sections/Sources';

const slides = [
  TitleSlide,
  MeetShameca,
  WhatLookingInto,
  TheBusiness,
  TheProblem,
  WhyMicroloan,
  HowLoanHelped,
  MobileService,
  GeographyEconomy,
  RulesCulture,
  Conclusion,
  Sources,
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef(0);

  const goToSlide = useCallback((index: number) => {
    if (index === currentSlide || isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [currentSlide, isAnimating]);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setCurrentSlide(prev => prev + 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [currentSlide, isAnimating]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentSlide(prev => prev - 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [currentSlide, isAnimating]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const CurrentSlideComponent = slides[currentSlide];
  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Progress bar */}
      <div className="progress-bar" style={{ width: `${progress}%` }} />

      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((Slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 slide-${index + 1} transition-all duration-500 ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0 z-10' 
                : index < currentSlide 
                  ? 'opacity-0 -translate-x-full z-0' 
                  : 'opacity-0 translate-x-full z-0'
            }`}
          >
            <Slide onNext={nextSlide} />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="nav-bar">
        <button 
          className="nav-btn" 
          onClick={prevSlide} 
          disabled={currentSlide === 0}
          aria-label="Previous slide"
        >
          ←
        </button>
        
        <div className="nav-dots">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <span className="nav-counter">
          {currentSlide + 1} / {slides.length}
        </span>
        
        <button 
          className="nav-btn" 
          onClick={nextSlide} 
          disabled={currentSlide === slides.length - 1}
          aria-label="Next slide"
        >
          →
        </button>
      </nav>
    </div>
  );
}
