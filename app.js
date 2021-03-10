const keys = ['On/Off', 'CE', 'C', '÷', 7, 8, 9, '×', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', 'Mode', '='];


const container = document.querySelector('.container');
const btnWrap = document.querySelector('.buttons');
let prevOperand = document.querySelector('.previous-operand');
let currOperand = document.querySelector('.current-operand');
prevOperand = '';
currOperand = '';

for (let i = 0; i < keys.length; i++) {
    var button = document.createElement('button');
    button.innerText = keys[i];
    button.classList.add('keys')
    btnWrap.append(button);
}

const math = {
    addition(x, y) {
        return x + y;
    },
    substract(x, y) {
        return x - y;
    },
    multiply(x, y) {
        return x * y;
    },
    divide(x, y) {
        return x / y;
    },
    reset() {
        prevOperand.value = '';
        currOperand.value = '';
    },
    erase() {
        return currOperand.slice(0, -1);
    }
};

