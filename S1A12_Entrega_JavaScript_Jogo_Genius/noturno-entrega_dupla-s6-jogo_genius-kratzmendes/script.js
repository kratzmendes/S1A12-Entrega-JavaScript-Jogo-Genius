//criação da tag main e suas divs
const tagBody = document.querySelector("body");

const tagMain = document.createElement("main");

const divContainer = document.createElement("div");
divContainer.setAttribute("class","container");

const divAzul = document.createElement("div");
divAzul.setAttribute("class","azul");

const divAmarelo = document.createElement("div");
divAmarelo.setAttribute("class","amarelo");

const divVermelho = document.createElement("div");
divVermelho.setAttribute("class","vermelho");

const divVerde = document.createElement("div");
divVerde.setAttribute("class","verde");

divContainer.appendChild(divVermelho);
divContainer.appendChild(divVerde);
divContainer.appendChild(divAzul);
divContainer.appendChild(divAmarelo);

tagMain.appendChild(divContainer);

tagBody.appendChild(tagMain);


// criação da tag footer e seus atributos

const tagFooter = document.createElement("footer");

const divDevs = document.createElement("div");
divDevs.setAttribute("class","devs");

const tagP = document.createElement("p");

const tagSpan = document.createElement("span");
tagSpan.setAttribute("class","credito");
tagSpan.innerText = "Jogo criado por Leonardo Kratz e Rebecca Pires";

const gitLeonardo = document.createElement("a");
gitLeonardo.setAttribute("class","gitDev");
gitLeonardo.setAttribute("href","");
gitLeonardo.innerText = "Github - Leonardo";

const gitRebecca = document.createElement("a");
gitRebecca.setAttribute("class","gitDev");
gitRebecca.setAttribute("href","");
gitRebecca.innerText = "Github - Rebecca";

tagP.appendChild(tagSpan);
tagP.appendChild(gitRebecca);
tagP.appendChild(gitLeonardo);
divDevs.appendChild(tagP);
tagFooter.appendChild(divDevs);
tagBody.appendChild(tagFooter);

//lógica do jogo

let cores = [];
let coresClickadas = [];
let pontos = 0;
let fase = 0;

const vermelho = document.querySelector('.divVermelho');
const verde = document.querySelector('.divVerde');
const azul = document.querySelector('.divAzul');
const amarelo= document.querySelector('.divAmarelo');

function iniciaJogo(){

    alert('Bem vindo ao Genius! Iniciando novo jogo!');
    pontos = 0;

    proxFase();
}

function proxFase(){
    pontos++;
    fase++;
    criaCores();
}

function criaCores(){

    let novasCores = Math.floor(Math.random() * 4);
    cores[cores.length] = novasCores;
    coresClickadas = [];

    for(let i=0; i < cores.length;i++) {
        
        let elementColor = createColorElement(cores[i]);
        
       // lightColor(elementColor, Number(i) + 1);
    }

    return cores;
}

let createColorElement = (color) => {
    if(color == 0) {
        return green;

    } else if(color == 1) {
        return red;

    } else if (color == 2) {
        return yellow;

    } else if (color == 3) {
        return blue;
    }
}

console.log(criaCores());