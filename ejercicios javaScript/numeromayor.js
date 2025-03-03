let num1 = 15;
let num2 = 30;
let num3 = 20;

if (num1 > num2 && num1 > num3) {
    console.log(`El número mayor es:  ${num1}`);
} else if (num2 > num1 && num2 > num3) {
    console.log(`El número mayor es:  ${num2}`);
} else if (num3 > num1 && num3 > num2) {
    console.log(`El número mayor es:  ${num3}`);
} else {
    console.log("Los números son iguales o hay un empate.");
}