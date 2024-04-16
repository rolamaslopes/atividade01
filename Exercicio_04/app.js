const btn = document.querySelector("#btn");

function verificarNumero(){
    let resultado = document.querySelector("#result");
    let numero = Number(document.querySelector("#numbers").value);
    
    if(numero === 0){
        resultado.innerHTML = `NULO`;
    }

    else if(numero % 2 === 0){
        resultado.innerHTML = `O número ${numero} é par`;
    }
    else{
        resultado.innerHTML = `O número ${numero} é ímpar`;
    }
}

btn.addEventListener("click", verificarNumero);