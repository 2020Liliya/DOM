document.querySelector('.operations-block').addEventListener('click', function (e) {
  const clickedEl = e.target;
  if (clickedEl.tagName === 'BUTTON') {
    onOperationButtonClick(clickedEl);
  }
});

function onOperationButtonClick(button) {
  const operation = button.innerHTML;
  const number1 = +document.getElementById('number1').value;
  const number2 = +document.getElementById('number2').value;
  makeOperation(operation, number1, number2);
}

function makeOperation(operation, number1, number2) {
  switch (operation) {
    case '+':
      return alert(number1 + number2);
      break;
    case '-':
      return alert(number1 - number2);
      break;
    case '*':
      return alert(number1 * number2);
      break;
    case '/':
      return alert(number1 / number2);
      break;
    default:
      return null;
  }
}