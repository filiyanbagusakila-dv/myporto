const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

// MENU MOBILE
if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// TUTUP MENU SAAT LINK DIKLIK
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    if (navMenu) {
      navMenu.classList.remove("active");
    }
  });
});

// ANIMASI SCROLL
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.12
});

// AMATI SEMUA ELEMEN REVEAL
document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 5000);
});