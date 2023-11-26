//variáveis


const form = document.querySelector('form');
const inputWage = document.querySelector('#wage');
const inputPercentage = document.querySelector('#percentage');

const modalWrapper = document.querySelector('.modal-wrapper');
const modalMessage = document.querySelector('.modal .title span');
const modalBtnClose = document.querySelector('.modal button.close');

form.onsubmit = event => {
    event.preventDefault();

    const wage = inputWage.value;
    const percentage = inputPercentage.value;

    const result = CalculoSoftware(wage, percentage);
    const message = `O valor do software é R$ ${result.toFixed(2)}`;
    modalMessage.innerText = message;
    modalWrapper.classList.add('open');
}

modalBtnClose.onclick = () => {
    modalWrapper.classList.remove('open');
}

function CalculoSoftware(wage, percentage){
    return wage * (percentage / 100).toFixed(2);
}