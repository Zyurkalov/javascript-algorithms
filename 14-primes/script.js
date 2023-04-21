/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(num). Её единственный аргумент — целое число num.
 * Функция должна возвращать массив простых чисел от 2 до num.
 * 
*/
function findPrime(num) {
    if ( num < 2) {
        return false
    }

    for (let i = 2; i < num; i++) {
      if ( num % i == 0) {
      return false;
      }
    }
    return true;
  }

function primes(num) {  
  let isPrime = [];
  for (let i = 2; i <= num; i++){
    if (findPrime(i) === false) continue;
    isPrime.push(i)
  }
  return isPrime
};


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]