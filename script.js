
function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}



function clearDisplay2() {
  document.getElementById('display').slice(0, -1);
}

function deleteLastCharacter() {
  var display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    document.getElementById('display').value = eval(document.getElementById('display').value);
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
