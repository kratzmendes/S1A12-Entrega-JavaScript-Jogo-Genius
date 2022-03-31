//criação da tag main e suas divs
const tagBody = document.querySelector("body");

const tagMain = document.createElement("main");

//criação do menu

// const divMenu = document.createElement("div");
// divMenu.setAttribute("class","menu");

// const divMenuCard = document.createElement("div");
// divMenuCard.setAttribute("class","pontuação");
// const divMenuCardImg = document.createElement("img");
// divMenuCardImg.setAttribute("url","./");
// tagBody.appendChild(divMenuCard);
// divMenuCard.appendChild(divMenuCardImg);

let menu = [
    {
        id:"0",
        img: "./computador.png",
        nome: "Pontuação: 0",
    },
    {
        id:"1",
        img: "./Network Neighborhood (48x48px).png",
        nome: "Nível: 1",
    },
    {
        id:"2",
        img: "./Recycle Bin with paper-1 1.png",
        nome: "Reiniciar Jogo",
    },
    {
        id:"3",
        img: "./Documents Folder-1 1.png",
        nome: "GIT Rebecca",
        link:"https://github.com/RebeccaPires",
    },
    {
        id:"4",
        img: "./Documents Folder-1 1.png",
        nome: "GIT Leonardo",
        link:"https://github.com/kratzmendes",
    },
];
console.log(menu);

let tagAside = document.createElement("div");
tagMain.appendChild(tagAside);
let valorPontuacao = 0;
let valorNivel = 0;

for(let i=0;i<menu.length;i++){

    let divMenu = document.createElement("div");
    divMenu.setAttribute("class","menu");
    divMenu.id = `${menu[i].id}`
    let menuDivImg = document.createElement("div");
    menuDivImg.setAttribute("class","img");
    let tagImg = document.createElement("img");
    tagImg.setAttribute("src",`${menu[i].img}`);
    menuDivImg.appendChild(tagImg);

    let MenudivNome = document.createElement("div");
    MenudivNome.setAttribute("class","nometexto");
    MenudivNome.setAttribute("id",`texto${i}`);
    MenudivNome.innerText = `${menu[i].nome}`
    if(menu[i].id==2){
        divMenu.addEventListener("click", iniciaJogo)
    }
    console.log(menu[i].id);
    if(menu[i].id==3||menu[i].id==4){
        divMenu.addEventListener("click", function(meuGit){
            // window.location.href = menu[i].link
            window.open(menu[i].link,"_blank")
        })
        console.log("oi");
    }

    tagAside.appendChild(divMenu);
    divMenu.appendChild(menuDivImg);
    divMenu.appendChild(MenudivNome);

}

// reiniciarJogo.onclick = () => click(botao);
// function botao(){
//     menu[2].innerHTML
// }


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
tagFooter.setAttribute("class","windows");

//botão iniciar
const divIniciar = document.createElement("button");
divIniciar.setAttribute("class","iniciar windowsbtn");
divIniciar.setAttribute("id","btnIniciar");
divIniciar.innerText = 'Iniciar';

let imgBtn = document.createElement('img');
imgBtn.setAttribute('class', 'btnLogo');

imgBtn.setAttribute('src', './Windows logo (without text)-2 1.png');
divIniciar.appendChild(imgBtn);

tagFooter.appendChild(divIniciar);

//hora


//let textoIniciar = document.getElementById('btnIniciar');
// create new li element
//let texto= document.createElement('li');
//li.textContent = 'About Us';
// add it to the ul element
//menu.appendChild(li);


const divHora = document.createElement("div");
divHora.setAttribute("class","windowstime");
divHora.setAttribute("id","relogio");

let hoje = new Date();
let hora = hoje.getHours() + ":" + ('0'+hoje.getMinutes()).slice(-2);

divHora.innerText = `${hora}`;
let imgVol = document.createElement('img');
imgVol.setAttribute('class', 'btnVol');
imgVol.setAttribute('src', './Volume-2 1.png');
divHora.appendChild(imgVol);
tagFooter.appendChild(divHora);


/*  INNER HTML!!

let theDiv = document.getElementById("relogio");
let content = document.createTextNode("HORA");
theDiv.appendChild(content);
*/


/*
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
*/

/*

    border-inline-start-style: solid;
    box-shadow:0px 0px 0px 10px red inset;
    outline: 5px solid green;
    outline-offset: -5px;
    
    box-shadow: inset 0 -7px 9px -7px rgba(0,0,0,0.7);
    background: linear-gradient(to bottom, #999 0, #ffffff 7px, #ffffff 100%);


*/
tagBody.appendChild(tagFooter);

// gitLeonardo.appendChild(menu[4]);

let cores = [];
let coresClickadas = [];
let pontos = 0;
let fase = 0;
let iniciou = false;

const vermelho = document.querySelector('.divVermelho');
const verde = document.querySelector('.divVerde');
const azul = document.querySelector('.divAzul');
const amarelo= document.querySelector('.divAmarelo');

function iniciaJogo(){

    alert('Bem vindo ao Genius! Iniciando novo jogo!');
    pontos = 0;
    fase = 0;
    iniciou = true;

    proxFase();
}

function proxFase(){
    pontos++;
    fase++;
    let pontuacao = document.getElementById("texto1");
    pontuacao.innerText = `Nível: ${fase}`;
    criaCores();
   
   
}

function criaCores(){

    let novasCores = Math.floor(Math.random() * 4);
    cores[cores.length] = novasCores;
    coresClickadas = [];

    for(let i=0; i<cores.length; i++) {
        
        let corDiv = criaNomeCor(cores[i]);
        
        acendeCor(corDiv, Number(i) + 1);


    }
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
  
    }, number+600);
}

divVermelho.onclick = () => click(0);
divVerde.onclick = () => click(1);
divAzul.onclick = () => click(2);
divAmarelo.onclick = () => click(3);



function click(cor) {

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
            
            vocePerdeu();
            break;
        }
//        else if(coresClickadas[i] == cores[i]){
//          pontos++;
//    }

    }
    if(coresClickadas.length == cores.length) {
        //alert(`Pontuação: ${pontos}!\nVocê acertou!\n O seu level atual é de ${fase}!`);
        let pontuacao = document.getElementById("texto0");
        pontuacao.innerText = `Pontuação: ${pontos}`;
        


        proxFase();
    }
}

function vocePerdeu() {
   
    alert(`Pontuação: ${pontos}!\nVocê perdeu o jogo!\n Você chegou até a fase nº ${fase}!\nClique em OK para iniciar um novo jogo`);
    cores = [];
    pontos = 0;
    let pontuacao = document.getElementById("texto0");
    pontuacao.innerText = `Pontuação: ${pontos}`;
    
    coresClickadas = [];

    iniciaJogo();
}


divIniciar.onclick = () => iniciaJogo();

let reiniciarJogo = document.getElementById("2");
console.log(reiniciarJogo);

