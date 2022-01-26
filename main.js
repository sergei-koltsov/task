function prom(number) {

  console.log(number);
  let arr = [];

  let numList = 0;
  while (arr.length < 8) {
    numList = number % 10;
    arr.unshift(numList);
    number = Math.floor(number / 10);
  }
  console.log(arr);

  let even = 0;
  let odd = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even += arr[i];
    } else {
      odd += arr[i];
    }
  }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i] < arr[i + 1] && arr[i + 2] % 2 == 0 || arr[i + 3] % 2 == 0 && arr[j] % 2 !== 0 && arr[j + 1] % 2 !== 0 && arr[j] < arr[j + 1]) {
        console.log(2000);
        break;
      }
      else if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 == 0 || arr[i + 3] % 2 == 0 && arr[j] % 2 !== 0 && arr[j + 1] % 2 !== 0) {
        console.log(1000);
        break;
      }
      else if (even > odd) {
        console.log(100);
        break;
      }
      else {
        console.log(0);
        break;
      }
    }
    break;
  }
}

prom(37283988);