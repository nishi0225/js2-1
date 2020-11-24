'use strict'
{
//input要素を取得
const fizz = document.getElementById('Fizz');
const buzz = document.getElementById('Buzz');

//出力
const textShow = (showText) => {
  const pElement = document.createElement('p');
  pElement.textContent = showText;
  const outPut = document.getElementById('output');
  outPut.appendChild(pElement);
}

//整数値以外が入力された場合の処理
const validationError = () => {
  const error = document.createElement('p');
  error.textContent = '整数値を入力してください';
  const outPut = document.getElementById('output');
  outPut.appendChild(error);
}

//入力値をリセット
const reset = () => {
  const output = document.getElementById('output');
  while(output.firstChild) {
    output.removeChild(output.firstChild);
  }
}
//入力された値の計算
const calc = (fizNum,buzNum) => {
  reset();
  if (!Number.isInteger(Number(fizNum)) || !Number.isInteger(Number(buzNum)) || fizNum === '' || buzNum === '') {
    reset();
    validationError();
  }else {
    for (let i = 1; i < 100; i++) {
      if (i % fizNum === 0 && i % buzNum === 0) {
        textShow(`FizzBuzz${i}`);
      } else if (i % fizNum === 0) {
        textShow(`Fizz${i}`);
      } else if (i % buzNum === 0) {
        textShow(`Buzz${i}`);
      }
    }
  }
}

document.getElementById('btn').addEventListener('click', () => {
  const fizNum = fizz.value;
  const buzNum = buzz.value;

  calc(fizNum,buzNum);
})
}