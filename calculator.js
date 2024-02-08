let display = document.getElementById('calculator-display');

function appendValue(value) {
  display.value += value;
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function clearDisplay() {
  display.value = '';
}

function appendDecimal() {
  if (!display.value.includes('.')) {
    display.value += '.';
  }
}

