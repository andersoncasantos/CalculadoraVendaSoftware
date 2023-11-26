//variáveis


const form = document.querySelector('form');
const inputWage = document.querySelector('#wage');
const inputPercentage = document.querySelector('#percentage');

const Modal = {

    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),

    open(){
        Modal.wrapper.classList.add('open');
    },
    close() {
        Modal.wrapper.classList.remove('open');
    }
}

form.onsubmit = event => {
    event.preventDefault();

    const wage = inputWage.value;
    const percentage = inputPercentage.value;

    const result = CalculoSoftware(wage, percentage);
    const message = `O valor do software é R$ ${result.toFixed(2)}`;
    Modal.message.innerText = message;
    Modal.open();
}

Modal.buttonClose.onclick = () => {
    Modal.close();
}

function CalculoSoftware(wage, percentage){
    return wage * (percentage / 100).toFixed(2);
}