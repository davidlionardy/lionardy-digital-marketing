/* =========================================
   LIONARDY — portfolio.js v2
   ========================================= */

(function () {
  'use strict';

  /* Real agency case study data */
  const projects = [
    {
      id: 3, category: 'web',
      title: 'Senja Lifestyle',
      client: 'Senja E-Commerce',
      year: '2023',
      desc: 'Headless commerce platform for an Indonesian local brand expanding into Southeast Asia. Custom Shopify Hydrogen frontend with localization, multi-currency, and a 0.8s average load time on mobile — a 4× improvement over their legacy store.',
      result: '4× faster load time, 28% higher checkout rate',
      tags: ['Shopify', 'React', 'Sanity CMS', 'Cloudflare'],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
      color: '#10b981',
    },
    {
      id: 4, category: 'web',
      title: 'SnowandBelle',
      client: 'SnowandBelle Boutique',
      year: '2022',
      desc: 'Complete web design and brand identity system for SnowandBelle, an artisan boutique. We delivered a high-end digital experience and a visual story that attracts premium clientele.',
      result: 'Premium brand positioning & seamless web experience',
      tags: ['Web Design', 'Brand Strategy', 'Logo Design', 'Figma'],
      image: 'img/snowandbelle.png',
      color: '#f59e0b',
    },
    {
      id: 5, category: 'web',
      title: 'SehatPlus',
      client: 'SehatPlus Health Technologies',
      year: '2023',
      desc: 'Patient-facing web app and marketing site for an Indonesian telemedicine startup. We delivered a full design system, appointment booking flow, and doctor profile pages — launching in 6 weeks from kickoff. The app now serves 40,000+ monthly users.',
      result: '40,000+ monthly active users at launch',
      tags: ['Vue.js', 'Laravel', 'Figma', 'Mobile-first'],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      color: '#8b5cf6',
    },
    {
      id: 6, category: 'branding',
      title: 'Ruang Arsitektur',
      client: 'Ruang Architecture Studio',
      year: '2023',
      desc: 'Visual identity system for a Jakarta-based architecture firm specializing in eco-sustainable commercial spaces. The brand — minimal, material, monumental — elevated them into winning a government tender for a 12,000m² cultural center.',
      result: 'Won IDR 24B government design tender',
      tags: ['Visual Identity', 'Brand Guidelines', 'Web Design', 'Print'],
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      color: '#3b82f6',
    },
    {
      id: 7, category: 'design',
      title: 'Pintar Belajar',
      client: 'Pintar Learning Platform',
      year: '2024',
      desc: 'Complete UX redesign for an edtech platform serving 120,000 K-12 students across Indonesia. We ran 6 weeks of user research, 40+ usability sessions, and redesigned the learning feed — increasing daily active time by 22 minutes per student.',
      result: '+22 min average daily engagement per student',
      tags: ['UX Research', 'Figma', 'Accessibility', 'A/B Testing'],
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
      color: '#ef4444',
    },
    {
      id: 8, category: 'web',
      title: 'Firma Hukum Permata',
      client: 'Permata Legal Group',
      year: '2024',
      desc: 'Digital marketing site and client portal for a boutique corporate law firm in Jakarta. Built with a bespoke CMS allowing lawyers to publish articles, and a secure client intake flow integrated with their case management system — reducing admin time by 15 hours/week.',
      result: '2.8× increase in organic consultation bookings',
      tags: ['WordPress', 'PHP', 'SEO', 'Custom CMS'],
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
      color: '#1e293b',
    },
    {
      id: 9, category: 'web',
      title: 'Vantis Prosperindo',
      client: 'Vantis Prosperindo Management',
      year: '2023',
      desc: 'Corporate website development for a leading investment management firm. We delivered a clean, professional digital presence focusing on trust and transperency, featuring real-time market data integration and a secure investor document portal.',
      result: '99.9% platform uptime & enhanced UI engagement',
      tags: ['Web Development', 'Fintech UI', 'Corporate Branding'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      color: '#21bda1',
    },
    {
      id: 10, category: 'web',
      title: 'BQuik Indonesia',
      client: 'BQuik Indonesia',
      year: '2023',
      desc: 'Integrated digital solution for an automotive service leader. We managed end-to-end website development and performance marketing campaigns, driving a massive increase in service appointment bookings through hyper-targeted localized ads.',
      result: '180% growth in online service bookings',
      tags: ['Website', 'Performance Ads', 'Lead Generation'],
      image: 'https://www.b-quik.id/image/cover/b-quik-og-image.jpg',
      color: '#f59e0b',
    },
  ];

  const grid    = document.getElementById('portfolio-grid');
  const modal   = document.getElementById('project-modal');
  const mClose  = document.getElementById('modal-close');
  const mBody   = document.getElementById('modal-body');
  if (!grid) return;

  function createCard(p) {
    const card = document.createElement('article');
    card.className = 'project-card reveal';
    card.setAttribute('data-category', p.category);
    card.setAttribute('data-id', p.id);
    card.setAttribute('role', 'listitem');
    card.innerHTML = `
      <div class="project-card-visual" style="--c:${p.color}">
        <img src="${p.image}" alt="${p.title}" class="project-card-img" loading="lazy">
        <div class="card-overlay">
          <span class="card-view-label">View Case Study</span>
        </div>
        <div class="card-meta-top">
          <span class="tag">${p.category}</span>
          <span class="card-year">${p.year}</span>
        </div>
      </div>
      <div class="project-card-body">
        <div class="card-client">${p.client}</div>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-result">${p.result}</p>
        <div class="card-tags">
          ${p.tags.slice(0,3).map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>
    `;
    card.addEventListener('click', () => openModal(p));
    return card;
  }

  function renderCards(filter) {
    grid.innerHTML = '';
    const list = filter === 'all' ? projects : projects.filter(p => p.category === filter);
    list.forEach((p, i) => {
      const card = createCard(p);
      card.style.transitionDelay = `${i * 0.05}s`;
      grid.appendChild(card);
    });
    // Re-observe
    setTimeout(() => {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
      }, { threshold: 0.08 });
      document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
      // Re-init tilt
      if (window.__LD_initTilt) window.__LD_initTilt(document.querySelectorAll('.project-card'));
    }, 80);
  }

  // Filter tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderCards(tab.getAttribute('data-filter'));
    });
  });

  renderCards('all');

  /* Modal */
  function openModal(p) {
    if (!modal || !mBody) return;
    mBody.innerHTML = `
      <div class="modal-hero">
        <img src="${p.image}" alt="${p.title}" class="modal-hero-img">
        <div class="modal-hero-overlay" style="background: linear-gradient(to bottom, transparent, rgba(15, 23, 42, 0.9))"></div>
        <div class="modal-hero-info">
          <span class="tag" style="background:${p.color}; color:#fff; border:none;">${p.category}</span>
          <h2 class="modal-title">${p.title}</h2>
          <div class="modal-client">${p.client} · ${p.year}</div>
        </div>
      </div>
      <div class="modal-content">
        <div class="modal-result-badge">
          <span class="result-icon">🏆</span>
          <span>${p.result}</span>
        </div>
        <p class="modal-desc">${p.desc}</p>
        <div class="modal-tech">
          <div class="modal-tech-label">Technologies Used</div>
          <div class="modal-tags">${p.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
        </div>
        <div class="modal-actions">
          <a href="contact.html" class="btn btn-primary glimmer-btn">Start a Similar Project</a>
          <button id="modal-close-alt" class="btn btn-outline">Close</button>
        </div>
      </div>
    `;
    const inner = modal.querySelector('.modal-inner');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => { if (inner) inner.classList.add('in'); });

    const closeAlt = document.getElementById('modal-close-alt');
    if (closeAlt) closeAlt.addEventListener('click', closeModal);
  }

  function closeModal() {
    const inner = modal && modal.querySelector('.modal-inner');
    if (inner) inner.classList.remove('in');
    setTimeout(() => {
      if (modal) modal.classList.remove('open');
      document.body.style.overflow = '';
    }, 360);
  }

  if (mClose)  mClose.addEventListener('click', closeModal);
  if (modal)   modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal && modal.classList.contains('open')) closeModal(); });

})();
