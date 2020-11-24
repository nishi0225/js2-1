'use strict'
{
//input要素を取得
const fizz = document.getElementById('Fizz');
const buzz = document.getElementById('Buzz');

//出力
const showText = (outputText) => {
  const pElement = document.createElement('p');
  pElement.textContent = outputText;
  const outPut = document.getElementById('output');
  outPut.appendChild(pElement);
}

//整数値以外が入力された場合の処理
const validateInputValues = () => {
  const error = document.createElement('p');
  error.textContent = '整数値を入力してください';
  const outPut = document.getElementById('output');
  outPut.appendChild(error);
}

//入力値をリセット
const resetInpuValues = () => {
  const output = document.getElementById('output');
  while(output.firstChild) {
    output.removeChild(output.firstChild);
  }
}
//入力された値の計算
const calc = (fizNum,buzNum) => {
  resetInpuValues();
  if (!Number.isInteger(Number(fizNum)) || !Number.isInteger(Number(buzNum)) || fizNum === '' || buzNum === '') {
    resetInpuValues();
    validateInputValues();
  }else {
    for (let i = 1; i < 100; i++) {
      if (i % fizNum === 0 && i % buzNum === 0) {
        showText(`FizzBuzz${i}`);
      } else if (i % fizNum === 0) {
        showText(`Fizz${i}`);
      } else if (i % buzNum === 0) {
        showText(`Buzz${i}`);
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