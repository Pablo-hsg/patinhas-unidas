// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu
function toggleMenu() {
  const m = document.getElementById('navMobile');
  m?.classList.toggle('open');
}

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('fade-in');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.mcard, .animal-card, .help-card, .testi-card').forEach(el => {
  observer.observe(el);
});
