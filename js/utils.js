function calculateIMC(weight, height){
    const imc = (weight / ((height/100) ** 2)).toFixed(2);
    return imc
}

function notNumber(value){
    return isNaN(value) || value == ""
}

function highLightResult(result){

    const baixoPeso = result < 18.5;
    const normal = result > 18.5 && result < 25;
    const sobrepeso = result > 25 && result < 30;

    const imc = document.querySelector("#imc-result");

    if(baixoPeso){
        imc.setAttribute("class", "baixo-peso")
    }else if(normal){
        imc.setAttribute("class", "normal")
    }else if(sobrepeso){
        imc.setAttribute("class", "sobrepeso")
    }else{
        imc.setAttribute("class", "obeso")
    }

}

export {calculateIMC, notNumber, highLightResult}