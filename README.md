# 🌐 Conecta Idosos – Inclusão Digital e Tecnologia Social

![Preview do site](./Captura%20de%20tela%202025-10-18%20115524.png)

Site institucional desenvolvido para a **ONG Conecta Idosos**, com o objetivo de promover **inclusão digital para a terceira idade**, conectando gerações e facilitando o acesso à tecnologia por meio de cursos, oficinas e ações solidárias.

---

## 🧩 Objetivo do Projeto

Este projeto foi desenvolvido como parte da disciplina de **Desenvolvimento Web** do curso de **Análise e Desenvolvimento de Sistemas**, atendendo aos requisitos de estruturação semântica, design system, responsividade e interatividade com **HTML5, CSS3 e JavaScript**.

O site simula uma **plataforma real de ONG**, composta por páginas informativas, formulário de cadastro, galeria de projetos e sistema interativo com manipulação do DOM.

---

## 🖥️ Estrutura do Projeto

projeto-ong/
│
├── index.html # Página inicial (sobre a organização)
├── projetos.html # Página de projetos sociais e voluntariado
├── cadastro.html # Página com formulário interativo
│
├── /css
│ ├── base.css # Variáveis, paleta de cores e tipografia
│ ├── layout.css # Estrutura geral e grids responsivos
│ ├── components.css # Botões, cards, formulários, alertas etc.
│ └── responsive.css # Breakpoints e ajustes para mobile/tablet
│
├── /js
│ ├── main.js # Funções gerais e inicialização
│ ├── menu.js # Menu responsivo (hambúrguer e dropdown)
│ ├── formValidation.js # Validação de formulário e feedback visual
│ ├── spa.js # Estrutura básica de SPA (Single Page Application)
│ └── storage.js # Uso de Local Storage e manipulação de dados
│
└── /img
├── logo.png
├── banner.png
├── projetos/
├── icones/
└── galeria/


---

## 🎨 Sistema de Design

- **Paleta de cores:**  
  Tons principais e secundários definidos em variáveis CSS (`--primary`, `--secondary`, `--neutral-100`, etc.)  
  > Exemplo: 8 cores distribuídas entre base, destaque, sucesso, erro e neutros.

- **Tipografia:**  
  Hierarquia com 5 níveis (`h1` a `h5`) e fontes acessíveis com alto contraste.  
  > Fonte principal: `Poppins`, secundária: `Roboto`.

- **Sistema de espaçamento modular:**  
  8px | 16px | 24px | 32px | 48px | 64px

---

## 🧱 Requisitos Técnicos Implementados

### ✅ HTML5 Semântico
- Estrutura com `header`, `main`, `section`, `article`, `aside` e `footer`;
- Hierarquia de títulos (`h1`–`h3`) consistente;
- Uso de `alt` em todas as imagens para acessibilidade.

### ✅ CSS Modular e Responsivo
- Layout principal com **CSS Grid** (estrutura de 12 colunas);
- Componentes internos com **Flexbox**;
- 5 breakpoints responsivos (320px, 480px, 768px, 1024px, 1440px);
- Paleta de cores e variáveis CSS customizadas;
- Botões e formulários com estados `hover`, `focus`, `active`, `disabled`.

### ✅ JavaScript Interativo
- Validação de formulários com mensagens de erro e sucesso;
- Manipulação do DOM para feedbacks e alertas dinâmicos;
- Sistema de **menu interativo com botão hambúrguer**;
- **Local Storage** para simular persistência de dados;
- Estrutura básica de **SPA (Single Page Application)**.

### ✅ Acessibilidade e SEO
- Navegação via teclado;
- Alto contraste de cores (WCAG 2.1 nível AA);
- Tags `meta` para SEO e descrição semântica;
- Títulos e links descritivos.

---

## 📱 Responsividade

Desenvolvimento **mobile-first**, garantindo experiência fluida em:
- Smartphones (até 480px);
- Tablets (até 768px);
- Notebooks e desktops (acima de 1024px).

---

## 🧮 Tecnologias Utilizadas

| Categoria | Ferramenta |
|------------|-------------|
| Estrutura | HTML5 |
| Estilo | CSS3 (Grid, Flexbox, Variáveis) |
| Interatividade | JavaScript (DOM e Local Storage) |
| Design | Figma (protótipo e paleta) |
| Versionamento | Git e GitHub |

---

## 🚀 Como Executar o Projeto

1. Faça o clone do repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/projeto-ong.git
🧠 Desenvolvido por

Luana Chiebao Machado Godoy
Estudante de Análise e Desenvolvimento de Sistemas
🎓 Cruzeiro do Sul Virtual
📊 Foco em Planejamento, Analytics e Desenvolvimento Web

💼 GitHub: @Chiebao

💌 E-mail: contato@conectaidosos.org.br

🌱 “A inclusão digital é o primeiro passo para uma sociedade verdadeiramente conectada.”
