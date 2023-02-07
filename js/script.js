import {Modal} from './modal.js'
import { AlertError } from './alert-error.js';
import {calculateIMC, notNumber, highLightResult} from './utils.js'

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");



form.onsubmit = function(event){
    event.preventDefault()

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    const weightOrHeigthNotANUmber = notNumber(weight) || notNumber(height)

    if(weightOrHeigthNotANUmber){
        AlertError.open();
        return;
    }

    AlertError.close();
    
    const result = calculateIMC(weight, height);
    displayResultMessage(result)
    
}

function displayResultMessage(result){
    const message = `Seu IMC é de <strong id="imc-result">${result}</strong>`;

    Modal.message.innerHTML = message;
    highLightResult(result)
    
    Modal.open();
}

inputHeight.oninput = () => AlertError.close();
inputWeight.oninput = () => AlertError.close();

