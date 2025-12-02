(function () {
  const overlay = document.getElementById('bannerOverlay');
  const closeBtn = document.getElementById('closeBtn');
  const dismissBtn = document.getElementById('dismissBtn');
  const openSite = document.getElementById('openSite');

  const KEY = 'kangaroo_banner_dismissed_v1';

  // Show banner on load unless dismissed earlier
  if (!localStorage.getItem(KEY)) {
    requestAnimationFrame(() =>
      setTimeout(() => {
        overlay.classList.add('visible');
        overlay.setAttribute('aria-hidden', 'false');
      }, 250)
    );
  }

  function hide(remember) {
    overlay.classList.remove('visible');
    overlay.setAttribute('aria-hidden', 'true');
    if (remember) localStorage.setItem(KEY, '1');
  }

  closeBtn.addEventListener('click', () => hide(false));
  dismissBtn.addEventListener('click', () => hide(true));
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hide(false);
  });
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) hide(false);
  });
  openSite.addEventListener('click', () => hide(true));
})();
