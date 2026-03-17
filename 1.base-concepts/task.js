"use strict";

function solveEquation(a, b, c) {
  let arr = [];

  const D = b * b - 4 * a * c;

  if (D < 0) {
    return arr;
  }

  const divisor = 2 * a;

  if (D === 0) {
    arr.push(-b / divisor);
    return arr;
  }

  const sqrtD = Math.sqrt(D);
  arr.push((-b + sqrtD) / divisor, (-b - sqrtD) / divisor);

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthly = percent / 1200;
  const loan = amount - contribution;

  if (loan <= 0) {
    return 0;
  }

  const pow = Math.pow(1 + monthly, countMonths);
  const payment = (loan * (monthly * pow)) / (pow - 1);

  const total = payment * countMonths;

  return Number(total.toFixed(2));
}
