//This starts things out with 1 and 2, as stated in the problem
var fib = [1,2];
 
//Starting with the third element in the array, and as long as the previous element was less than 4 million, increment by one -- should be current less than 4 million, but it made problems and can be fixed later
//Create a var "next" that is equal to the sum of the previous two terms in the fibonnacci sequence
//Push that result to the fib array
for (i=2; fib[i-1] < 4000000; i++) {
  var next = fib[i-2] + fib[i-1]; 
  fib.push(next);
}
 
//Now I'm making a new array that will have just the even numbers... this could probably be simplified into fewer and more elegant steps!
var fibEven = []
 
//Starting with the 2nd element, if the element is less than 4 million and even -- if the modulus when divided by 2 is 0 --- add i tto the fibEven array
for (i=1; fib[i] < 4000000; i++) {
  var nextEven = fib[i]; 
  if (fib[i] % 2 === 0) {
  fibEven.push(nextEven);
  }
}
 
var sum = 0;
 
//Now I'm adding up all the elements of fibEven into the variable "sum"
for (j=0; j < fibEven.length; j++) {
  sum += fibEven[j];
}
 
alert(sum);