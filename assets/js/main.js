/* =============================================================
   SD-Equicoaching — Script principal
   Vanilla JS, sans dépendances externes
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {

  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => { header.classList.toggle('scrolled', window.scrollY > 20); };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  const toggle = document.querySelector('.menu-toggle');
  const navMobile = document.querySelector('.nav-mobile');
  if (toggle && navMobile) {
    toggle.addEventListener('click', () => {
      const isOpen = navMobile.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
    });
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target)) {
        navMobile.classList.remove('open');
        toggle.classList.remove('open');
      }
    });
  }

  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-desktop a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = href.replace(/\/$/, '');
    if (currentPath.endsWith(linkPath) && linkPath !== '') {
      link.classList.add('active');
    } else if ((currentPath === '/' || currentPath === '/index.html') && linkPath === '/index.html') {
      link.classList.add('active');
    }
  });

  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const isOpen = btn.classList.contains('open');
      document.querySelectorAll('.faq-question.open').forEach(openBtn => {
        openBtn.classList.remove('open');
        openBtn.nextElementSibling.classList.remove('open');
      });
      if (!isOpen) { btn.classList.add('open'); answer.classList.add('open'); }
    });
  });

  const animatables = document.querySelectorAll('.offer-card, .feature-item, .blog-card, .step, .testimonial-card');
  if ('IntersectionObserver' in window && animatables.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '0';
          entry.target.style.transform = 'translateY(20px)';
          requestAnimationFrame(() => {
            entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    animatables.forEach(el => observer.observe(el));
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const required = contactForm.querySelectorAll('[required]');
      let valid = true;
      required.forEach(field => {
        field.style.borderColor = '';
        if (!field.value.trim()) { field.style.borderColor = '#E53E3E'; valid = false; }
      });
      if (valid) {
        const btn = contactForm.querySelector('[type="submit"]');
        btn.textContent = 'Message envoyé ✓';
        btn.disabled = true;
        btn.style.background = '#2E7D32';
        contactForm.reset();
      } else {
        alert('Merci de remplir tous les champs obligatoires.');
      }
    });
  }

});
