/* ============================================================
   MAIN JS — Navigation active state, scroll behavior, admin
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     Active nav link — mark current page
     Handles both CSS pill buttons (.nav-link) and image buttons (.nav-btn-link)
  ---------------------------------------------------------- */
  function setActiveNav() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    function markActive(selector) {
      document.querySelectorAll(selector).forEach(link => {
        const href = link.getAttribute('href') || '';
        const linkPage = href.split('/').pop();
        if (
          linkPage === currentPath ||
          (currentPath === '' && linkPage === 'index.html')
        ) {
          link.classList.add('active');
          link.setAttribute('aria-current', 'page');
        }
      });
    }

    markActive('.nav-link');
    markActive('.nav-btn-link');
  }

  /* ----------------------------------------------------------
     Image button hover swap — mirrors original MM_swapImage
     Active page permanently shows hover (lit) image
  ---------------------------------------------------------- */
  function initNavImageHover() {
    document.querySelectorAll('.nav-btn-img').forEach(img => {
      const hoverSrc = img.dataset.hover;
      if (!hoverSrc) return;

      const defaultSrc = img.src;
      const link = img.closest('.nav-btn-link');
      if (!link) return;

      // Preload hover image
      new Image().src = hoverSrc;

      // Active page: show hover state permanently
      if (link.classList.contains('active')) {
        img.src = hoverSrc;
      }

      link.addEventListener('mouseenter', () => { img.src = hoverSrc; });
      link.addEventListener('mouseleave', () => {
        if (!link.classList.contains('active')) img.src = defaultSrc;
      });
    });
  }

  /* ----------------------------------------------------------
     Header scroll behavior
     - Adds .scrolled class after 80px for shadow
     - Header always remains visible (never hides)
  ---------------------------------------------------------- */
  function initScrollHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const THRESHOLD = 80;

    function onScroll() {
      if (window.scrollY > THRESHOLD) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ----------------------------------------------------------
     Entrance animation — stagger fade-up on elements
     Respects prefers-reduced-motion
  ---------------------------------------------------------- */
  function initEntranceAnimations() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('[data-animate]').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    const targets = document.querySelectorAll('[data-animate]');
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el, i) => {
      el.style.transitionDelay = `${(el.dataset.delay || i * 60)}ms`;
      observer.observe(el);
    });
  }

  /* ----------------------------------------------------------
     Admin gate — gear icon prompts for password every time.
     On success navigates to admin.html (no session storage).
     Path computed from current page depth.
  ---------------------------------------------------------- */
  function initAdminGate() {
    const btn = document.getElementById('adminBtn');
    if (!btn) return;

    const isSubpage = window.location.pathname.includes('/pages/');
    const adminPath = isSubpage ? '../admin.html' : 'admin.html';

    btn.addEventListener('click', function () {
      const pw = prompt('Studio Admin Password:');
      if (pw === null) return;

      if (pw === 'cds2025') {
        window.location.href = adminPath;
      } else {
        alert('Incorrect password.');
      }
    });
  }

  /* ----------------------------------------------------------
     Init
  ---------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    setActiveNav();
    initNavImageHover();
    initScrollHeader();
    initEntranceAnimations();
    initAdminGate();
  });

})();
