import { Modal } from './modal.js';
import { AlertError } from './alert-error.js'

const form = document.querySelector('form');
const inputWage = document.querySelector('#wage');
const inputPercentage = document.querySelector('#percentage');

form.onsubmit = event => {
    event.preventDefault();

    const wage = inputWage.value;
    const percentage = inputPercentage.value;

    const showAlertError = notANumber(wage) || notANumber(percentage);

    if(showAlertError){
        AlertError.open();
        return;
    }

    AlertError.close();

    const result = CalcSoftware(wage, percentage);
    const message = `O valor do software é R$ ${result.toFixed(2)}`;
    Modal.message.innerText = message;
    Modal.open();
}

function notANumber(value){
    return isNaN(value) || value == "";
}

function CalcSoftware(wage, percentage){
    return wage * (percentage / 100).toFixed(2);
}