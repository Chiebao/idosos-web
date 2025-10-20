// Inicialização do site
document.addEventListener("DOMContentLoaded", () => {
  console.log("Site carregado com sucesso!");
  initMenu();
  initSPA();
  initForm();
  revealItems();
  window.addEventListener("scroll", revealItems);
});

// SPA – Navegação entre páginas
function initSPA() {
  const links = document.querySelectorAll("nav a");
  const content = document.getElementById("content");
  if (!links || !content) return;

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = e.target.getAttribute("href");
      loadPage(page);
    });
  });
}

function loadPage(page) {
  const content = document.getElementById("content");

  fetch(page)
    .then(response => response.text())
    .then(html => {
      content.innerHTML = html;
      window.scrollTo(0, 0);
    })
    .catch(err => console.error("Erro ao carregar página:", err));
}

// Formulário – Validação e envio
function initForm() {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const nome = form.querySelector("#nome").value.trim();
    const email = form.querySelector("#email").value.trim();
    const cpf = form.querySelector("#cpf").value.trim();

    if (nome === "" || email === "" || cpf === "") {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    if (!validateEmail(email)) {
      alert("E-mail inválido!");
      return;
    }

    alert("Cadastro realizado com sucesso!");
    form.reset();
  });
}

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

// Local Storage
function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function getData(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

// Menu
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector('.menu-toggle');
  // tenta achar a UL do menu; se houver nav > ul com classe menu, pega ela
  const menu = document.querySelector('.menu') || document.querySelector('nav ul');
  const body = document.body;

  if (!menuToggle) {
    console.warn("menu-toggle não encontrado no DOM.");
    return;
  }
  if (!menu) {
    console.warn("Elemento de menu ('.menu' ou 'nav ul') não encontrado no DOM.");
    return;
  }

  // Toggle do menu (abre/fecha)
  function toggleMenu() {
    const isOpen = menu.classList.toggle('active'); // adiciona/remove .active
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

    // opcional: bloquear scroll do body quando menu aberto
    if (isOpen) body.classList.add('menu-open');
    else body.classList.remove('menu-open');
  }

  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });


  document.addEventListener('click', (e) => {
    if (!menu.classList.contains('active')) return;
    if (e.target === menu || menu.contains(e.target) || e.target === menuToggle) return;
    menu.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    body.classList.remove('menu-open');
  });


  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && menu.classList.contains('active')) {
      menu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      body.classList.remove('menu-open');
    }
  });


  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('active')) {
      menu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      body.classList.remove('menu-open');
    }
  });
});


// Ícones animados - versão compatível com mobile
const items = document.querySelectorAll(".list-icons li");

function revealItems() {
  const windowHeight = window.innerHeight;

  items.forEach(item => {
    const elementTop = item.getBoundingClientRect().top;
    const revealPoint = 120; 

    if (elementTop < windowHeight - revealPoint) {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
      item.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    }
  });
}

window.addEventListener("scroll", revealItems);
window.addEventListener("load", revealItems);
window.addEventListener("touchmove", revealItems); 

