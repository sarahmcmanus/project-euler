var primeFactorize = function(input){
  var primeFactorsArray = [];
  var remain = input;
  var i = 2;
  while (i <= remain) {
    if (remain % i === 0) {
      primeFactorsArray.push(i);
      remain = remain / i;
    } else {
      i++;
    }
  }
  return primeFactorsArray;
};
 
var listOfPrimeFactors = primeFactorize(600851475143);
    
var greatestPrimeFactor = listOfPrimeFactors[listOfPrimeFactors.length - 1];
 
 
/*alert("The prime factors are " + listOfPrimeFactors + "; the GPF is " + greatestPrimeFactor);
*/
 
var answer1 = document.getElementById("answer1");
 
answer1.innerHTML = listOfPrimeFactors;
 
var answer2 = document.getElementById("answer2");
 
answer2.innerHTML = listOfPrimeFactors[listOfPrimeFactors.length - 1];