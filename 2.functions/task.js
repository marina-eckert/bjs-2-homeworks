function getArrayParams(...arr) {
  if (!arr.length) return 0;

  let min = arr[0];
  let max = arr[0];
  let total = 0;

  for (const n of arr) {
    if (n < min) min = n;
    if (n > max) max = n;
    total += n;
  }

  const avg = Number((total / arr.length).toFixed(2));

  return {
    min: min,
    max: max,
    avg: avg,
  };
}

function summElementsWorker(...arr) {
  if (!arr.length) return 0;

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (!arr.length) return 0;

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (!arr.length) return 0;

  let even = 0;
  let odd = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even += arr[i];
    } else {
      odd += arr[i];
    }
  }

  return even - odd;
}

function averageEvenElementsWorker(...arr) {
  if (!arr.length) return 0;

  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
      count++;
    }
  }

  return count ? sum / count : 0;
}

function makeWork(arrOfArr, func) {
  let result = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const current = func(...arrOfArr[i]);
    if (current > result) {
      result = current;
    }
  }

  return result;
}
