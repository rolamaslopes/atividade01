function Quadrado(){
    let num1 = document.querySelector("#valor1").value;
    let num2 = document.querySelector("#valor2").value;
    let num3 = document.querySelector("#valor3").value;
    
    let result = document.querySelector("#result");
    result.innerHTML = `Quadrado de ${num1} é ${Math.pow(num1, 2)}, de ${num2} é ${Math.pow(num2, 2)} e de ${num3} é ${Math.pow(num3, 2)}`;

}


const btn = document.querySelector("#btn");

btn.addEventListener("click", Quadrado);