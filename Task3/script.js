let currentValue = '';
let operator = '';
let previousValue = '';
let isDarkMode = true;

function appendValue(value) {
  currentValue += value;
  updateDisplay();
}

function setOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = '';
  updateDisplay();
}

function clearDisplay() {
  currentValue = '';
  operator = '';
  previousValue = '';
  updateDisplay();
}

function calculateResult() {
  let result;
  switch (operator) {
    case '+':
      result = parseFloat(previousValue) + parseFloat(currentValue);
      break;
    case '-':
      result = parseFloat(previousValue) - parseFloat(currentValue);
      break;
    case '*':
      result = parseFloat(previousValue) * parseFloat(currentValue);
      break;
    case '/':
      result = parseFloat(previousValue) / parseFloat(currentValue);
      break;
    default:
      result = currentValue;
  }

  currentValue = result.toString();
  operator = '';
  previousValue = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentValue;
}

function toggleTheme() {
  isDarkMode = !isDarkMode;
  const calculator = document.getElementById('calculator');
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('button');
  const themeIcon = document.querySelector('.theme-toggle');

  if (isDarkMode) {
    document.body.style.background = '#000000';
    calculator.classList.remove('light');
    display.classList.remove('light');
    buttons.forEach(btn => btn.classList.remove('light'));
    themeIcon.innerHTML = '&#9788;';
  } else {
    document.body.style.background = '#f3f3f3';
    calculator.classList.add('light');
    display.classList.add('light');
    buttons.forEach(btn => btn.classList.add('light'));
    themeIcon.innerHTML = '&#9790;';
  }
}
