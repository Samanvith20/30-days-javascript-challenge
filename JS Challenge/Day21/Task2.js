function Reverse(num) {
  const sign = num < 0 ? -1 : 1;

  const reverse = parseInt(num.toString().split("").reverse().join("")) * sign;

  console.log(reverse);

  return reverse;
}

Reverse(876);
