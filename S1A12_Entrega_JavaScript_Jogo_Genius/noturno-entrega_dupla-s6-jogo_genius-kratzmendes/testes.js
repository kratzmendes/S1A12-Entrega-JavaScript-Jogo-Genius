let cores = [];

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
       
    }, number - 250);


    setTimeout(() => {
        element.classList.remove('selected');
    });
}


console.log(criaCores());