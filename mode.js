const secondBtn = document.querySelector('#second_btn');
const secondOperator = document.querySelectorAll('.second')

const secondMap = {
    'sin': 'cosec',
    'cos': 'sec',
    'tan': 'cot',
    'cosec': 'sin',
    'sec': 'cos',
    'cot': 'tan',
    'sinh': 'cosech',
    'cosh': 'sech',
    'tanh': 'coth',
    'cosech': 'sinh',
    'sech': 'cosh',
    'coth': 'tanh'
}

let secondMode = localStorage.getItem('secondMode') == 'true';

function applySecondMode() {
    secondOperator.forEach(btn => {
        const text = btn.innerText.toLowerCase();
        if(secondMap[text]) {
            btn.innerText = secondMap[text];
        }
    })
}

if(secondMode) {
    secondBtn.classList.add('active');
    applySecondMode();
}

secondBtn.addEventListener('click', () => {
    secondMode = !secondMode;
    localStorage.setItem('secondMode', secondMode);

    secondBtn.classList.toggle('active');
    applySecondMode();
})
