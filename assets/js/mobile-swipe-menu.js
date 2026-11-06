(() => {
  const MOBILE_MAX_WIDTH = 849;
  const EDGE_WIDTH = 36;
  const SWIPE_DISTANCE = 56;

  let startX = 0;
  let startY = 0;
  let tracking = false;
  let gesture = null;

  const isMobile = () => window.innerWidth <= MOBILE_MAX_WIDTH;
  const isOpen = () => document.body.classList.contains('sidebar-display');

  const toggleSidebar = () => {
    const trigger = document.getElementById('sidebar-trigger');
    if (trigger) {
      trigger.click();
      return;
    }

    // Fallback for compatible Chirpy layouts without the trigger button.
    document.body.classList.toggle('sidebar-display');
  };

  document.addEventListener(
    'touchstart',
    (event) => {
      if (!isMobile() || event.touches.length !== 1) return;

      const touch = event.touches[0];
      const sidebar = document.getElementById('sidebar');

      if (!isOpen() && touch.clientX <= EDGE_WIDTH) {
        gesture = 'open';
      } else if (isOpen() && sidebar?.contains(event.target)) {
        gesture = 'close';
      } else {
        gesture = null;
        return;
      }

      startX = touch.clientX;
      startY = touch.clientY;
      tracking = true;
    },
    { passive: true }
  );

  document.addEventListener(
    'touchend',
    (event) => {
      if (!tracking || !gesture || event.changedTouches.length !== 1) return;

      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - startX;
      const deltaY = touch.clientY - startY;
      const isHorizontal = Math.abs(deltaX) > Math.abs(deltaY) * 1.25;

      if (
        isHorizontal &&
        ((gesture === 'open' && deltaX >= SWIPE_DISTANCE) ||
          (gesture === 'close' && deltaX <= -SWIPE_DISTANCE))
      ) {
        toggleSidebar();
      }

      tracking = false;
      gesture = null;
    },
    { passive: true }
  );

  document.addEventListener(
    'touchcancel',
    () => {
      tracking = false;
      gesture = null;
    },
    { passive: true }
  );
})();
