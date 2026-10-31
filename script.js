const projects = [
  {
    title: "Official Website HMRPL Telkom University",
    desc: "Website profil dan pusat informasi resmi Himpunan Mahasiswa Rekayasa Perangkat Lunak Telkom University. Bertanggung jawab penuh pada pengembangan backend service, database, pengujian sistem, hingga konfigurasi hosting & deployment production yang aktif digunakan organisasi.",
    link: "https://github.com/yudhapakel",
    iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
    badge: "Production Live",
    tags: ["PHP", "Laravel", "MySQL", "Production Hosting", "MVC Architecture", "Testing"]
  },
  {
    title: "Relay (OTEWE) - Multi-Modal Routing Engine",
    desc: "Engine navigasi rute transit cerdas. Mengintegrasikan rute pejalan kaki via OSRM, transit angkot/bus/KRL, kalkulasi matriks tarif dinamis, serta scoring rute dengan arsitektur modular berbasis TypeScript.",
    link: "https://github.com/ase-relay/relay",
    iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>',
    badge: "Active / Focus",
    tags: ["Express.js", "TypeScript", "Prisma ORM", "PostgreSQL", "OSRM", "Jest", "Zod"]
  },
  {
    title: "GARDABMD - Sistem Aset & Pemeliharaan BKAD",
    desc: "Platform manajemen dan inventarisasi aset daerah Pemerintah Kabupaten Seruyan. Merapikan basis data inventaris, histori pemeliharaan, serta alur pelaporan barang milik daerah.",
    link: "https://github.com/yudhapakel/Database-BKAD_Seruyann",
    iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2l10 6H2l10-6z"></path></svg>',
    badge: "Government Capstone",
    tags: ["Database Architecture", "Fullstack", "Asset Management", "Government"]
  },
  {
    title: "SIMASU Web DevOps",
    desc: "Implementasi otomasi CI/CD, containerization Docker, dan pipeline pengujian otomatis untuk platform SIMASU guna menjamin keandalan deployment.",
    link: "https://github.com/HaikalCannavaro/SIMASU-Web-Devops",
    iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>',
    badge: "Completed",
    tags: ["DevOps", "Docker", "CI/CD", "GitHub Actions"]
  },
  {
    title: "Discord VC Anchor & Homeserver Automation",
    desc: "Bot orkestrasi voice channel berbasis Discord.js v14 yang berjalan sebagai systemd user daemon di Linux homeserver 24/7 dengan konsumsi RAM ultra-ringan (~35MB) dan Tailscale mesh VPN.",
    link: "https://github.com/yudhapakel",
    iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>',
    badge: "Personal Lab",
    tags: ["Node.js", "Systemd", "Linux", "Tailscale", "Bot"]
  },
  {
    title: "Proyek Tingkat III (SE-47-03)",
    desc: "Aplikasi rekayasa perangkat lunak skala tim semester 6. Menerapkan metodologi Agile Scrum, kolaborasi Git branch terstandarisasi, dan modular software design.",
    link: "https://github.com/yudhapakel/Proyek-Tingkat-3",
    iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>',
    badge: "Completed",
    tags: ["Software Engineering", "Team Project", "Web"]
  }
];

const container = document.querySelector(".project-container");

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "glass-card project-card reveal";

  const tags = (project.tags || [])
    .map((tag) => `<span class="tag-pill">${tag}</span>`)
    .join("");

  const badgeHtml = project.badge ? `<span class="project-badge">${project.badge}</span>` : "";

  card.innerHTML = `
    <div class="project-card-header">
      <div class="project-icon-box">${project.iconSvg}</div>
      ${badgeHtml}
    </div>
    <div class="project-body">
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
      <div class="project-tags">${tags}</div>
      <div class="project-footer">
        <a href="${project.link}" target="_blank" rel="noopener" class="project-link">
          Lihat Repositori 
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      </div>
    </div>
  `;

  return card;
}

if (container) {
  projects.forEach((project) => container.appendChild(createProjectCard(project)));
}

// Dark Mode Toggle
const toggleDark = document.getElementById("toggle-dark");
const sunIcon = toggleDark?.querySelector(".sun-icon");
const moonIcon = toggleDark?.querySelector(".moon-icon");
const savedTheme = localStorage.getItem("theme");

function updateThemeIcons(isDark) {
  if (!sunIcon || !moonIcon) return;
  if (isDark) {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  } else {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  }
}

if (savedTheme === "light") {
  document.body.classList.remove("dark");
  updateThemeIcons(false);
} else {
  document.body.classList.add("dark");
  updateThemeIcons(true);
}

toggleDark?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  updateThemeIcons(isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Mobile Navbar Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle?.addEventListener("click", () => {
  navbar.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navbar.classList.remove("open"));
});

// Typing Text Effect
const roles = [
  "Backend Developer (Laravel • Node.js • TypeScript)",
  "Software Engineering Student @ Telkom University",
  "Linux & Homeserver Tinkerer",
  "Backend Developer & Systems Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const target = document.querySelector(".typing-text");

function typeEffect() {
  if (!target) return;

  const currentRole = roles[roleIndex];

  if (isDeleting) {
    target.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    target.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let typingSpeed = isDeleting ? 30 : 60;

  if (!isDeleting && charIndex === currentRole.length) {
    typingSpeed = 2200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typingSpeed = 400;
  }

  setTimeout(typeEffect, typingSpeed);
}

typeEffect();

// Scroll Reveal with IntersectionObserver
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

// Loader & Year
window.addEventListener("load", () => {
  document.getElementById("loader")?.classList.add("hidden");
});

document.getElementById("year").textContent = new Date().getFullYear();
