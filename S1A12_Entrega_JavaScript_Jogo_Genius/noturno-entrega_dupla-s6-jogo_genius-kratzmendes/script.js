//criação da tag main e suas divs
const tagBody = document.querySelector("body");

const tagMain = document.createElement("main");

const divContainer = document.createElement("div");

const divAzul = document.createElement("div");
divAzul.setAttribute("class","azul");

const divAmarelo = document.createElement("div");
divAmarelo.setAttribute("class","amarelo");

const divVermelho = document.createElement("div");
divVermelho.setAttribute("class","vermelho");

const divVerde = document.createElement("div");
divVerde.setAttribute("class","verde");

divContainer.appendChild(divVerde);
divContainer.appendChild(divVermelho);
divContainer.appendChild(divAmarelo);
divContainer.appendChild(divAzul);

tagMain.appendChild(divContainer);

tagBody.appendChild(tagMain);



// criação da tag footer e seus atributos

const tagFooter = document.createElement("footer");

const divDevs = document.createElement("div");
divDevs.setAttribute("class","devs");

const tagP = document.createElement("p");

const tagSpan = document.createElement("span");
tagSpan.innerText = "Jogo criado por Leonardo Kratz e Rebecca Pires";

const gitLeonardo = document.createElement("a");
gitLeonardo.setAttribute("href","");
gitLeonardo.innerText = "Github - Leonardo";

const gitRebecca = document.createElement("a");
gitRebecca.setAttribute("href","");
gitRebecca.innerText = "Github - Rebecca";

tagP.appendChild(tagSpan);
tagP.appendChild(gitRebecca);
tagP.appendChild(gitLeonardo);
divDevs.appendChild(tagP);
tagFooter.appendChild(divDevs);
tagBody.appendChild(tagFooter);