let currentSlide = 0;
const totalSlides = 12;
let touchStartX = 0;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initNavDots();
  updateUI();
  setupKeyboardNav();
  setupTouchNav();
});

// Initialize navigation dots
function initNavDots() {
  const dotsContainer = document.getElementById('navDots');
  if (!dotsContainer) return;
  
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.className = 'nav-dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goToSlide(i);
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dotsContainer.appendChild(dot);
  }
}

// Go to specific slide
function goToSlide(index) {
  if (index === currentSlide || index < 0 || index >= totalSlides) return;
  
  const slides = document.querySelectorAll('.slide');
  
  // Remove active class from current
  slides[currentSlide].classList.remove('active');
  slides[currentSlide].classList.add(index > currentSlide ? 'prev' : '');
  
  // Update current
  currentSlide = index;
  
  // Add active class to new
  slides[currentSlide].classList.remove('prev');
  slides[currentSlide].classList.add('active');
  
  updateUI();
}

// Next slide
function nextSlide() {
  if (currentSlide < totalSlides - 1) {
    goToSlide(currentSlide + 1);
  }
}

// Previous slide
function prevSlide() {
  if (currentSlide > 0) {
    goToSlide(currentSlide - 1);
  }
}

// Update UI elements
function updateUI() {
  // Update progress bar
  const progressBar = document.getElementById('progressBar');
  if (progressBar) {
    progressBar.style.width = `${((currentSlide + 1) / totalSlides) * 100}%`;
  }
  
  // Update counter
  const counter = document.getElementById('navCounter');
  if (counter) {
    counter.textContent = `${currentSlide + 1} / ${totalSlides}`;
  }
  
  // Update dots
  const dots = document.querySelectorAll('.nav-dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
  
  // Update buttons
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  if (prevBtn) prevBtn.disabled = currentSlide === 0;
  if (nextBtn) nextBtn.disabled = currentSlide === totalSlides - 1;
}

// Keyboard navigation
function setupKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      prevSlide();
    }
  });
}

// Touch navigation
function setupTouchNav() {
  const slideshow = document.getElementById('slideshow');
  if (!slideshow) return;
  
  slideshow.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  
  slideshow.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  }, { passive: true });
}

// Reveal steps on slide 7
function revealSteps() {
  const btn = document.getElementById('revealBtn');
  const grid = document.getElementById('stepsGrid');
  
  if (btn && grid) {
    btn.style.display = 'none';
    grid.classList.remove('hidden');
  }
}

// Expose functions globally
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
window.goToSlide = goToSlide;
window.revealSteps = revealSteps;
