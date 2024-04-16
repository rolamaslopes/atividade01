const btn = document.querySelector("#btn");

function calcularMedia() {
    let valor1 = Number(document.querySelector("#valor1").value);
    let valor2 = Number(document.querySelector("#valor2").value);
    
    let result = document.querySelector("#result");
    
    let media = (valor1 + valor2) / 2.0;
    result.innerHTML = `A média entre os dois valores é ${media.toFixed(2)}`;
}

btn.addEventListener("click", calcularMedia);