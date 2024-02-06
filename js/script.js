import { Modal } from './modal.js';
import { AlertError } from './alert-error.js'
import { calculateValueSoftware, notANumber } from './utils.js';

const form = document.querySelector('form');
const inputWage = document.querySelector('#wage');
const inputPercentage = document.querySelector('#percentage');

inputWage.oninput = () => AlertError.close();
inputPercentage.oninput = () => AlertError.close();

form.onsubmit = event => {
    event.preventDefault();

    const wage = parseFloat(inputWage.value);
    const percentage = parseFloat(inputPercentage.value);

    const wageOrPercentageNotNumber = notANumber(wage) || notANumber(percentage);

    if (wageOrPercentageNotNumber) {
        AlertError.open();
        return;
    }

    AlertError.close();

    const result = calculateValueSoftware(wage, percentage);
    displayResultMessage(result);

}

function displayResultMessage(result) {
    const message = `O valor do software é R$ ${result.toFixed(2).toString().replace(".", ",")}`;
    Modal.message.innerText = message;
    Modal.open();
}