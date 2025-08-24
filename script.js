document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".card, .list-group-item, h1, .accordion, .navbar");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // плавное появление
        entry.target.style.transition = `all 0.7s ease ${index * 0.2}s`;
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      } else {
        // снова скрываем, чтобы эффект повторялся
        entry.target.style.transition = "all 0.7s ease";
        entry.target.style.opacity = "0";
        entry.target.style.transform = "translateY(40px)";
      }
    });
  }, { threshold: 0.2 });

  // стартовые стили задаём
  elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    observer.observe(el);
  });
});
