// No.1
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Example usage:
const inputString = "Hi, Feke!";
const reversedString = reverseString(inputString);
console.log(reversedString); // Output:  ekeF,iH

// No.2
function continent(Africa) {
  return Africa.length;
}

// Example usage:
const Africa = "Hello,Nigeria!";
const universe = continent(Africa);
console.log(universe); // Output: 13

// No.3
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Example usage:
const inputSentence = "hello world! this is a test.";
const capitalizedSentence = capitalizeWords(inputSentence);
console.log(capitalizedSentence); // Output: "Hello World! This Is A Test."

// No.4
function findMaximum(arr) {
  return Math.max(...arr);
}
function findMinimum(arr) {
  return Math.min(...arr);
}
// No.5
function sumArray(arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const totalSum = sumArray(numbers);
console.log("Sum:", totalSum); // Output: Sum:

// No.6
function filterArray(arr, condition) {
  return arr.filter(condition);
}

// Example usage:
const time = [1, 2, 3, 4, 5, 6];
const isEven = (num) => num % 2 === 0; // Condition: keep only even numbers

const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers); // Output: [2, 4, 6]

// No.7
function factorialIterative(n) {
  if (n < 0) return undefined; // Factorial is not defined for negative numbers
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Example usage:
console.log(factorialIterative(5)); // Output: 120

// No.8
function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime numbers
  if (num <= 3) return true; // 2 and 3 are prime numbers

  // Check for even numbers and multiples of 3
  if (num % 2 === 0 || num % 3 === 0) return false;

  // Check for factors from 5 to the square root of num
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true; // If no factors were found, num is prime
}

// Example usage:
console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false
console.log(isPrime(13)); // Output: true

// No.9
function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime numbers
  if (num <= 3) return true; // 2 and 3 are prime numbers

  // Check for even numbers and multiples of 3
  if (num % 2 === 0 || num % 3 === 0) return false;

  // Check for factors from 5 to the square root of num
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true; // If no factors were found, num is prime
}

// Example usage:
console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false
console.log(isPrime(13)); // Output: true
