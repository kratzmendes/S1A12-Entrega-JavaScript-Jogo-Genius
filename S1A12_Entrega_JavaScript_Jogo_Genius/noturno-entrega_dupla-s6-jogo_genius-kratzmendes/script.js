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
gitLeonardo.setAttribute("href","https://github.com/kratzmendes");
gitLeonardo.setAttribute("target","_blank");
gitLeonardo.innerText = "Github - Leonardo";

const gitRebecca = document.createElement("a");
gitRebecca.setAttribute("class","gitDev");
gitRebecca.setAttribute("href","https://github.com/RebeccaPires");
gitRebecca.setAttribute("target","_blank");
gitRebecca.innerText = "Github - Rebecca";

tagP.appendChild(tagSpan);
tagP.appendChild(gitRebecca);
tagP.appendChild(gitLeonardo);
divDevs.appendChild(tagP);
tagFooter.appendChild(divDevs);
tagBody.appendChild(tagFooter);


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
    fase = 0;

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

    for(let i in cores) {
        
        let corDiv = criaNomeCor(cores[i]);
        
        acendeCor(corDiv, Number(i) + 1);
    }
    //alert(`Cores geradas: ${cores}`);

    return cores;
}
function criaNomeCor(cor){
    if(cor == 0) {
        return divVermelho;

    } else if(cor == 1) {
        return divVerde;

    } else if (cor == 2) {
        return divAzul;

    } else if (cor == 3) {
        return divAmarelo;
    }
}

function acendeCor(element, number) {
    number = number * 500;

    setTimeout(() => {
        element.classList.add('selected');

    }, number+250);

    setTimeout(() => {
        element.classList.remove('selected');
  
    }, number+500);
}


divVermelho.onclick = () => click(0);
divVerde.onclick = () => click(1);
divAzul.onclick = () => click(2);
divAmarelo.onclick = () => click(3);

function click(cor) {

    //alert('entrou na função click(cor)');
    coresClickadas[coresClickadas.length] = cor;
    criaNomeCor(cor).classList.add('selected');
   
    setTimeout(() => {

        criaNomeCor(cor).classList.remove('selected');
        verificaCliques();

    },250);
}


function verificaCliques() {

    for(let i in coresClickadas) {
        if(coresClickadas[i] != cores[i]) {
            alert('chamar vocePerdeu()');
            vocePerdeu();
            //break;
        }
    }
    if(coresClickadas.length == cores.length) {
        alert(`Pontuação: ${pontos}!\nVocê acertou!\n O seu level atual é de ${fase}!\nClique em OK para iniciar um novo jogo`);
        proxFase();
    }
}

function vocePerdeu() {
    alert('entrou em vocePerdeu()');
    alert(`Pontuação: ${pontos}!\nVocê perdeu o jogo!\n Você chegou atá a fase nº ${fase}!\nClique em OK para iniciar um novo jogo`);
    cores = [];
    coresClickadas = [];

    iniciaJogo();
}

iniciaJogo();
