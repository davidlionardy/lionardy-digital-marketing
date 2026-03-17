/* =========================================
   LIONARDY
   main.js (Light Premium)
   ========================================= */

(function () {
  'use strict';

  const qs  = (s, c = document) => c.querySelector(s);
  const qsa = (s, c = document) => [...c.querySelectorAll(s)];
  const lerp = (a, b, t) => a + (b - a) * t;

  /* ── Custom Cursor ── */
  const cursor = qs('#cursor');
  const trail  = qs('#cursor-trail');
  if (cursor && trail) {
    let mx = -100, my = -100, tx = -100, ty = -100;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      document.body.classList.add('cursor-active');
    });

    const animCursor = () => {
      cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
      tx = lerp(tx, mx, 0.15); ty = lerp(ty, my, 0.15);
      trail.style.left = tx + 'px'; trail.style.top = ty + 'px';
      requestAnimationFrame(animCursor);
    };
    requestAnimationFrame(animCursor);

    qsa('a, button, .btn, .card, .work-card, .project-card, .svc-row').forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  /* ── Scroll Progress ── */
  const progress = qs('#scroll-progress');
  if (progress) {
    window.addEventListener('scroll', () => {
      const h   = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - window.innerHeight)) * 100;
      progress.style.width = Math.min(pct, 100) + '%';
    }, { passive: true });
  }

  /* ── Sticky Nav ── */
  const nav = qs('#nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  /* ── Mobile Nav ── */
  const toggle    = qs('.nav-toggle');
  const mobileNav = qs('.nav-mobile');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      toggle.classList.toggle('active', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    qsa('a', mobileNav).forEach(a => a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      toggle.classList.remove('active');
      document.body.style.overflow = '';
    }));
  }

  /* ── Scroll Reveal (IntersectionObserver) ── */
  const revealAll = qsa('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if (revealAll.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealAll.forEach(el => obs.observe(el));
  }

  /* ── Line Reveal (hero lines) ── */
  function initLineReveals() {
    qsa('.line-reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('in'), 150 + i * 120);
    });
  }

  /* ── Animated Counter ── */
  function runCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10) || 0;
    const suffix = el.getAttribute('data-suffix') || '';
    const dur    = 2000;
    const fps    = 60;
    const steps  = dur / (1000 / fps);
    const inc    = target / steps;
    let cur = 0;
    const tick = () => {
      cur = Math.min(cur + inc, target);
      el.textContent = Math.floor(cur) + suffix;
      if (cur < target) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
  const counterEls = qsa('[data-target]');
  if (counterEls.length) {
    const cObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { runCounter(e.target); cObs.unobserve(e.target); } });
    }, { threshold: 0.5 });
    counterEls.forEach(el => cObs.observe(el));
  }

  /* ── Subtle 3D Tilt ── */
  function initTilt(cards) {
    cards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        // Toned down intensity for light theme
        const x = ((e.clientX - r.left) / r.width  - 0.5) * 6;
        const y = ((e.clientY - r.top)  / r.height - 0.5) * 6;
        card.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) scale(1.01)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
  }
  initTilt(qsa('.tilt-card'));
  window.__LD_initTilt = initTilt;

  /* ── Magnet Buttons ── */
  qsa('.magnetic').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width / 2) * 0.15; // softened
      const dy = (e.clientY - r.top - r.height / 2) * 0.15;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });

  /* ── Active Nav Link ── */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  qsa('.nav-links a, .nav-mobile a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  /* ── Init on DOM ready ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLineReveals);
  } else {
    initLineReveals();
  }

})();
