(() => {
  const track = document.querySelector('.hero-card-track');
  if (!track) return;
  const previous = document.getElementById('heroCardsPrevious');
  const next = document.getElementById('heroCardsNext');
  const position = document.getElementById('heroCardsPosition');
  const cards = [...track.querySelectorAll('.hero-profile-card')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  function step() {
    return cards[1].offsetLeft - cards[0].offsetLeft;
  }
  function update() {
    const end = track.scrollWidth - track.clientWidth;
    previous.disabled = track.scrollLeft < 3;
    next.disabled = track.scrollLeft >= end - 3;
    const index = Math.min(cards.length - 1, Math.round(track.scrollLeft / step()));
    position.textContent = `${String(index + 1).padStart(2, '0')} / 04`;
  }
  function move(direction) {
    track.scrollBy({ left: direction * step(), behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  }
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  track.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      move(event.key === 'ArrowRight' ? 1 : -1);
    }
  });
  track.addEventListener('scroll', update, { passive: true });
  new ResizeObserver(update).observe(track);
  update();
})();
