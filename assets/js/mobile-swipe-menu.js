(() => {
  const MOBILE_MAX_WIDTH = 849;
  const SWIPE_DISTANCE = 56;

  let startX = 0;
  let startY = 0;
  let tracking = false;
  let gesture = null;
  let openedAt = 0;
  let lastScrollY = window.scrollY;
  let scrollTicking = false;

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

  const closeSidebar = () => {
    if (!isOpen()) return;

    const trigger = document.getElementById('sidebar-trigger');
    if (trigger) trigger.click();

    // Keep closing deterministic even if the theme misses a synthetic click.
    requestAnimationFrame(() => {
      document.body.classList.remove('sidebar-display');
    });
  };

  document.addEventListener(
    'touchstart',
    (event) => {
      if (!isMobile() || event.touches.length !== 1) return;

      const touch = event.touches[0];
      const sidebar = document.getElementById('sidebar');

      // Start the opening gesture anywhere in the page. Requiring the left
      // edge conflicts with the browser's back gesture on iOS.
      if (!isOpen()) {
        gesture = 'open';
      } else if (isOpen() && sidebar?.contains(event.target)) {
        gesture = 'close';
      } else {
        gesture = 'outside';
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
      const isTap = Math.abs(deltaX) < 12 && Math.abs(deltaY) < 12;

      if (gesture === 'outside' && isTap) {
        closeSidebar();
        tracking = false;
        gesture = null;
        return;
      }

      if (
        isHorizontal &&
        ((gesture === 'open' && deltaX >= SWIPE_DISTANCE) ||
          (gesture === 'close' && deltaX <= -SWIPE_DISTANCE))
      ) {
        if (gesture === 'open') openedAt = performance.now();
        if (gesture === 'close') {
          closeSidebar();
        } else {
          toggleSidebar();
        }
      }

      tracking = false;
      gesture = null;
    },
    { passive: true }
  );

  document.addEventListener(
    'click',
    (event) => {
      if (!isMobile() || !isOpen()) return;

      const sidebar = document.getElementById('sidebar');
      const trigger = document.getElementById('sidebar-trigger');
      const clickedInsideMenu = sidebar?.contains(event.target);
      const clickedTrigger = trigger?.contains(event.target);

      // A touch swipe can emit a synthetic click immediately afterwards.
      if (performance.now() - openedAt < 350) return;

      if (!clickedInsideMenu && !clickedTrigger) {
        event.preventDefault();
        event.stopPropagation();
        closeSidebar();
      }
    },
    true
  );

  document.addEventListener(
    'touchcancel',
    () => {
      tracking = false;
      gesture = null;
    },
    { passive: true }
  );

  window.addEventListener(
    'scroll',
    () => {
      if (!isMobile() || scrollTicking) return;

      scrollTicking = true;
      requestAnimationFrame(() => {
        const currentScrollY = Math.max(window.scrollY, 0);
        const delta = currentScrollY - lastScrollY;

        if (currentScrollY <= 16 || delta <= -4) {
          document.body.classList.remove('mobile-topbar-hidden');
        } else if (delta >= 12 && !isOpen()) {
          document.body.classList.add('mobile-topbar-hidden');
        }

        lastScrollY = currentScrollY;
        scrollTicking = false;
      });
    },
    { passive: true }
  );
})();
