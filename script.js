const project = [
    {
        title: "Connectify",
        desc: "Pengembangan aplikasi relasi untuk mahasiswa.",
        link : "https://github.com/evangelionxyz/Connectify"
    },
    {
        title: "Stock Management",
        img: "asset/WhatsApp Image 2025-06-21 at 18.45.33_605613f4.jpg",
        desc: "Aplikasi manajemen barang untuk supermarket",
        link: "https://github.com/NichoIrawan/StockManagement_Application"
    }
];

const container = document.querySelector('.project-container');

project.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project';
    card.innerHTML = `
    <img src="${p.img}" alt="${p.title}" style="width:100%; border-radius: 8px;" />
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <a href="${p.link}" target="_blank">Lihat di GitHub</a>
  `;
  container.appendChild(card);
});

document.getElementById('toggle-dark').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

let typedText = "Junior Developer | C# & Java Enthusiast";
let i = 0;
function typeEffect() {
  if (i < typedText.length) {
    document.querySelector('header p').textContent += typedText.charAt(i);
    i++;
    setTimeout(typeEffect, 70);
  }
}
document.querySelector('header p').textContent = "";
typeEffect();

window.addEventListener("load", function () {
  document.getElementById("loader").style.display = "none";
});


document.getElementById('year').textContent = new Date().getFullYear();

