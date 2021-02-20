const express = require('express');
const server = express();
const nunjucks = require('nunjucks');

const ideas = [
  {
    img: "https://www.flaticon.com/premium-icon/icons/svg/3242/3242257.svg",
    title: "Cursos de Programação",
    category: "Estudo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    url: "#",
  },
  {
    img: "https://www.flaticon.com/premium-icon/icons/svg/3242/3242372.svg",
    title: "Exercícios",
    category: "Saúde",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    url: "#",
  },
  {
    img: "https://www.flaticon.com/premium-icon/icons/svg/3242/3242355.svg",
    title: "Meditação",
    category: "Ler a Bíblia",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    url: "#",
  },
  {
    img: "https://www.flaticon.com/premium-icon/icons/svg/3242/3242389.svg",
    title: "Assistir Séries",
    category: "Séries",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    url: "#",
  },
  {
    img: "https://www.flaticon.com/premium-icon/icons/svg/3242/3242384.svg",
    title: "Fazer novos amigos",
    category: "Vida Social",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    url: "#",
  },
  {
    img: "https://www.flaticon.com/premium-icon/icons/svg/3242/3242322.svg",
    title: "Pintura",
    category: "Criatividade",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    url: "#",
  },
]

nunjucks.configure("views", {
  express: server,
  noCache: true
})

// Configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"));

server.get("/", (req, res) => {
  const reversedIdeas = [...ideas];
  let lastIdeas = [];

  for (let idea of reversedIdeas.reverse()) {
    if (lastIdeas.length < 2) {
      lastIdeas.push(idea);
    }
  }
  return res.render("index.html", { ideas: lastIdeas });
})

server.get("/ideias", (req, res) => {
  const reversedIdeas = [...ideas];
  return res.render("ideias.html", { ideas: reversedIdeas.reverse() });
})
// server.listen(3000);