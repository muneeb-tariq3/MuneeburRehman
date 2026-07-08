// ============================================
//  MUNEEB TARIQ PORTFOLIO — main.js
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Active nav link ---
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (
      href === currentPage ||
      (currentPage === '' && href === 'index.html') ||
      (currentPage === 'index.html' && href === 'index.html')
    ) {
      link.classList.add('active');
    }
  });

  // --- Navbar scroll effect ---
  const navbar = document.getElementById('navbar');
  const scrollHandler = () => {
    navbar && navbar.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', scrollHandler, { passive: true });
  scrollHandler();

  // --- Mobile nav toggle ---
  const toggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.classList.remove('open');
        mobileNav.classList.remove('open');
      });
    });
  }

  // --- Intersection Observer: fade-up on scroll ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.observe').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
    observer.observe(el);
  });

  // --- Typed text (home page) ---
  const typedEl = document.getElementById('typed');
  if (typedEl) {
    const words = ['Web Developer', 'Frontend Engineer', 'Vue.js Developer', 'Full-Stack Builder'];
    let wi = 0, ci = 0, deleting = false;

    function type() {
      const word = words[wi];
      typedEl.textContent = deleting ? word.slice(0, --ci) : word.slice(0, ++ci);
      let delay = deleting ? 60 : 110;
      if (!deleting && ci === word.length) { delay = 1800; deleting = true; }
      else if (deleting && ci === 0) { deleting = false; wi = (wi + 1) % words.length; delay = 300; }
      setTimeout(type, delay);
    }
    type();
  }

  // --- Contact form ---
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type=submit]');
      const orig = btn.innerHTML;
      btn.innerHTML = '✓ Message Sent!';
      btn.disabled = true;
      btn.style.background = '#22c55e';
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.disabled = false;
        btn.style.background = '';
        form.reset();
      }, 3000);
    });
  }

  // --- Skill bars animate ---
  document.querySelectorAll('.skill-bar-fill').forEach(bar => {
    const val = bar.dataset.val;
    const animate = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        bar.style.width = val + '%';
        animate.disconnect();
      }
    }, { threshold: 0.5 });
    animate.observe(bar);
  });

});
