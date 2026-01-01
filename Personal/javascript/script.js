// ================== Theme Toggle (Light/Dark Mode) ==================
const toggleBtn = document.getElementById("theme-toggle-button");
const html = document.documentElement;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  html.classList.add("dark");
  if (toggleBtn) toggleBtn.setAttribute("aria-pressed", "true");
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const isDark = html.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggleBtn.setAttribute("aria-pressed", isDark);
  });
}

// ================== Scroll Spy Navigation ==================
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

for (const section of sections) {
  if (window.scrollY >= section.offsetTop) {
    current = section.id;
  }       
}

  links.forEach(link => {
    link.classList.toggle(
      "active",
      link.dataset.section === current
    );
  });
});
// ================== Portfolio Filter ==================
const filterButtons = document.querySelectorAll(".portfolio-filter");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

  
    filterButtons.forEach((btn) => {
      btn.classList.remove("active", "bg-linear-to-r", "from-primary", "to-secondary", "text-white");
      btn.classList.add("bg-white", "dark:bg-slate-800", "text-slate-600", "dark:text-slate-300");
      btn.setAttribute("aria-pressed", "false");
    });

   
    button.classList.add("active", "bg-linear-to-r", "from-primary", "to-secondary", "text-white");
    button.classList.remove("bg-white", "dark:bg-slate-800", "text-slate-600", "dark:text-slate-300");
    button.setAttribute("aria-pressed", "true");


    portfolioItems.forEach((item) => {
      if (filter === "all" || item.getAttribute("data-category") === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// ================== Sidebar Toggle ==================
const settingsToggle = document.getElementById("settings-toggle");
const settingsSidebar = document.getElementById("settings-sidebar");
const closeSettings = document.getElementById("close-settings");

if (settingsToggle && settingsSidebar) {
  settingsToggle.addEventListener("click", () => {
    settingsSidebar.classList.toggle("translate-x-full");
  });
}

if (closeSettings && settingsSidebar) {
  closeSettings.addEventListener("click", () => {
    settingsSidebar.classList.add("translate-x-full");
  });
}

// ================== Font Changer ==================
const fontButtons = document.querySelectorAll(".font-option");
const targetElement = document.body;

fontButtons.forEach((button) => {
  button.addEventListener("click", () => {
    
    fontButtons.forEach((btn) => {
      btn.classList.remove("active");
      btn.setAttribute("aria-checked", "false");
    });

   
    button.classList.add("active");
    button.setAttribute("aria-checked", "true");

    
    const selectedFont = button.getAttribute("data-font");
    targetElement.style.fontFamily = selectedFont;
  });
});

// ================== Color Theme Changer ==================
const colorButtons = document.querySelectorAll("#theme-colors-grid button");

colorButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const primary = btn.getAttribute("data-primary");
    const secondary = btn.getAttribute("data-secondary");

    document.documentElement.style.setProperty("--primary-color", primary);
    document.documentElement.style.setProperty("--secondary-color", secondary);
  });
});


const colorButtons1 = document.querySelectorAll(".theme-color");

colorButtons1.forEach((btn) => {
  btn.addEventListener("click", function () {
    
    colorButtons1.forEach((b) => {
      b.style.borderColor = "#e5e7eb";
      b.style.boxShadow = "none";
      b.style.outline = "none";
      b.style.outlineOffset = "0";
    });

    
    const color = this.getAttribute("data-primary");
    this.style.borderColor = color;
    this.style.outline = `3px solid ${color}`;
    this.style.outlineOffset = "4px";
  });
});


const themeColors = document.querySelectorAll(".theme-color");

themeColors.forEach((btn) => {
  btn.addEventListener("click", () => {
    themeColors.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const primary = btn.getAttribute("data-primary");
    const secondary = btn.getAttribute("data-secondary");

    document.documentElement.style.setProperty("--primary-color", primary);
    document.documentElement.style.setProperty("--secondary-color", secondary);

    localStorage.setItem("primaryColor", primary);
    localStorage.setItem("secondaryColor", secondary);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const savedPrimary = localStorage.getItem("primaryColor");
  const savedSecondary = localStorage.getItem("secondaryColor");

  if (savedPrimary && savedSecondary) {
    document.documentElement.style.setProperty("--primary-color", savedPrimary);
    document.documentElement.style.setProperty("--secondary-color", savedSecondary);
  }
});

// ================== Reset Settings Button ==================
const resetBtn = document.getElementById("reset-settings");

resetBtn.addEventListener("click", () => {
  document.documentElement.style.setProperty("--primary-color", "rgb(99, 102, 241)");
  document.documentElement.style.setProperty("--secondary-color", "rgb(139, 92, 246)");

  localStorage.clear();
  themeColors.forEach((b) => b.classList.remove("active"));
});

// ================== Testimonials Carousel ==================
const carousel = document.getElementById("testimonials-carousel");
const cards = document.querySelectorAll(".testimonial-card");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const indicators = document.querySelectorAll(".carousel-indicator");

let currentIndex = 0;

function cardWidth() {
  return cards[0].offsetWidth;
}

function maxIndex() {
  return cards.length - 1;
}

function updateCarousel() {
  const moveX = currentIndex * cardWidth();
  carousel.style.transform = `translateX(${moveX}px)`;

  indicators.forEach((dot, i) => {
    if (i === currentIndex) {
      dot.classList.add("bg-accent");
      dot.classList.remove("bg-slate-400");
      dot.setAttribute("aria-selected", "true");
    } else {
      dot.classList.remove("bg-accent");
      dot.classList.add("bg-slate-400");
      dot.setAttribute("aria-selected", "false");
    }
  });
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < maxIndex()) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

indicators.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentIndex = i;
    updateCarousel();
  });
});

window.addEventListener("resize", updateCarousel);
updateCarousel();

// ================== Scroll to Top Button ==================
const scrollToTopBtn = document.getElementById("scroll-to-top");

scrollToTopBtn.style.display = "none";

window.addEventListener("scroll", () => {
  scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
