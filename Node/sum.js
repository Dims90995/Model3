const [,, firstInput, secondInput] = process.argv;

const firstInputNumber = Number(firstInput);
const secondInputNumber = Number(secondInput);

if (isNaN(firstInputNumber)) {
  console.error('${firstInput}First input is not a number');
} else if (isNaN(secondInputNumber)) {
    console.error('${secondInput}Second input is not a number');
    } else {
        console.log(firstInputNumber + secondInputNumber);
    }