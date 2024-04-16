const btn = document.querySelector("#btn");

let num = [];

let result = document.querySelector("#result");

btn.addEventListener("click", function(){
    let inputNumbers =  Number(document.querySelector("#numbers").value);
    
    num.push(inputNumbers);
   
    num.sort(function(a,b){
        return a - b;
    })

    result.innerHTML = num;
})