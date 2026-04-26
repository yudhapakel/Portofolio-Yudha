const projects = [
  {
    title: "Proyek Tingkat III",
    desc: "Project utama perkuliahan untuk membangun solusi berbasis software engineering bersama tim.",
    link: "https://github.com/yudhapakel/Proyek-Tingkat-3",
    icon: "🚀",
    tags: ["Team Project", "Software Engineering", "Web"]
  },
  {
    title: "SIMASU Web DevOps",
    desc: "Project DevOps untuk memperkuat workflow development, deployment, dan kolaborasi berbasis GitHub.",
    link: "https://github.com/HaikalCannavaro/SIMASU-Web-Devops",
    icon: "⚙️",
    tags: ["DevOps", "Docker", "GitHub"]
  },
  {
    title: "Stock Management",
    img: "asset/WhatsApp Image 2025-06-21 at 18.45.33_605613f4.jpg",
    desc: "Aplikasi manajemen barang untuk kebutuhan pengelolaan stok supermarket.",
    link: "https://github.com/NichoIrawan/StockManagement_Application",
    tags: ["Application", "Inventory", "Team"]
  },
  {
    title: "Connectify",
    desc: "Aplikasi relasi untuk membantu mahasiswa terhubung dan berkolaborasi.",
    link: "https://github.com/evangelionxyz/Connectify",
    icon: "🤝",
    tags: ["Student App", "Collaboration"]
  }
];

const container = document.querySelector(".project-container");

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "project";

  const media = project.img
    ? `<img src="${project.img}" alt="Preview ${project.title}" loading="lazy" />`
    : `<span class="project-icon" aria-hidden="true">${project.icon || "💻"}</span>`;

  const tags = (project.tags || [])
    .map((tag) => `<span>${tag}</span>`)
    .join("");

  card.innerHTML = `
    <div class="project-media">${media}</div>
    <div class="project-body">
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
      <div class="project-tags">${tags}</div>
      <a href="${project.link}" target="_blank" rel="noopener">Lihat di GitHub →</a>
    </div>
  `;

  return card;
}

if (container) {
  projects.forEach((project) => container.appendChild(createProjectCard(project)));
}

const toggleDark = document.getElementById("toggle-dark");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  toggleDark.textContent = "☀️";
}

toggleDark?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  toggleDark.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle?.addEventListener("click", () => {
  navbar.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navbar.classList.remove("open"));
});

const typedText = "Junior Developer | RPL Student | DevOps Learner";
const target = document.querySelector(".typing-text");
let index = 0;

function typeEffect() {
  if (!target) return;

  if (index <= typedText.length) {
    target.textContent = typedText.slice(0, index);
    index += 1;
    setTimeout(typeEffect, 55);
  }
}

typeEffect();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

window.addEventListener("load", () => {
  document.getElementById("loader")?.classList.add("hidden");
});

document.getElementById("year").textContent = new Date().getFullYear();
