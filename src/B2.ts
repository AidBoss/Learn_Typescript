function Sum(number1: number | string, number2: number | string) {
  let result;
  if (typeof number1 === "number" && typeof number2 === "number") {
    result = number1 + number2;
  } else {
    result = number1.toString() + " " + number2.toString();
  }
  return result;
}
const beforeName = "you are ";
const afterName = " years old";
const SumAges = beforeName + Sum(5, 5) + afterName;
console.log(SumAges);
const FullName = Sum("Ank", "mew");
console.log(FullName);
