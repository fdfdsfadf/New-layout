// Notification JS (always shows)
(function(){
  const notif = document.getElementById('webfarmNotification');
  const dismiss = document.getElementById('notifDismiss');
  const details = document.getElementById('notifDetails');
  let autoHideTimer = null;

  function showNotification(duration = 8000) {
    notif.classList.remove('hidden');
    requestAnimationFrame(() => notif.classList.add('show'));

    if (duration > 0) {
      clearTimeout(autoHideTimer);
      autoHideTimer = setTimeout(hideNotification, duration);
    }
  }

  function hideNotification() {
    notif.classList.remove('show');
    setTimeout(() => notif.classList.add('hidden'), 300);
    clearTimeout(autoHideTimer);
  }

  // Button actions
  dismiss.addEventListener('click', hideNotification);
  details.addEventListener('click', () => {
    window.open('/status', '_blank'); // change to your desired link
  });

  // Always show on page load
  window.addEventListener('load', () => {
    setTimeout(() => showNotification(0), 600);
  });

  // Optional: expose for manual control
  window.showWebfarmNotification = showNotification;
  window.hideWebfarmNotification = hideNotification;
})();
