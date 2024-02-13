
(function () {

  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.btn');

  const clear = document.querySelector('.btn-clr');
  const equal = document.querySelector('.btn-equal');

  buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      let value = e.target.dataset.num;
      screen.value += value;
    })
  });

  equal.addEventListener('click', function () {

    if (screen.value === '') {
      screen.value = '';
    } else {
      const answer = eval(screen.value);
      screen.value = answer;
    }
  });

  clear.addEventListener('click', function (e) {
    screen.value = "";
  })


})();