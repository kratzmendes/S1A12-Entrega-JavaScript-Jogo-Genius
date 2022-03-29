/* 
                    ╔═╦═╗
                    ║║║║╠═╦╦╦╦══╦═╦╦╦╗
                    ║║║║║╩╣║║║║║║╩╣║║║
Developed By:       ╚╩═╩╩═╩══╩╩╩╩═╩══╝
*/
let order = []; // Ordem
let clickedOrder = []; // Ordem dos clicks
let score = 0; // Pontuação
let level = 0; //Level

var somGameover=document.getElementById("somGameover"); //Som de GameOver
var somDoGreen=document.getElementById("somDoGreen");
var somDoRed=document.getElementById("somDoRed");
var somDoYellow=document.getElementById("somDoYellow");
var somDoBlue=document.getElementById("somDoBlue");
somGameover.volume = 0.2;
//somNextLevel.volume = 0.2;
somDoGreen.volume = 0.2;
somDoRed.volume = 0.2;
somDoYellow.volume = 0.2;
somDoBlue.volume = 0.2;

// 0 = Verde/Green
// 1 = Vermelho/Red
// 2 = Amarelo/Yellow
// 3 = Azul/Blue

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


//Cria ordem aleatoria de cores
let shuffleOrder = () => {
    // Sorteia e guarda a numeração a cada rodada
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    //Exibe o numero sorteado
    for(let i in order) {
        //Salva a cor sorteada
        let elementColor = createColorElement(order[i]);
        //Acende a cor sorteada
        lightColor(elementColor, Number(i) + 1);
    }

}

//Acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;

    // Ativa a cor pelo CSS
    setTimeout(() => {
        element.classList.add('selected');
        soundsColors(color);
    }, number - 250);

    // Desativa a cor
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//Checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {

    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Parabéns!🏆  A sua pontuação atual é :${score} e o seu level atual é : ${level}!\nClique em OK para ir para o proximo level! 👀`);
        nextLevel();
    }
}

//Função para o click do usuario
let click = (color) => {

    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');
    soundsColors(color);

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();

    },250);
}

//Função que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        somDoGreen.play();
        return green;

    } else if(color == 1) {
        somDoRed.play();
        return red;

    } else if (color == 2) {
        somDoYellow.play();
        return yellow;

    } else if (color == 3) {
        somDoBlue.play();
        return blue;
    }
}

//Função para proximo nivel do jogo
let nextLevel = () => {
    score++;
    level++;

    //alert(`Parabéns!🏆  A sua pontuação atual é :${score} e o seu level atual é : ${level}!\nClique em OK para ir para o proximo level! 👀`);
    shuffleOrder();
}

//Função derrota
let gameOver = () => {
    somGameover.play();
    alert(`Oh não, você perdeu! 🥺\n A pontuação feita durante o jogo é: ${score} e você conseguiu avançar até o level ${level}!\n Clique em OK para jogar novamente! 👀`);
    order = [];
    clickedOrder = [];
    score = 0;
    level = 0;

    //window.location.reload(true);
    playGame();
}

//Função que inicia o jogo
let playGame = () => {
    alert('Bem vindo ao Genius! Iniciando novo jogo!');
    score = 0;
    level = 0;

    nextLevel();
}

//Eventos de clique
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

let soundsColors = (color) => {
    if ((color == 0) || (color == 'green')) {
        somDoGreen.play();
        if (somDoGreen.currentTime > 0.5) {
            setTimeout(() => {
                somDoGreen.pause();
            }, 450);
        }
    } else if ((color == 1) || (color == 'red')) {
        somDoRed.play();
        if (somDoRed.currentTime > 0.5) {
            setTimeout(() => {
                somDoRed.pause();
            }, 450);
        }
    } else if ((color == 2) || (color == 'yellow')) {
        somDoYellow.play();
        if (somDoYellow.currentTime > 0.5) {
            setTimeout(() => {
                somDoYellow.pause();
            }, 450);
        }
    } else if ((color == 3) || (color == 'blue')) {
        somDoBlue.play();
        if (somDoBlue.currentTime > 0.5) {
            setTimeout(() => {
                somDoBlue.pause();
            }, 450);
        }
    }
}

playGame();