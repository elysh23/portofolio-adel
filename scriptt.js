// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
window.addEventListener('scroll', function() {
  const hero = document.querySelector('.hero');
  const scrollPosition = window.scrollY;

  // Menggerakkan posisi hero saat scroll
  hero.style.transform = `translateY(${scrollPosition * 0.5}px)`;  // Menyesuaikan kecepatan gerakan
  hero.style.opacity = 1 - scrollPosition / 500;  // Mengurangi opacity saat scroll ke bawah
});
