function faulty2(){
  const number = document.getElementsByClassName('number');
  const symbol = document.getElementsByClassName('symbol');
  let expression = "";
  let expression2 = "";

  const result = document.querySelector('.result');

  for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
      let value = this.innerHTML;
      expression += value;
      expression2 += value;

      result.innerHTML = expression;
    });
  }

  for (let i = 0; i < symbol.length; i++) {
    symbol[i].addEventListener('click', function () {

      let value = this.innerHTML;
      let actualValue = this.getAttribute('data-op') || this.innerHTML;

      expression += ` ${value} `;
      expression2 += ` ${actualValue} `;

      result.innerHTML = expression;
    });
  }

  const clear = document.querySelector('.clear');
  clear.addEventListener('click', function () {
    result.innerHTML = "";

    expression = "";
    expression2 = "";
  });

  const equals = document.querySelector('.equals');
  equals.addEventListener('click', function () {
    try {

      let prob = Math.random();
      // alert(prob);

      if (prob <= 0.1) {
        let correctResult = eval(expression);
        result.innerHTML = correctResult;
        expression = correctResult.toString();
        expression = "";
        expression2 = "";
      } else {
        let faultyResult = eval(expression2);
        result.innerHTML = faultyResult;
        expression = faultyResult.toString();
        expression = "";
        expression2 = "";
      }
    } catch {
      result.innerHTML = "-ERROR-";
      expression = "";
      expression2 = "";
    }
  });

}

faulty2();